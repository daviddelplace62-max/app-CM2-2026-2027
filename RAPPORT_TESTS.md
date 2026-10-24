# Rapport de validation — CM2 2026-2027

Dernières recettes complètes : **2026-10-24T19:08:37.214Z** (socle) et **2026-10-24T19:09:05.724Z** (médias), horodatages UTC. Chromium **154.0.8037.57**, Playwright **1.64.1**, serveur HTTP statique local. **52 scénarios réussis, aucun échec : 37 pour le socle et 15 pour les médias.** Les fichiers de l’application sont restés identiques pendant chaque dernier passage ; les SHA-256 sont enregistrés dans `tests/browser-results.json` et `tests/media-browser-results.json`.

## Mise à jour : voix embarquées, illustrations et fractions

- **23 passages anglais, 23 fichiers MP3 locaux** : chaque texte actuellement proposé à l’écoute possède une piste unique. La correspondance texte/fichier et l’égalité des MP3 avec leurs données embarquées ont été contrôlées. Le poids total des MP3 est de **1 155 316 octets** (environ 1,16 Mo, hors encodage base64).
- Les 23 lecteurs ont été utilisés dans Chromium avec `speechSynthesis` et `SpeechSynthesisUtterance` indisponibles : lecture, vitesse normale/lente, pause, répétition depuis le début et arrêt à zéro ont tous fonctionné. La navigation interrompt le lecteur ; les cas fichier corrompu et enregistrement absent affichent un message explicite et conservent le texte anglais.
- **Volume technique** : MP3 mono 24 kHz, 64 kbit/s. Cible de fabrication −18 LUFS / −2 dBTP ; mesure indépendante des fichiers encodés : **−19,52 à −18,50 LUFS**, soit **1,02 LU d’écart entre pistes**. Les crêtes réelles restent comprises entre −2,35 et −1,88 dBTP, sans saturation. Les tests imposent une tolérance de 2 LU autour de la cible et, séparément, un écart inter-pistes maximal de 2 LU. La différence entre cible et mesure finale est explicitée ; le décodage et les mesures ne remplacent pas une écoute humaine.
- **47 étapes enrichies de supports originaux** : tous les supports déclarés ciblent des étapes existantes et ont été effectivement rendus dans le navigateur, avec texte descriptif et SVG. L’audit graphique détaillé et les limites des modèles figurent dans `SUPPORTS_VISUELS.md`.
- **Cinq familles de manipulations** ont été testées au clavier et au toucher : partager une fraction, placer un point sur une droite graduée, construire un symétrique, ouvrir/fermer un circuit et parcourir une frise. Démarrer, mettre en pause, reprendre, recommencer, consulter la version statique et arrêter les temporisateurs à la navigation sont vérifiés. Les réglages de réduction de mouvement du système et du profil désactivent les démonstrations tout en laissant les commandes manuelles utilisables. Aucune manipulation ne valide un exercice ni n’ajoute des points.
- Les 47 supports ont été vérifiés aux largeurs **360, 390 et 1440 pixels**, sans débordement horizontal. Le parcours audio et visuel n’a produit aucune requête de ressource après chargement initial et aucune erreur JavaScript.
- **Régression signalée par l’utilisateur corrigée** : dans « 3/4 = …/12 », **9** et **9/12** sont acceptés ; **8/12** est refusé. Le formulaire réel a été testé avec 9/12. Le même principe accepte **32** ou **32/1000** pour « 0,032 = …/1000 ». Une fraction ordinaire, comme 3/2, conserve son sens numérique 1,5 ; la correction particulière est limitée aux exercices de numérateur à compléter. Les dénominateurs hors consigne et les saisies illisibles ne sont pas des tentatives pédagogiques.
- Comparaison au commit de livraison **7eab643** : les identifiants des matières, chapitres, étapes et exercices, les réponses de référence et les grilles d’observation sont conservés. Les deux consignes de fraction sont précisées et leur format accepté enrichi. Les profils, import/export et anciennes sauvegardes ont repassé la recette de non-régression.

Une première recette a été volontairement interrompue lorsqu’une correction du tracé du circuit est intervenue après son lancement ; elle n’est pas retenue comme validation finale. Les deux passages complets ci-dessus ont été relancés après gel effectif de tous les fichiers et réussissent avec leurs manifestes stables.

**Limite vocale** : il s’agit d’une voix synthétique anglaise américaine produite à l’avance. Le responsable a contrôlé la préparation phonémique, notamment les noms de lettres A, F, I, Z et l’épellation S-A-M. Les tests ne constituent pas une écoute humaine intégrale des 23 pistes, une certification de prononciation native, ni un contrôle sur haut-parleurs physiques. La provenance, les licences et la procédure de fabrication sont documentées dans `ressources/voix/NOTICE.md`.

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
- Les boutons anglais utilisent désormais les pistes locales incluses ; la disponibilité d’une voix système n’est plus requise. Aucun score de prononciation n’est calculé.
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

Voir `tests/README.md`. Les sorties détaillées sont `tests/content-results.json`, `tests/coverage-results.json`, `tests/arithmetic-results.json`, `tests/browser-results.json`, `tests/media-content-results.json`, `tests/media-browser-results.json`, `tests/voice-playback-results.json` et `tests/support-render-results.json`. Chaque commande de contrôle retourne un code non nul en cas d’échec. Les recettes finales ont été exécutées avec `CM2_TEST_URL=http://127.0.0.1:8002/ node tests/browser.cjs` et `CM2_TEST_URL=http://127.0.0.1:8002/ node tests/media-browser.cjs` ; le port local peut être adapté.
