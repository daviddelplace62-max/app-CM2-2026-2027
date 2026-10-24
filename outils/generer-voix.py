#!/usr/bin/env python3
"""Fabrication des voix seulement ; aucun moteur vocal n'est livré au navigateur."""
import argparse
import base64
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parents[1]
ALPHABET = 'A. B. C. D. E. F. G. H. I. J. K. L. M. N. O. P. Q. R. S. T. U. V. W. X. Y. Z. Can you spell it? S. A. M.'
# Noms de lettres américains : A=/eɪ/, I=/aɪ/, F=/ɛf/, Z=/ziː/.
# Évite que le phonémiseur lise « A » comme un article ou « Eff » comme E-F-F.
ALPHABET_IPA = 'ˈeɪ. bˈiː. sˈiː. dˈiː. ˈiː. ˈɛf. dʒˈiː. ˈeɪtʃ. ˈaɪ. dʒˈeɪ. kˈeɪ. ˈɛl. ˈɛm. ˈɛn. ˈoʊ. pˈiː. kjˈuː. ˈɑːɹ. ˈɛs. tˈiː. juː. vˈiː. dˈʌbəl juː. ˈɛks. wˈaɪ. zˈiː. kæn juː spˈɛl ɪt? ˈɛs. ˈeɪ. ˈɛm.'

def digest(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()

def collect():
    script = "const fs=require('fs'),vm=require('vm');const w={window:{CM2_SUBJECTS:[]}};vm.runInNewContext(fs.readFileSync('contenus/anglais.js','utf8'),w);console.log(JSON.stringify(w.window.CM2_SUBJECTS[0].chapters.flatMap(c=>c.steps.flatMap(t=>[t,...t.exercises].filter(e=>e.speak).map(e=>({id:e.id,text:e.speak}))))));"
    return json.loads(subprocess.check_output(['node', '-e', script], cwd=ROOT))

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--models', type=Path, required=True)
    parser.add_argument('--only', nargs='*', help='Régénérer seulement ces ID en conservant les autres pistes vérifiées')
    args = parser.parse_args()
    import numpy as np
    import onnxruntime as ort
    import soundfile as sf
    from kokoro_onnx import Kokoro
    ort.disable_telemetry_events()
    config = ort.SessionOptions()
    config.intra_op_num_threads = 2
    config.inter_op_num_threads = 1
    model = args.models / 'kokoro-v1.0.onnx'
    voices = args.models / 'voices-v1.0.bin'
    # Empreintes des artefacts officiels utilisés pour cette livraison.
    assert digest(model) == 'beb0d1848dee9a49da392cc3df26958d46cfa35d321edf434f52949153f0df3a', 'Modèle différent de la provenance documentée'
    assert digest(voices) == 'bca610b8308e8d99f32e6fe4197e7ec01679264efed0cac9140fe9c29f1fbf7d', 'Banque de voix différente de la provenance documentée'
    session = ort.InferenceSession(str(model), sess_options=config, providers=['CPUExecutionProvider'])
    engine = Kokoro.from_session(session, str(voices))
    folder = ROOT / 'ressources' / 'voix'
    folder.mkdir(exist_ok=True, parents=True)
    rows = collect()
    previous = {r['id']:r for r in json.loads((folder / 'manifest.json').read_text())['clips']} if args.only else {}
    for index, row in enumerate(rows):
        if args.only and row['id'] not in args.only:
            old = previous[row['id']]
            assert old['text'] == row['text'] and digest(ROOT / old['file']) == old['sha256']
            rows[index] = old
            continue
        spoken = ALPHABET if row['id'] == 'en-alphabet' else row['text']
        phonemes = ALPHABET_IPA if row['id'] == 'en-alphabet' else engine.tokenizer.phonemize(spoken, 'en-us')
        # Trace contrôlable de la préparation linguistique, pas une transcription ASR.
        row['spokenText'] = spoken
        row['phonemes'] = phonemes
        data, sample_rate = engine.create(phonemes, voice='af_sarah', speed=0.85, lang='en-us', is_phonemes=True)
        assert np.isfinite(data).all() and len(data) > sample_rate
        data = np.concatenate((np.zeros(int(sample_rate * .15)), data, np.zeros(int(sample_rate * .35))))
        with tempfile.TemporaryDirectory() as tmp:
            wav = Path(tmp) / 'source.wav'
            sf.write(wav, data, sample_rate, subtype='PCM_16')
            measurement = subprocess.run(['ffmpeg', '-hide_banner', '-nostdin', '-i', str(wav), '-af', 'loudnorm=I=-18:TP=-2:LRA=7:print_format=json', '-f', 'null', '-'], capture_output=True, text=True, check=True)
            stats, _ = json.JSONDecoder().raw_decode(measurement.stderr[measurement.stderr.rindex('{'):])
            normalizer = 'loudnorm=I=-18:TP=-2:LRA=7:measured_I={input_i}:measured_TP={input_tp}:measured_LRA={input_lra}:measured_thresh={input_thresh}:offset={target_offset}:linear=true'.format(**stats)
            target = folder / (row['id'] + '.mp3')
            subprocess.run(['ffmpeg', '-hide_banner', '-loglevel', 'error', '-nostdin', '-y', '-i', str(wav), '-af', normalizer, '-ar', '24000', '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', '64k', '-map_metadata', '-1', str(target)], check=True)
        row['file'] = target.relative_to(ROOT).as_posix()
        row['sha256'] = digest(target)
        row['bytes'] = target.stat().st_size
        row['duration'] = float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', str(target)]))
        row['voice'] = 'af_sarah'
        row['language'] = 'en-US'
        row['speed'] = 0.85
        print(row['id'], round(row['duration'], 2), 's', flush=True)
    manifest = {'generator': 'kokoro-onnx 0.6.1', 'model': 'Kokoro-82M v1.0', 'modelSHA256': digest(model), 'voicesSHA256': digest(voices), 'voice': 'af_sarah', 'language': 'en-US', 'loudnessTargetLUFS': -18, 'truePeakTargetDBTP': -2, 'humanListeningReview': False, 'clips': rows}
    (folder / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
    embedded = [{**r, 'data': 'data:audio/mpeg;base64,' + base64.b64encode((ROOT / r['file']).read_bytes()).decode('ascii')} for r in rows]
    (folder / 'data.js').write_text('/* Généré par outils/generer-voix.py ; modèles hors application. */\nwindow.CM2_VOICES = ' + json.dumps(embedded, ensure_ascii=False) + ';\n')
    print('Voix incluses :', len(rows), '; poids MP3 :', sum(r['bytes'] for r in rows), flush=True)

if __name__ == '__main__':
    main()
