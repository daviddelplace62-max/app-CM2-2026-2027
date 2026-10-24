# État d’avancement — livraison du 24 octobre 2026

Branche de cette mise à jour : `ameliorations/voix-et-visuels`, issue de la livraison `7eab643` sur `developpement/cm2-2026-2027`. Année scolaire : **2026-2027**.

## Mise à jour voix et supports visuels

- **23 passages anglais enregistrés** avec Kokoro, voix synthétique en anglais américain, licences et provenance dans `ressources/voix/NOTICE.md`. Modèles et moteurs restent hors application. Les MP3 pèsent environ 1,16 Mo ; leurs données embarquées permettent la lecture sans requête supplémentaire. Commandes écouter/pause/arrêter/répéter et vitesse plus lente.
- **47 supports SVG originaux**, dans plusieurs matières, dont 11 étapes manipulables réparties entre cinq familles : fractions, droite graduée, symétrie, circuit et frise. Commandes manuelles, démonstration finie, pause, reset et version statique ; respect des préférences de mouvement.
- **Correction signalée par le parent** : `3/4 = …/12` accepte 9 ou 9/12. L’analogue `0,032 = …/1000` accepte 32 ou 32/1000. Consignes précisées, identifiants et valeurs attendues conservés. Les fractions ordinaires continuent à être évaluées comme des quotients.
- Le stockage, les profils, les corrigés et les critères restent compatibles avec la livraison antérieure ; la nouvelle recette compare les signatures à `7eab643`.
- Tests de cette mise à jour : **52 scénarios réussis, aucun échec** (37 pour le socle et 15 pour les nouveaux médias), avec manifestes inchangés. Voir `RAPPORT_TESTS.md`, `tests/media-content-results.json` et `tests/media-browser-results.json`. Les étapes, exercices et identifiants de référence restent ceux de la livraison antérieure.

## Réalisé

- Accès officiels rétablis après publication de l’environnement. L’ancienne URL ministérielle répond 404 ; Éduscol, les BO et leurs annexes ont été réellement consultés. Calendriers d’application **en CM2** vérifiés dans SOURCES.md.
- Parcours de **340 étapes et 820 exercices ou activités** : onze disciplines et enseignements transversaux, en douze entrées de navigation. Les objectifs annuels, ceux de fin de cours moyen, les objectifs de cycle et les progressions proposées sont distingués.
- Matrice détaillée : 375 rattachements, 424 liens vers les étapes existantes, aucun identifiant orphelin. Lecture, écrit, oral, langues, arts, EPS et expériences ne sont pas confondus avec des exercices automatiquement évaluables.
- Bibliothèque locale de sept œuvres intégrales proposées : trois fables patrimoniales et quatre récits originaux de jeunesse, en quinze étapes. Onze pistes musicales locales, paroles et activités accompagnées ; provenance décrite dans les notices.
- Profils indépendants, deux thèmes modifiables, sauvegardes locales, export/import validé, révisions, reprise par matière, points uniques et statistiques pondérées. Les anciens identifiants `technique-v1` sont préservés mais exclus de la progression et des statistiques du programme actuel.
- Tables, frises, plans schématiques et graphiques réels (barres, courbe, secteurs), associations et ordre utilisables au clavier et au toucher.
- Recette du socle Chromium : **37 scénarios réussis, aucun échec**, aucun changement des fichiers d’application pendant la recette, aucune erreur JavaScript ni requête de contenu après chargement. Détails, limites et manifestes dans RAPPORT_TESTS.md et tests/*-results.json.
- Guide parent dans README.md : téléchargement, ouverture, profils, sauvegardes, publication volontaire sur Netlify Drop, smartphone et mises à jour du même site.

## Livraison

Le travail est enregistré sur la branche dédiée, sans fusion automatique dans main. Le bilan de livraison fournit le lien ZIP du commit effectivement téléchargé et vérifié. Aucun site Netlify n’a été déployé automatiquement. L’application existante de suites numériques n’a été ni ouverte ni modifiée. La mission finances envoyée par erreur a été écartée sans ouvrir ni modifier ce dépôt distinct.

## Limites conservées explicitement

- Chromium cloud bloque file:// par politique administrateur : le code est organisé sans modules, fetch de contenu ni CDN pour permettre l’ouverture locale, mais le double-clic n’est pas annoncé comme effectivement testé. La recette fonctionnelle utilise HTTP.
- Pas de promesse de réouverture du site hors connexion : aucun service worker n’est installé. Une fois l’onglet chargé, les contenus et audios embarqués n’exigent pas de requête supplémentaire.
- Les 23 écoutes anglaises utilisent maintenant des MP3 préproduits inclus dans le dossier, sans dépendre des voix du navigateur. La phrase reste visible en cas d’erreur audio. Aucune prononciation de l’enfant n’est évaluée ; l’écoute humaine intégrale des voix produites n’est pas revendiquée.
- Les observations d’adulte sont déclaratives et distinctes des quiz. Les pratiques physiques, expériences, lectures quotidiennes et productions demandent l’accompagnement et le matériel indiqués. Aucune certification, attestation de natation ou niveau scolaire officiel n’est délivré.
- Les lectures courtes et mini-pièces originales sont clairement identifiées ; elles ne sont pas présentées comme des archives, de longs romans ou six enregistrements patrimoniaux.
- Smartphone physique, déploiement Netlify et publication du site par le parent ne sont pas revendiqués comme testés. Les largeurs 360, 390 et 1440 pixels ont été contrôlées dans Chromium.

## Maintenance

Préserver les identifiants de matières, étapes et exercices lors des mises à jour. Rejouer les contrôles documentés dans tests/README.md. Si les WAV changent, régénérer leur bibliothèque avec `python3 outils/embed-audio.py`. Utiliser ce checkout cloud existant ; ne pas créer de worktree sauf demande explicite. Les processus de serveur doivent être relancés après restauration de l’environnement.
