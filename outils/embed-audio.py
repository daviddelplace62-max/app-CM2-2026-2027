#!/usr/bin/env python3
"""Embarquer les WAV originaux pour permettre l'écoute dans l'onglet sans requête.
Le dossier statique livré inclut le résultat ; Python n'est pas requis par le parent.
"""
from pathlib import Path
import base64
import json

root = Path(__file__).resolve().parents[1]
folder = root / 'ressources' / 'audio'
registry = {}
for path in sorted(folder.glob('*.wav')):
    registry[path.relative_to(root).as_posix()] = 'data:audio/wav;base64,' + base64.b64encode(path.read_bytes()).decode('ascii')
output = '/* Généré par outils/embed-audio.py ; ne pas éditer les données à la main. */\nwindow.CM2_AUDIO = ' + json.dumps(registry, ensure_ascii=False, sort_keys=True) + ';\n'
(folder / 'data.js').write_text(output, encoding='utf-8')
print(f'{len(registry)} pistes WAV embarquées ; résultat déterministe dans ressources/audio/data.js')
