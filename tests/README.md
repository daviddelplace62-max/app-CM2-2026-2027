# Tests du socle technique

Ces essais portent sur le moteur de l'application et les données de recette `technique-v1`. Ils ne vérifient ni des cours ni la couverture officielle du CM2.

## Prérequis

Node.js et Chromium. Playwright est une dépendance de développement uniquement, jamais requise pour utiliser le dossier statique.

```sh
npm install --prefix /workspace/cm2-tools --cache /workspace/cm2-tools/npm-cache playwright@1.64.1
node tests/check-content.cjs
python3 -m http.server 8080 --bind 127.0.0.1
# Dans un second terminal, depuis la racine du dépôt :
node tests/browser.cjs
```

Le script cherche Playwright dans les dépendances normales, puis dans `/workspace/cm2-tools/node_modules`. Sur une autre machine, utiliser `NODE_PATH` pour pointer sur son installation Playwright. Définir `CHROMIUM_PATH` si Chromium n'est pas dans `/usr/bin/chromium`.

Le navigateur charge le serveur statique local `http://127.0.0.1:8080`, dans un contexte neuf, sans compte ni service externe. `CM2_TEST_URL` permet de choisir une autre adresse de test. Une tentative directe par `file://` a été refusée par la politique du Chromium cloud (`ERR_BLOCKED_BY_ADMINISTRATOR`) : la compatibilité par double-clic n’est donc pas validée dans cet environnement. Aucun contournement de politique n’a été utilisé. Les résultats de la dernière exécution sont enregistrés dans `browser-results.json`. Une assertion échouée donne un code de sortie non nul.

Le contrôle structurel refuse les identifiants dupliqués, chapitres vides, étapes sans exercice, consignes ou indices absents, exercices automatiques sans réponse et exercices accompagnés sans critères. Il ne certifie pas un corrigé disciplinaire.
