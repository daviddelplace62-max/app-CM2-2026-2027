# Recette reproductible

L'application n'a aucune dépendance pour son utilisation. Les outils ci-dessous sont destinés au développement et restent hors du dossier statique.

## Prérequis

Node.js, Python 3, Chromium et Playwright 1.64.1. Les contrôles des voix ajoutent `ffmpeg` et `ffprobe` (outils de développement uniquement). Le contrôle de non-régression des identifiants nécessite un checkout Git contenant le commit de référence `7eab643` ; l’application distribuée en ZIP fonctionne sans Git. Dans cet environnement :

```sh
npm install --prefix /workspace/cm2-tools --cache /workspace/cm2-tools/npm-cache --no-audit --no-fund --save-exact playwright@1.64.1
```

Depuis la racine du dépôt :

```sh
node tests/check-content.cjs
node tests/check-coverage.cjs
node tests/check-arithmetic.cjs
node tests/check-media.cjs
python3 -m http.server 8080 --bind 127.0.0.1
```

Dans un second terminal, depuis la même racine :

```sh
node tests/browser.cjs
node tests/media-browser.cjs
```

Si le serveur tourne déjà sur ce port, ne pas le lancer une deuxième fois. Le script navigateur cherche Playwright dans les modules habituels puis dans `/workspace/cm2-tools/node_modules`. Sur une autre machine, définir `NODE_PATH` pour son installation ; `CHROMIUM_PATH` remplace `/usr/bin/chromium` et `CM2_TEST_URL` remplace `http://127.0.0.1:8080/`.

Les deux recettes navigateur peuvent viser le même serveur avec `CM2_TEST_URL=http://127.0.0.1:8002/` si ce port est utilisé dans l’environnement. Elles créent des profils synthétiques dans un contexte de navigateur neuf ; elles ne lisent aucune sauvegarde réelle.

## Ce qui est contrôlé

- `check-content.cjs` charge les scripts déclarés par `index.html` dans leur ordre réel et contrôle disciplines, identifiants, absence de fixtures, chapitres, étapes, exercices, corrigés, critères, prérequis explicites, tableaux/frises/cartes/diagrammes et égalité binaire des pistes WAV avec leurs données embarquées.
- `check-coverage.cjs` contrôle les liens de `coverage-map.json` : chaque compétence déclarée possède des étapes existantes avec activités, et toutes les étapes sont rattachées à la matrice.
- `check-arithmetic.cjs` recalcule indépendamment les opérations binaires explicites reconnues dans les consignes. Il indique séparément les réponses numériques que son motif ne permet pas de vérifier. Il ne valide pas automatiquement tous les problèmes rédigés.
- `browser.cjs` pilote un vrai Chromium par les commandes visibles : création de profils, navigation et résolution d'un parcours par matière, sauvegarde, export téléchargé, import refusé/restauré/annulé, thèmes, validation accompagnée, menu mobile et largeurs 360/390/1440. Il vérifie aussi tous les corrigés déclarés par l’API du moteur, les déplacements au clavier et au toucher, les associations, les textes de lecture, les trois types de diagrammes, la lecture des onze pistes audio et l’absence de requête après chargement. Un manifeste SHA-256 empêche de valider une recette pendant laquelle les fichiers de l’application auraient changé. Les tests de parseur utilisent également l'API du moteur. La navigation directe d'API sert aux contrôles d'écrans ; la réussite des exercices n'est pas injectée dans l'état.

- `check-media.cjs` vérifie une piste MP3 locale par passage anglais, son intégrité face aux données embarquées, son format, sa durée et son niveau sonore intégré ; il compare également les identifiants, réponses et critères à la livraison `7eab643`. Les supports doivent référencer des étapes existantes et avoir une description.
- `media-browser.cjs` vérifie les commandes de chaque voix sans synthèse système, les états d’erreur, les cinq manipulations au toucher et au clavier, les pauses et remises à zéro, la réduction des mouvements, les versions statiques et les petites largeurs. Il couvre aussi la correction des fractions à compléter (par exemple `9` ou `9/12`). Le décodage audio ne constitue pas une écoute humaine ni une certification de prononciation.

Les fichiers `*-results.json` contiennent les résultats horodatés de la dernière exécution. Un contrôle échoué produit un code de sortie non nul. Lire `../RAPPORT_TESTS.md` pour le bilan et les limites. Une réussite de structure ou de navigateur n'est pas une preuve indépendante d'exhaustivité du programme officiel.

Le navigateur cloud bloque actuellement les URL `file://` avant le chargement (`ERR_BLOCKED_BY_ADMINISTRATOR`). Le test retente cette ouverture et l'enregistre séparément ; aucun contournement de politique n'est utilisé. La recette fonctionnelle utilise le serveur HTTP local. Aucun lien localhost n'est un lien public de partage.
