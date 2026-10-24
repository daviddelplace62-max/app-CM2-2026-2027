# Supports visuels pédagogiques — 24 octobre 2026

Cette mise à jour ajoute **47 supports** aux étapes existantes, sans modifier leur identifiant, leurs corrigés, leurs critères ni les profils. Le registre est dans `contenus/supports-visuels.js`, le rendu dans `supports-visuels.js` et la présentation dans `visuels.css`. Les SVG sont construits localement à partir de données structurées ; aucune image, bibliothèque ou ressource externe n’est appelée pendant l’utilisation.

## Manipuler et observer

Cinq familles disposent de commandes manuelles et de démonstrations finies :

- **Fractions** : choisir le nombre de parts égales et faire varier le numérateur avec un curseur utilisable au clavier. Les parts dessinées ont la même largeur.
- **Droite graduée** : déplacer le point avec un curseur ; le nombre d’intervalles et leurs valeurs restent cohérents.
- **Symétrie** : construire les trois points images un à un sur la même grille, puis afficher le triangle complet.
- **Circuit** : ouvrir ou fermer un interrupteur dans un modèle idéal. La lampe ne s’allume que si le trajet est fermé.
- **Frises** : sélectionner les repères dans l’ordre ; leur position respecte le nombre d’années, avec la liste datée pour les repères très proches.

Chaque démonstration propose **Démarrer**, **Pause**, **Recommencer** et une **version statique expliquée**. Rien ne démarre automatiquement, aucune démonstration ne boucle indéfiniment, et le circuit ne clignote pas en permanence. Les commandes manuelles ne nécessitent aucun glisser-déposer. Les préférences de réduction de mouvement du système et du profil désactivent la démonstration automatique, tout en conservant ces commandes et la version statique. La navigation doit appeler `CM2_VISUALS.stop()` pour supprimer les temporisateurs et observateurs de l’ancienne page.

Ces essais servent à comprendre : ils ne donnent aucun point et ne valident pas un exercice ou une compétence pratique. Les boutons d’observation adulte et le moteur de correction existants gardent leurs rôles distincts.

## Exactitude et limites des modèles

- Le support de l’exercice signalé représente **3/4 et 9/12 avec la même unité**, pour montrer pourquoi le numérateur manquant est 9.
- Le rectangle de 7 cm sur 3 cm respecte le rapport 7:3 ; les carreaux d’aire ont une taille commune. Les parts des bandes et les graduations sont régulièrement espacées.
- Le symétrique utilise l’axe vertical de la colonne 6 : les colonnes 2, 4, 3 deviennent 10, 8, 9, avec les mêmes ordonnées.
- Le patron du cube comporte quatre carrés en bande et deux carrés attachés au deuxième ; les arêtes cachées du cube sont distinguées en pointillés. La perspective n’est pas une mesure de longueur sur écran.
- Les frises ne sont pas des archives. Leurs repères reprennent les contenus historiques déjà sourcés ; l’écart temporel est proportionnel sur ces supports.
- Le plan de quartier et le réseau de gares sont **entièrement fictifs**. Le schéma France/Italie/Japon classe des lieux connus dans leurs territoires ; ce n’est pas une carte de position ni un fond géographique à l’échelle.
- Le système solaire respecte l’ordre des huit planètes, mais pas les tailles ou distances réelles. Les modèles de particules ne sont ni des photographies ni des particules à l’échelle de l’œil nu. Les flèches alimentaires signifient « est mangé par » et sont orientées vers le consommateur.
- L’ombre utilise un modèle de source ponctuelle et prolonge les rayons passant par les bords de l’objet. Une expérience réelle avec une source étendue peut aussi produire une pénombre non représentée.
- Le circuit est un modèle idéal ; il n’autorise jamais une manipulation de prise secteur. Les critères de la pratique réelle restent accompagnés.
- Les dessins de vocabulaire sont originaux ; le petit chat est représenté plus petit que le grand chien, et les mots complètent les formes et les couleurs.

Chaque SVG possède un titre et une description accessibles. Les textes de légende, listes datées et explications restent disponibles en dehors du dessin. Aucun résultat n’est communiqué uniquement par la couleur.

## Inventaire

| Étape existante | Support | Forme |
|---|---|---|
| `mathematiques-fractions-sens` | Partager une unité | fraction |
| `mathematiques-fractions-equivalentes` | Deux découpages, une même quantité | fractionCompare |
| `mathematiques-fractions-comparer` | Comparer avec la même unité | fractionCompare |
| `mathematiques-fractions-addition` | Additionner des parts de même taille | fractionCompare |
| `mathematiques-fractions-droite` | Placer un nombre sur une droite | numberline |
| `mathematiques-fractions-decomposer` | Dépasser une unité | numberline |
| `mathematiques-decimaux-droite` | Zoom sur les centièmes | numberline |
| `mathematiques-decimaux-ordre` | Lire de gauche à droite | numberline |
| `mathematiques-decimaux-milliemes` | Chaque colonne a sa valeur | placevalue |
| `mathematiques-decimaux-ecritures` | Lire une décomposition | placevalue |
| `mathematiques-entiers-numeration` | Lire les classes de nombres | placevalue |
| `mathematiques-calcul-dix` | Multiplier la valeur, pas déplacer la virgule | placevalue |
| `mathematiques-calcul-distributivite` | Découper un produit | area |
| `mathematiques-calcul-additionposee` | Aligner les valeurs de même rang | placevalue |
| `mathematiques-mesures-unites` | Changer l’unité, garder la longueur | conversion |
| `mathematiques-mesures-airesunites` | Un décimètre carré contient cent centimètres carrés | area |
| `mathematiques-mesures-rectangles` | Compter les unités d’aire | area |
| `mathematiques-mesures-perimetre` | Le contour et l’intérieur | rectangle |
| `mathematiques-mesures-angles` | Comparer à l’angle droit | angles |
| `mathematiques-geometrie-triangles` | Repérer les propriétés | triangles |
| `mathematiques-geometrie-cercle` | Du centre au cercle | circle |
| `mathematiques-geometrie-droites` | Deux relations différentes | lines |
| `mathematiques-geometrie-symetrie` | Construire le reflet, point par point | symmetry |
| `mathematiques-geometrie-solides` | Voir les faces et les arêtes | cube |
| `mathematiques-geometrie-patrons` | Un patron possible du cube | net |
| `h-reperes` | Des repères ordonnés dans le temps | timeline |
| `h-ecole` | Deux lois, deux dates | timeline |
| `h-droits` | Des droits acquis progressivement | timeline |
| `h-europe` | Construire une coopération européenne | timeline |
| `g-carte` | Lire un plan avec sa légende | map |
| `g-reseaux` | Des lieux reliés par des lignes | network |
| `g-localiser` | Des lieux dans des territoires | scales |
| `s-circuit` | Ouvrir et fermer un circuit simple | circuit |
| `s-etats` | Trois états, une même matière | states |
| `s-dissoudre` | Dissoudre ne fait pas disparaître | dissolve |
| `s-volume` | Lire une montée du niveau | volume |
| `s-solaire` | Huit planètes autour d’une étoile | solar |
| `s-reseaux-alimentaires` | Relier plusieurs chaînes | foodweb |
| `s-cycle-vie` | Le cycle d’une plante à fleurs | lifecycle |
| `s-lumiere` | Une ombre se forme derrière un objet opaque | shadow |
| `s-energie` | Suivre une conversion d’énergie | energy |
| `en-meteo` | Weather — la météo | vocabulary |
| `en-classe` | In the classroom — dans la classe | vocabulary |
| `en-maison` | Where is the ball? — où est la balle ? | positions |
| `en-portrait` | Describe an animal — décrire un animal | vocabulary |
| `en-nombres` | Read a price — lire un prix | coins |
| `en-ville` | Follow the directions — suivre un trajet | directions |

## Contrôle ciblé

Audit de données : les 47 identifiants ciblent des étapes réellement présentes. Proportions, graduations, repères, positions, arêtes du cube et sens des flèches ont été relus ; les limites des modèles sont écrites dans les supports.

Une recette ciblée dans Chromium a affiché les 47 supports aux largeurs 360, 390 et 1440 pixels, vérifié les SVG et l’absence de texte hors de leur viewBox, puis testé les cinq familles manuelles : changement de dénominateur et curseur de fraction au clavier, déplacement du point, construction des trois symétriques, ouverture/fermeture du circuit et sélection des repères de frise. Démarrage, pause, reprise, remise à zéro, réduction de mouvement et arrêt des temporisateurs ont été contrôlés ; le circuit reste fermé après la fin de sa démonstration sans recommencer à clignoter. Le rapport global de la livraison, dans RAPPORT_TESTS.md, fait foi pour la recette intégrée et les autres familles de manipulations.
