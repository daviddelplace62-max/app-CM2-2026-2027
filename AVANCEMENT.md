# État d’avancement

Mise à jour : 23 octobre 2026. Branche de travail : `developpement/cm2-2026-2027`.

## Objectif et garde-fous

Application complète CM2 2026-2027 demandée. Dépôt neuf, application de suites numériques non ouverte ni modifiée. Les sources, contenus et tests restent séparés. Ce dépôt n’est **pas une livraison pédagogique complète**.

## Lots

1. Inspection : dépôt initial ne contenant que README, aucune instruction AGENTS.md trouvée, aucun changement utilisateur initial.
2. Sources officielles : bloquées HTTP 403 sur les deux points d’entrée, y compris après tentative hors sandbox. Domaines nécessaires enregistrés dans le brouillon de configuration. Activation/publication à réaliser dans les paramètres d’environnement.
3. Modèle : identifiants de matières fixés, structure chapitre → étape → exercices. La notion détaillée et la matrice des compétences seront établies après lecture des textes. Les données `technique-v1` sont exclusivement des fixtures et ne seront pas utilisées comme identifiants d’apprentissages.
4. Moteur technique réalisé : profils, thèmes, navigation, sauvegarde et validation. Recette navigateur HTTP exécutée ; voir RAPPORT_TESTS.md pour le détail exact. La politique Chromium bloque les URL file://, donc le double-clic reste non vérifié.
5. Contenus : aucun cours disciplinaire rédigé ; attendre la vérification officielle obligatoire.
6. Exhaustivité : non vérifiée. Aucune prétention de couverture complète.
7. Livraison : guide du prototype écrit ; branche dédiée publiée sur GitHub, archive ZIP téléchargée et vérifiée. 26 scénarios Chromium réussis. Aucun déploiement Netlify ni fusion dans main effectué.

## Prochaine reprise

- Retenter les deux URL dans SOURCES.md une fois l’accès activé ; découvrir et consulter les textes liés.
- Établir les dates d’application pour le CM2, les attendus annuels, les objectifs de cycle et les progressions proposées.
- Remplacer les fixtures par fichiers maintenables par matière, avec notions explicites et plusieurs exercices variés. Préserver les identifiants pédagogiques définitifs lors des mises à jour.
- Compléter la matrice une ligne par compétence et contrôler chaque référence.
- Ajouter les activités d’association, ordre, tableaux, cartes et frises, ainsi que l’audio anglais et ses états d’indisponibilité. Vérifier que l’écrit, l’oral, les arts, la musique et l’EPS restent accompagnés.
- Rejouer tous les tests avec les vrais contenus et contrôler les calculs, dates et corrigés.
- Livrer une archive du programme complet seulement après validation ; tester le téléchargement externe GitHub si publication de branche autorisée et possible.

## Décisions à ne pas perdre

Aucun backend, CDN ou clé API pour l’utilisateur. Scripts classiques compatibles file://. Chaque profil conserve son propre état. Les tentatives invalides sont séparées des erreurs pédagogiques. Les points sont attribués une fois. La progression finale doit compter les étapes obligatoires, sans moyenne des pourcentages des matières. Les observations d’adulte sont déclaratives, jamais une reconnaissance automatique de maîtrise.
