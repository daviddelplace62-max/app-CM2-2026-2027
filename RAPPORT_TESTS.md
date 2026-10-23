# Rapport de recette — 23 octobre 2026

## Périmètre

Socle technique uniquement. Les 11 entrées de disciplines contiennent des données de recette explicitement marquées `technique-v1`. Aucun cours, compétence officielle, corrigé disciplinaire ou programme 2026-2027 n'est validé par ces tests.

## Exécutions réussies

- Contrôle structurel Node.js : 11 disciplines, 22 étapes, 44 exercices ; identifiants uniques ; aucun chapitre vide ; objectifs, exemples, consignes, indices, réponses ou critères présents.
- Chromium 154.0.8037.57 réel, piloté par Playwright 1.64.1 : **26 scénarios réussis, aucun échec**, résultats détaillés et horodatés dans `tests/browser-results.json`.
- Un scénario de validation de moteur a parcouru chacune des 11 matières : accès direct, prérequis, erreur bloquante, indice, saisie vide ou illisible sans tentative, bonne réponse, correction et retour.
- Deux profils et leurs thèmes initiaux, données indépendantes ; thème et surnom modifiables sans perte ; surnom traité comme texte.
- Fractions et décimaux, accents préservés ; unités inattendues rejetées.
- Progression vérifiée sur 22 étapes, points non répétés, positions distinctes par matière, sauvegarde après rechargement.
- Activité déclarée réalisée distincte de l'observation accompagnée ; critères et confirmation adulte requis.
- Export JSON réel téléchargé, import de restauration, fichiers invalides et structures imbriquées invalides refusés sans perte ; annulation d’import conservant toutes les données.
- Suppression de profil : annulation sans effet puis suppression confirmée, sans toucher au second profil.
- Menu mobile : focus initial, boucle clavier, fermeture par Échap et fond, restitution du focus.
- Aucun débordement horizontal du tableau de bord à 360, 390 et 1440 pixels ; avertissement visible lorsque le stockage est désactivé ; aucune erreur JavaScript remontée.

- Vérification réseau séparée dans Chromium : chargement des quatre ressources locales (page, CSS, contenus, application), création d’un profil et navigation dans les onze matières ; aucun appel externe ni chargement supplémentaire de contenu observé. Cela ne garantit pas une réouverture hors connexion.

## Blocages et contrôles non exécutés

- L'accès direct `file://` a échoué avant le chargement avec `net::ERR_BLOCKED_BY_ADMINISTRATOR`, politique du navigateur cloud. Aucun contournement utilisé. La recette a été effectuée via le serveur statique HTTP local. L'ouverture par double-clic n'est pas revendiquée comme testée.
- Sources officielles, exhaustivité, contenus scolaires, activités pédagogiques et progression CM2 : non vérifiés, accès aux sites ministériels bloqué selon `SOURCES.md`.
- Réouverture hors connexion, synthèse vocale anglaise, prononciation, publication Netlify et fonctionnement sur un smartphone physique : non exécutés et non revendiqués.
- Le test de largeur couvre le tableau de bord ; il ne constitue pas un audit visuel exhaustif de chaque écran et chaque navigateur.

Les activités observées par un adulte sont des déclarations d'observation ; le moteur n'authentifie pas l'identité de l'adulte et ne mesure aucune compétence pratique.
