# Rapport de validation — CM2 2026-2027

Dernière recette complète : **2026-10-24T06:16:04.667Z** (horodatage UTC). Chromium **154.0.8037.57**, Playwright **1.64.1**, serveur HTTP statique local. **37 scénarios réussis, aucun échec.** Les fichiers de l’application sont restés identiques pendant tout ce dernier passage ; les SHA-256 sont enregistrés dans `tests/browser-results.json`.

## Contenus et cohérence

Les scripts effectivement déclarés dans `index.html` ont été chargés dans leur ordre réel : **12 entrées, 340 étapes, 820 exercices et activités**, dont 241 activités accompagnées et 579 exercices automatiques. Les onze disciplines restent identifiables ; la douzième entrée regroupe les enseignements transversaux.

| Entrée | Étapes | Exercices et activités |
|---|---:|---:|
| Français | 83 | 173 |
| Mathématiques | 72 | 159 |
| Histoire | 19 | 39 |
| Géographie | 19 | 40 |
| Sciences et technologie | 45 | 103 |
| Anglais | 24 | 72 |
| Enseignement moral et civique | 13 | 39 |
| Arts plastiques | 10 | 30 |
| Éducation musicale | 13 | 39 |
| Histoire des arts | 10 | 30 |
| Éducation physique et sportive | 13 | 39 |
| Numérique, médias et vie relationnelle | 19 | 57 |

Contrôle structurel réussi : identifiants uniques, aucune fixture technique restante, aucun chapitre vide, plusieurs exercices par étape, objectif/leçon/exemple/consigne/indice/correction présents, critères des activités accompagnées présents, solutions de QCM parmi les choix, ordres et associations cohérents, références de prérequis existantes. Les tableaux, cartes, frises et diagrammes ont été contrôlés selon leur format.

La matrice structurée comporte **375 entrées et 424 liens vers les 340 étapes existantes**. Aucune référence orpheline et aucune étape sans rattachement. Ces nombres désignent les entrées de la matrice pédagogique ; ils ne constituent pas un décompte indépendant de formulations réglementaires littérales. Les textes, calendriers d’application au CM2 et choix de répartition sont documentés dans `SOURCES.md` et `COUVERTURE_PROGRAMME.md`.

Les **579 corrigés automatiques déclarés (584 variantes)** sont tous interprétables et acceptés par le moteur. Cela vérifie leur utilisabilité, pas leur vérité disciplinaire. Le test arithmétique recalcule indépendamment 16 opérations binaires explicites ; 108 autres réponses numériques sont hors du motif automatique. Les auteurs, le responsable du projet et le testeur ont relu les 124 consignes numériques, leurs résultats et leurs explications ; aucune erreur de calcul n’a été décelée dans cette relecture. Les dates et règles ont également fait l’objet des revues éditoriales consignées dans les notes de matière. Il ne s’agit pas d’une preuve formelle de tous les énoncés.

## Fonctionnement vérifié dans Chromium

- Création de deux profils indépendants, présélection des deux thèmes, changement du thème et du surnom sans perte ; surnom affiché comme texte, sans création de balise HTML.
- Un scénario réel dans **chacune des douze entrées** : accès libre, prérequis, saisie vide ou illisible sans tentative, erreur bloquante et indice, correction réussie, déverrouillage et retour. Les critères incomplets des activités pratiques ne permettent pas la validation.
- Progressions par matière et progression générale calculées sur toutes les étapes obligatoires ; points attribués une fois ; taux fondé sur les réponses automatiques interprétables, distinct de l’avancement. Révision sans double attribution.
- Distinction entre activité déclarée réalisée, exercice auto-corrigé et observation accompagnée ; une déclaration de l’enfant ne valide pas l’exercice pratique. Les observations sont enregistrées par exercice.
- Reprise indépendante dans chaque matière et conservation après rechargement.
- Export JSON réellement téléchargé ; restauration, refus d’un fichier invalide et de structures imbriquées malformées ; annulation sans perte ; suppression de profil annulée puis confirmée sans toucher à l’autre profil.
- Import d’une ancienne progression technique conservant ses données mais l’excluant des points et statistiques scolaires courants.
- Remise en ordre avec boutons réellement utilisés au clavier et au toucher ; associations avec sélecteurs ; fractions, virgule/point, unités pertinentes, groupements de milliers et accents contrôlés.
- **15 étapes de lecture** affichées avec texte exact, retours à la ligne préservés et attribution. Ce contrôle d’affichage ne certifie pas à lui seul la classification ou le volume annuel des œuvres ; voir `BIBLIOTHEQUE.md` et le parcours accompagné de lecture.
- Vrais diagrammes en barres, courbe et disque : SVG, axes/légendes, données alternatives accessibles et exercices correspondants.
- **11 pistes WAV locales** (dix créations pédagogiques et un arrangement), dans 11 étapes : données embarquées identiques octet par octet aux WAV, décodage et progression de la lecture audio dans le navigateur. L’écoute sur haut-parleur physique n’a pas été évaluée.
- État anglais lisible lorsque la voix locale est absente ; aucune promesse d’évaluation automatique de prononciation.
- Menu mobile : focus initial, boucle clavier, fermeture par Échap et par le fond, restitution du focus. Aucun débordement horizontal à **360, 390 et 1440 pixels** sur profils, réglages, tableau de bord, les douze pages de chapitres et des étapes représentatives des types d’exercices, des lectures longues et des trois diagrammes.
- Avertissement visible si le stockage est refusé. **Aucune erreur JavaScript, aucun appel HTTP externe et aucune requête de ressource après le chargement initial** pendant la recette.

## Corrections et reprise de recette

Les premières passes ont révélé un identifiant partagé entre chapitre et étape, une légende de frise manquante, des ressources audio encore absentes et un avertissement de prononciation incomplet dans l’état sans voix. Ces points ont été corrigés puis les contrôles ont été rejoués. Un test de lecture acceptait à tort seulement `pre-wrap` et `break-spaces` ; il a été corrigé pour admettre `pre-line`, qui conserve bien les retours à la ligne. Une passe a également détecté une modification de `sciences.js` pendant son exécution : elle n’a pas été retenue comme validation du manifeste final. Le dernier passage complet ci-dessus réussit sur les fichiers gelés.

## Contrôles non exécutables ou non revendiqués

- L’ouverture directe **file://** a été retentée et refusée avant chargement par la politique du Chromium cloud : `ERR_BLOCKED_BY_ADMINISTRATOR`. Aucun contournement utilisé. Le code est organisé en scripts classiques sans fetch ni modules, mais le double-clic dans un navigateur personnel n’est pas annoncé comme testé.
- Aucun service worker n’est livré : la réouverture hors connexion d’un site hébergé n’est pas garantie. L’absence de requête après chargement a été testée ; ce n’est pas un test de cache ou de réouverture.
- Pas de test sur smartphone physique, Safari/Firefox, lecteur d’écran complet, haut-parleurs physiques ou environnement familial. Les largeurs mobiles ont été simulées dans Chromium.
- Pas de mesure automatique de la prononciation, d’authentification de l’adulte, ni de preuve de maîtrise pratique par clic. Les activités d’oral, d’écriture, d’arts, de musique et d’EPS requièrent l’accompagnement décrit.
- Les tests fonctionnels parcourent un scénario par matière et les formats représentatifs ; ils ne simulent pas un enfant réalisant les 820 activités sur une année. Ils ne remplacent pas l’observation pédagogique durable.
- Aucun déploiement Netlify n’est validé par ces tests. Le téléchargement GitHub et son archive relèvent du contrôle de livraison distinct.

## Reproduire

Voir `tests/README.md`. Les sorties détaillées sont `tests/content-results.json`, `tests/coverage-results.json`, `tests/arithmetic-results.json` et `tests/browser-results.json`. Chaque commande de contrôle retourne un code non nul en cas d’échec. La recette finale a été exécutée avec `CM2_TEST_URL=http://127.0.0.1:8081/ node tests/browser.cjs` ; le port local peut être adapté.
