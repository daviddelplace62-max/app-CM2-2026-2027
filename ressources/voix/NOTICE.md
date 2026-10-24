# Voix anglaises incluses dans l’application

Les 23 passages anglais marqués pour l’écoute dans les contenus possèdent chacun un fichier MP3. Ce sont des **voix synthétiques produites à l’avance**, en anglais américain, et non des enregistrements d’enfant ou d’enseignant. Aucune voix, clé API, bibliothèque vocale ou connexion à un service de synthèse n’est nécessaire sur l’appareil du parent.

## Provenance et droits

Sources réellement consultées le 24 octobre 2026 :

- Moteur de fabrication **kokoro-onnx 0.6.1**, licence MIT : https://github.com/thewh1teagle/kokoro-onnx et https://raw.githubusercontent.com/thewh1teagle/kokoro-onnx/main/LICENSE .
- Modèle **Kokoro-82M v1.0**, annoncé sous licence Apache 2.0 par son auteur : https://github.com/hexgrad/kokoro et https://raw.githubusercontent.com/hexgrad/kokoro/main/LICENSE . Le README du convertisseur confirme la licence Apache 2.0 du modèle. Les copies MIT et Apache 2.0 figurent dans `licences/`.
- Export ONNX et banque de voix téléchargés depuis la publication officielle : https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.1 . Fichiers `kokoro-v1.0.onnx` et `voices-v1.0.bin` ; leurs empreintes SHA-256 sont consignées dans `manifest.json`.

Voix choisie : **af_sarah**, langue `en-us`, vitesse de fabrication **0,85**. Il s’agit d’un nom de voix du modèle ; aucune identité d’une personne n’est revendiquée. Ces licences permettent cette utilisation et la redistribution des ressources produites ; aucun modèle, poids ou moteur de synthèse n’est distribué avec le site. Le parent dispose seulement des résultats MP3 et de leurs métadonnées.

Une tentative d’accès au modèle Piper sur Hugging Face a été refusée (HTTP 403). Aucun fichier Piper n’a été utilisé et aucune désactivation de TLS, signature ou contrôle d’intégrité n’a été effectuée pour installer un moteur. Les sources GitHub officielles ci-dessus ont permis la fabrication locale.

## Fabrication et contrôle

`outils/generer-voix.py` recense les champs `speak` des contenus anglais sans modifier leurs identifiants ni leur texte. Le script synthétise chaque passage, ajoute un court silence de confort, normalise le volume en deux passes vers **−18 LUFS**, avec une crête cible de **−2 dBTP**, puis encode en **MP3 mono, 24 kHz, 64 kbit/s**. Le lecteur propose aussi une vitesse plus lente. Après encodage MP3, les mesures indépendantes vont de −19,52 à −18,50 LUFS, soit 1,02 LU d’écart entre les pistes ; les crêtes mesurées restent entre −2,35 et −1,88 dBTP. La cible de fabrication et la mesure après encodage sont donc distinguées.

Pour l’alphabet, les noms de lettres américains sont fournis explicitement en phonèmes, notamment A /eɪ/, F /ɛf/, I /aɪ/ et Z /ziː/. Cela évite une lecture du A comme un article ou une mauvaise interprétation d’une translittération. `manifest.json` conserve texte affiché, texte de production, phonèmes, durées et empreintes des fichiers. L’audit de ces phonèmes ne remplace pas l’écoute du son produit.

Les tests contrôlent la correspondance phrase-fichier, le décodage, le volume et les commandes de lecture dans Chromium. **Une lecture techniquement réussie n’est pas une validation humaine de toutes les prononciations** : aucune écoute humaine intégrale indépendante n’est revendiquée. Le parent peut écouter les passages, faire une pause, répéter et accompagner la pratique. La prononciation de l’enfant n’est jamais évaluée automatiquement.

## Reproduire ou remplacer les fichiers

Pour le développement seulement : installer les versions de `outils/voix-requirements.txt` dans un environnement Python isolé, télécharger les deux fichiers depuis la publication officielle citée, puis vérifier leurs SHA-256 contre `manifest.json` avant réutilisation. Avec FFmpeg installé :

```sh
python outils/generer-voix.py --models /chemin/vers/les/modeles
# Régénération ciblée après modification du script de production :
python outils/generer-voix.py --models /chemin/vers/les/modeles --only en-alphabet
```

Le script produit les MP3, le manifeste et `data.js`. Ce dernier embarque les audios pour permettre leur lecture sans requête supplémentaire une fois l’onglet chargé et conserve l’organisation sans modules compatible avec file://. Cela ne promet pas une réouverture hors connexion du site. Les modèles volumineux doivent rester hors du dépôt et du dossier Netlify. Les outils ne sont jamais nécessaires pour utiliser le ZIP livré.
