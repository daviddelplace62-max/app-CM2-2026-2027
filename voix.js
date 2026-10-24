/* Lecteur de phrases produites à l'avance. Aucun moteur distant ni microphone. */
'use strict';
(() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const playing = new Set();
  let generation = 0;
  function stop() {
    generation++;
    playing.forEach(audio => { audio.pause(); try { audio.currentTime = 0; } catch {} });
    playing.clear();
  }
  function render(item) {
    if (!item.speak) return '';
    const voice = (window.CM2_VOICES || []).find(row => row.text === item.speak);
    if (!voice?.data) return `<div class="voice-player"><p class="voice-transcript" lang="en-US">${esc(item.speak)}</p><p class="voice-status" role="status">Enregistrement anglais indisponible pour cette phrase. Le texte reste disponible ; demande une lecture à un adulte. La prononciation n’est pas évaluée automatiquement.</p></div>`;
    return `<section class="voice-player" aria-label="Écoute en anglais"><h3>Écouter et répéter en anglais</h3><p class="voice-transcript" lang="en-US">${esc(voice.text)}</p><audio class="voice-audio" preload="auto" src="${esc(voice.data)}" aria-label="Enregistrement : ${esc(voice.text)}"></audio><div class="voice-buttons"><button type="button" data-voice-play>▶ Écouter</button><button type="button" data-voice-pause>⏸ Pause</button><button type="button" data-voice-stop>⏹ Arrêter</button><button type="button" data-voice-repeat>↻ Répéter</button></div><label>Vitesse de lecture <select data-voice-rate><option value="1">Normale</option><option value="0.8">Plus lente</option></select></label><p class="voice-status" role="status">Enregistrement inclus dans l’application · anglais américain · voix synthétique. La prononciation n’est pas évaluée automatiquement.</p></section>`;
  }
  function bind(root) {
    root.querySelectorAll('.voice-player').forEach(player => {
      const audio = player.querySelector('.voice-audio');
      if (!audio) return;
      const status = player.querySelector('.voice-status');
      player.querySelector('[data-voice-rate]').onchange = event => { audio.playbackRate = Number(event.target.value); };
      const setStatus = message => { status.textContent = message + ' La prononciation n’est pas évaluée automatiquement.'; };
      const fail = () => setStatus('Cet enregistrement ne peut pas être lu. Le texte reste disponible ; demande une lecture à un adulte.');
      const play = async restart => {
        const requestedGeneration = generation;
        playing.forEach(other => { if (other !== audio) other.pause(); });
        try {
          if (restart) audio.currentTime = 0;
          playing.add(audio);
          await audio.play();
          if (generation !== requestedGeneration || !player.isConnected) { audio.pause(); playing.delete(audio); }
        } catch { fail(); }
      };
      player.querySelector('[data-voice-play]').onclick = () => play(false);
      player.querySelector('[data-voice-pause]').onclick = () => audio.pause();
      player.querySelector('[data-voice-stop]').onclick = () => { audio.pause(); audio.currentTime = 0; setStatus('Lecture arrêtée.'); };
      player.querySelector('[data-voice-repeat]').onclick = () => play(true);
      audio.addEventListener('playing', () => setStatus('Écoute en cours. Tu peux faire une pause puis répéter.'));
      audio.addEventListener('pause', () => { if (!audio.ended) setStatus('Lecture en pause. Le bouton Écouter permet de reprendre.'); });
      audio.addEventListener('ended', () => { playing.delete(audio); setStatus('Écoute terminée. Tu peux utiliser Répéter.'); });
      audio.addEventListener('error', fail);
    });
  }
  window.CM2_VOICEPLAYER = { render, bind, stop };
})();
