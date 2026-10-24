# Sons locaux de l’atelier CM2

Les 11 fichiers WAV sont des sons synthétisés localement, mono, 16 bits à 16 kHz. Ils ne proviennent d’aucun CDN, microphone, enregistrement d’enfant ni service d’IA.

**Dix créations pédagogiques originales de 2026** : quatre modèles de chants (`bonjour`, `pluie`, `canon`, `voyage`) et six pièces instrumentales (`roues`, `nuage`, `matieres`, `aba`, `chemins`, `jardin`). Les chants ont des paroles affichées dans l’application ; les fichiers jouent seulement leur mélodie. Un adulte accompagne l’apprentissage, le phrasé et l’interprétation.

**Un arrangement pédagogique** : `ode-joie-arrangement.wav`, court thème usuel de l’Ode à la joie de Ludwig van Beethoven, Neuvième Symphonie créée en 1824, transposé en do majeur et synthétisé pour l’application. La mélodie est dans le domaine public ; ce fichier n’est ni une œuvre intégrale, ni un enregistrement d’orchestre, ni une archive ancienne. La partition de cet arrangement et sa réalisation sont visibles dans `generer.py`.

Reproduction déterministe, pour le développement seulement :

```sh
python3 ressources/audio/generer.py
python3 outils/embed-audio.py
```

L’utilisateur final n’a besoin d’aucun de ces outils. `data.js` contient les sons prêts à jouer dès le chargement de l’onglet et évite une requête de contenu supplémentaire lors du choix d’une écoute. Cela ne promet pas la réouverture hors connexion du site.

Choisir un volume confortable. Aucun score de chant, d’oreille ou de prononciation n’est calculé à partir du son : les pratiques sont observées par l’adulte et distinguées des quiz.
