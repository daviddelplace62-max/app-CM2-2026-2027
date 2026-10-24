# Notes de contenu — histoire, géographie, sciences

Sources consultées le **23 octobre 2026** ; audit de reprise le **24 octobre 2026**. Année visée : **CM2 2026-2027**. Aucun fichier d’une application de suites numériques n’a été ouvert ou modifié.

## Textes et périmètre

- **C20** : arrêté du 17 juillet 2020, BO n°31 du 30 juillet 2020, programme du cycle 3. [BO](https://www.education.gouv.fr/bo/20/Hebdo31/MENE2018714A.htm).
- **S23** : arrêté du 15 juin 2023, BO n°25 du 22 juin 2023, sciences et technologie ; rentrée 2023-2024. [BO](https://www.education.gouv.fr/bo/2023/Hebdo25/MENE2314101A).
- Compilation effectivement téléchargée et lue : [Éduscol, programme du cycle 3 réunissant C20 et S23](https://eduscol.education.gouv.fr/media/100806/download?attachment). Histoire-géographie : pages imprimées 67 à 76 ; sciences : pages 77 à 97. Extraction de travail hors livrable dans `/workspace/cm2-research/cycle3-2020-2023.txt`.
- Le tableau de la [page Éduscol du cycle 3](https://eduscol.education.gouv.fr/4356/enseigner-au-cycle-3), rentrée **2026-2027**, colonne **CM2**, renvoie à C20 pour l’histoire-géographie et à S23 pour les sciences.
- Le [BO n°22 du 28 mai 2026, MENE2608631A](https://www.education.gouv.fr/bo/2026/Hebdo22/MENE2608631A), article 3, reporte l’application des nouveaux programmes HG au **CM2 à 2027-2028**. Ils ne remplacent donc pas C20 dans cette application pour 2026-2027.

Les **thèmes d’histoire-géographie sont CM2 explicites**. Le séquençage et les exercices sont des propositions pédagogiques. Les compétences méthodologiques HG sont des compétences de cycle, travaillées ici en CM2 sans prétendre que leur répartition annuelle est officielle. En sciences, le texte S23 comporte des colonnes distinctes **fin de cours moyen** et **fin de sixième** : seules les premières fixent ici les connaissances de référence. Les méthodes scientifiques se construisent sur le cycle.

Chaque étape contient `sourceRef` et `sourceStatus`. Les titres officiels ne constituent pas une certification de maîtrise par l’application.

## Inventaire réalisé

| Fichier | Chapitres | Étapes | Exercices | Dont activités accompagnées |
|---|---:|---:|---:|---:|
| `contenus/histoire.js` | 3 | 19 | 39 | 6 |
| `contenus/geographie.js` | 3 | 19 | 40 | 7 |
| `contenus/sciences.js` | 4 | 45 | 103 | 29 |
| Total | 10 | 83 | 182 | 42 |

Les identifiants n’utilisent pas `technique-v1` ; ils sont destinés à rester stables lors des mises à jour. Les corrections ne neutralisent aucun mot par un changement silencieux de sens. Les activités de pratique, oral, dessin, enquête, manipulation et projet sont accompagnées et ne sont pas présentées comme automatiquement maîtrisées.

## Histoire : thèmes et méthodes reliés

| Texte officiel / composante | Étapes et activités correspondantes |
|---|---|
| **Le temps de la République** — 1892 : la République fête ses cent ans | `h-reperes`, `h-centenaire`, `h-symboles` : frise, dates/durée, symboles, régime républicain sans fausse continuité depuis 1792 |
| L’école primaire au temps de Jules Ferry | `h-ecole` : 1881/1882, gratuité, instruction obligatoire, laïcité ; comparaison accompagnée |
| Nouveau processus de colonisation dans cette période | `h-colonisation` : domination, inégalités des droits, point de vue d’une affiche et confrontation des sources |
| Des républiques, une démocratie : libertés, droits, devoirs | `h-droits`, `h-citoyens` : droits progressifs, vote des femmes, expression/conscience, récit accompagné |
| **L’âge industriel en France** — énergies majeures et machines | `h-charbon` : charbon/vapeur, pétrole/électricité, processus progressif |
| Travail à la mine, à l’usine, à l’atelier, au grand magasin | `h-usine` : rôles et conditions, droits et travail des enfants |
| Ville industrielle | `h-ville` : réseaux, quartiers, transformations et pollution |
| Monde rural | `h-rural` : exode rural, changements progressifs, agriculture et transports |
| Mise en enquête de l’âge industriel | `h-industrie-enquete` : tableau explicitement fictif, lecture/calcul et enquête accompagnée. C20 demande au professeur de choisir **deux** sujets industriels ; les quatre sont proposés ici, ce qui n’en fait pas quatre obligations officielles. |
| **La France, des guerres mondiales à l’Union européenne** — deux guerres mondiales | `h-1914`, `h-tranchees`, `h-1939` : dates, soldats/civils, portée mondiale, sources |
| Résistance, France combattante et collaboration | `h-resister` : distinction des acteurs et choix, risques |
| Génocide des Juifs et persécutions d’autres populations | `h-genocide` : faits, définition adaptée, respect des victimes et échange accompagné, sans image choquante |
| Traces et commémorations dans l’environnement proche | `h-memoire` : 11 novembre/8 mai, histoire/mémoire, enquête locale accompagnée |
| Construction européenne | `h-europe` : coopération après 1945, Rome 1957, Maastricht signé 1992/entré en vigueur 1993, Europe ≠ Union européenne, synthèse/frise accompagnée |
| Se repérer dans le temps et utiliser les frises | `h-reperes`, `h-centenaire`, `h-droits`, `h-1939`, `h-europe` |
| Raisonner, poser des questions, vérifier et justifier | `h-reperes`, `h-colonisation`, `h-industrie-enquete`, `h-memoire` et productions guidées |
| Comprendre, identifier et questionner un document | `h-reperes`, `h-ecole`, `h-colonisation`, `h-tranchees`, `h-industrie-enquete`, `h-genocide`, `h-memoire` |
| Écrire, raconter, utiliser le lexique et présenter à l’oral | `h-citoyens`, `h-industrie-enquete`, `h-memoire`, `h-europe` |
| Coopérer, sélectionner des informations et communiquer | Enquêtes accompagnées `h-ecole`, `h-industrie-enquete`, `h-memoire`, avec partage des rôles possible ; compétences de cycle, non répartition annuelle imposée |

## Géographie : thèmes et méthodes reliés

| Texte officiel / composante | Étapes et activités correspondantes |
|---|---|
| **Se déplacer** — se déplacer au quotidien en France | `g-carte`, `g-quotidien-france` : plan, repères, critères d’un trajet, enquête accompagnée |
| Se déplacer au quotidien dans un autre lieu du monde | `g-ailleurs` : centre historique de Venise (Italie, Europe), comparaison localisée avec le dossier français, absence de généralisation à tout un pays |
| Se déplacer de ville en ville, en France, en Europe et dans le monde | `g-reseaux`, `g-villes`, `g-localiser` : infrastructures, connexions, horaires/correspondances, trajet complet et villes à trois échelles |
| Déplacement et développement durable | `g-durable` : impacts, sécurité, accessibilité, choix réalistes et croquis accompagné |
| **Communiquer d’un bout à l’autre du monde grâce à l’Internet** — un monde de réseaux | `g-reseau` : câbles, antennes, serveurs, routeurs et trajet simplifié d’une information |
| Un habitant connecté au monde | `g-connecte`, `g-source`, `g-donnees`, `g-partager` : usages, rapidité ≠ fiabilité, EMI, données personnelles et coopération |
| Des habitants inégalement connectés dans le monde | `g-inegalites` : causes multiples, accessibilité et tableau explicitement fictif |
| **Mieux habiter** — favoriser la place de la nature en ville | `g-nature`, `g-corridors` : végétation, eau, habitats, continuités et acteurs |
| Recycler | `g-dechets`, `g-recycler` : réduire/réutiliser/trier, filières et limites du recyclage, consignes locales |
| Habiter un écoquartier | `g-ecoquartier` : critères environnementaux, usages, accessibilité et qualité de vie |
| Explorer des réalisations/projets à l’échelle de proximité | `g-projet` : observation, croquis, bénéfices/contraintes/acteurs, débat accompagné |
| Localiser, nommer, se repérer et changer d’échelle | `g-carte`, `g-ailleurs`, `g-reseaux`, `g-villes`, `g-localiser`, `g-projet` |
| Raisonner, poser des questions, justifier une démarche | `g-quotidien-france`, `g-durable`, `g-source`, `g-ecoquartier`, `g-projet` |
| S’informer dans le monde numérique, identifier une ressource | `g-source`, `g-donnees`, `g-partager` |
| Comprendre tableaux, plans et documents, questionner les limites | `g-carte`, `g-villes`, `g-inegalites`, `g-ailleurs`, `g-source` |
| Écrire, parler, réaliser un croquis, coopérer et mutualiser | `g-durable`, `g-partager`, `g-projet` et enquêtes accompagnées |

La carte de `g-carte` est un **plan pédagogique fictif sans échelle**, orienté nord en haut. Il ne prétend pas reproduire une commune réelle. Les horaires et nombres de foyers de `g-villes`/`g-inegalites` sont explicitement fictifs et ne sont pas des statistiques attribuées à un pays.

## Sciences : attendus de fin de cours moyen reliés

| Rubrique S23 et connaissances/compétences de fin de cours moyen | Étapes correspondantes |
|---|---|
| **Matière, mouvement, énergie et information** : distinguer matériaux naturels/fabriqués/transformés | `s-materiaux` |
| États solide/liquide/gazeux, états de l’eau, changements et réversibilité | `s-etats` : association, réversibilité et observation accompagnée fusion/solidification |
| Comparer et mesurer les masses, dispositif/balance/tare, unités usuelles (t, q, kg, g, mg) | `s-masse` : leçon, calculs et manipulation accompagnée |
| Mesurer volumes de liquide et de solide par déplacement d’eau | `s-volume` : exemple, calcul, choix du matériel et mesure réelle accompagnée |
| Séparer par tamisage, décantation, filtration | `s-separer` : associations et activité guidée ; eau filtrée ≠ eau forcément potable |
| Dissolution, récupération par évaporation, conservation de la masse | `s-dissoudre` : calcul de masse, choix de technique, pesées et évaporation accompagnées |
| Mouvements rectilignes/circulaires avec point de vue ; mesurer distance/durée, conversions | `s-mouvement` : leçon, durée en minutes, conversions mètres/centimètres et minutes/secondes, mesures répétées |
| Réaliser un dispositif de conversion ; pesanteur/cinétique/électrique | `s-energie` : leçon, association et maquette accompagnée |
| Transparent/translucide/opaque, ombre propre/portée et positions | `s-lumiere` : association et expérience/schémas accompagnés |
| Observer, schématiser, nommer les phases de la Lune | `s-lune` : ordre des phases principales et observations datées |
| Circuit à une boucle pile/interrupteur/un ou deux récepteurs, sécurité | `s-circuit` : QCM et montage réel accompagné, préparation papier distinguée du montage |
| **Le vivant, sa diversité et les fonctions qui le caractérisent** : organisme/appareil/organe avec plante et animal | `s-organes` |
| Classification en groupes emboîtés et attributs/parenté | `s-classer` : association et construction accompagnée |
| Détermination d’espèces proches par une clé | `s-determiner` : clé simplifiée explicitement limitée puis détermination accompagnée |
| Biodiversité passée et actuelle, fossiles, temps long/temps humain et frise | `s-fossiles` |
| Besoin de matière pour grandir, variation avec croissance et activité | `s-besoins` |
| Transformations des aliments et localisation dans l’appareil digestif | `s-digestion` |
| Rôle de la circulation sanguine dans l’approvisionnement des organes | `s-sang` |
| Comportements alimentaires et règles d’hygiène favorables à la santé | `s-hygiene` : principes et préparation accompagnée sans régime individuel ni évaluation du corps |
| Transformation alimentaire biologique et processus de production | `s-aliments` : levure/ferments, recette encadrée ou enquête professionnelle |
| Étapes du cycle de vie à partir d’une culture ou d’un élevage ; graine/plantule/plante fleurie, œuf/jeune/adulte | `s-cycle-vie` |
| Nommer les organes reproducteurs étudiés, identifier les changements pubertaires et leur lien avec la capacité à se reproduire | `s-puberte` : cours, deux QCM et échange accompagné ; aucune confidence, photo ou mesure intime demandée |
| **Les objets techniques au cœur de la société** : besoins, objets naturels/techniques et réponses | `s-objets` |
| Évolution selon contextes historiques/géographiques/économiques/culturels/techniques | `s-evolution` : comparaison accompagnée |
| Détournements d’usage et réflexion éthique | `s-detournement` |
| Besoin/fonction technique/solution, matériaux, sous-ensembles | `s-fonctions` |
| Croquis d’observation et schéma de fonctionnement | `s-croquis` : production accompagnée |
| Chercher/comparer des solutions, contraintes, propriétés de matériaux et énergie disponible | `s-concevoir` : deux QCM et test comparatif accompagné |
| Cycle de vie d’un objet et choix environnementaux raisonnés | `s-cycle-objet` |
| Planifier/cooperer/réaliser/tester une maquette | `s-maquette` : ordre de démarche et projet accompagné |
| Chaîne d’information/action, capteurs/actionneurs | `s-capteurs` |
| Coder/comprendre/critiquer un algorithme simple agissant sur un objet | `s-algorithme` : ordre, condition à corriger et simulation guidée ; la manipulation d’un robot réel reste une observation distincte lorsqu’elle est possible |
| **La Terre, une planète peuplée par des êtres vivants** : situer la Terre dans le système solaire | `s-solaire` |
| Distinguer météorologie et climat | `s-meteo` |
| Réaliser/exploiter mesures météo : thermomètre, pluviomètre, anémomètre | `s-mesures` : instruments, tableau et relevés accompagnés |
| Indices d’activité interne/externe et ressources exploitées | `s-terre-active` |
| Un risque naturel et modalités de prévention | `s-risque` : exemple d’inondation et enquête locale adaptée, sans simulation dangereuse |
| Décrire écosystème : milieu, êtres vivants, interactions | `s-ecosysteme` |
| Relations entre espèces : prédation, coopérations… | `s-relations` |
| Comparer répartition et facteurs physiques : température/lumière/humidité | `s-repartition` : protocole et observations accompagnés |
| Production de matière des animaux et alimentation ; place des végétaux ; chaînes et réseau | `s-reseaux-alimentaires` |
| Expérimenter pour identifier quelques besoins des végétaux | `s-plantes` : protocole guidé respectueux du vivant |
| Effets positifs/négatifs d’actions humaines sur le milieu proche | `s-actions` |
| S’impliquer dans un projet EDD (santé, alimentation, biodiversité, eau, énergie, déchets…) | `s-projet` : objectif/indicateur, coopération, action et bilan accompagnés |

### Méthodes scientifiques et techniques du cycle

- Formuler une question/hypothèse, élaborer/suivre un protocole, mesurer, répéter, interpréter et communiquer : `s-demarche`, `s-masse`, `s-mouvement`, `s-mesures`, `s-repartition`, `s-plantes`, `s-projet`.
- Concevoir, créer, réaliser, argumenter les choix : `s-concevoir`, `s-maquette`, `s-energie`, `s-croquis`.
- Exploiter texte, schéma, tableau, algorithme ; expliquer à l’écrit et à l’oral : `s-mesures`, `s-croquis`, `s-capteurs`, `s-algorithme` et activités guidées.
- Numérique : programmation/simulation (`s-capteurs`, `s-algorithme`), traitement simple de données (`s-mesures`), communication d’un résultat au choix sur papier ou outil local (`s-projet`). Les gestes réels d’un logiciel ne sont pas déclarés maîtrisés par un QCM.
- Éthique, responsabilité, esprit critique et sécurité : `s-demarche`, `s-hygiene`, `s-circuit`, `s-detournement`, `s-cycle-objet`, `s-risque`, `s-actions`, `s-projet`.

## Audit factuel et contrôles réellement effectués

- Relecture des dates historiques et correction explicite des confusions fréquentes : Première République 1792 ; centenaire 1892 ; gratuité 1881 / instruction obligatoire-laïcité 1882 ; suffrage masculin 1848 ; droit de vote des femmes 1944 / premier vote 1945 ; guerres 1914-1918 et 1939-1945 ; 11 novembre 1918 armistice ; 8 mai 1945 victoire en Europe (fin mondiale en septembre) ; Rome 1957 ; Maastricht signé 1992, entrée en vigueur 1993.
- Les exercices de calcul ont été relus : 1892−1792=100 ; 80−20=60 ; 20 minutes d’attente ; 80−50=30 ; 350−100=250 ; 2kg=2000g ; 48−30=18mL ; 80+4=84g ; 10h05−10h02=3min ; 2m=200cm ; 2min30s=150s ; 15−12=3°C ; Terre troisième planète.
- Les trois fichiers ont passé **`node --check`**.
- Un contrôle Node/VM a effectivement chargé les trois fichiers et vérifié : identifiants uniques, aucun chapitre vide, chaque étape avec objectif/leçon/exemple/source/statut et au moins deux exercices ; consigne/indice/explication présents ; réponses de QCM parmi les options ; réponses numériques finies ; ordre utilisant exactement les éléments fournis ; associations avec réponses existantes et nombre correspondant ; activités guidées avec critères. Résultat : **83 étapes, 182 exercices, 42 guidés, zéro anomalie détectée**.
- Les associations `s-meteo` et `s-ecosysteme` réutilisent volontairement une même catégorie pour plusieurs éléments ; l’interface ne doit pas imposer un appariement bijectif.
- Cette revue éditoriale et structurelle ne remplace pas les scénarios fonctionnels du navigateur, gérés dans `RAPPORT_TESTS.md`, ni une observation durable par un enseignant.

## Limites et distinctions à conserver

- Le parcours n’affirme pas enseigner les compétences spécifiquement réservées à la sixième dans S23 : calcul de vitesse, cellules au microscope, modèle complet saisons/jour/nuit, fermentation avec étude quantitative de paramètres, démonstration du réchauffement par séries climatiques, etc. Certains mots de contexte peuvent être rencontrés sans devenir un attendu de fin de CM2.
- Les tableaux pédagogiques fictifs sont signalés ; ils ne sont pas présentés comme des archives ou statistiques réelles. Les frises indiquent des repères et ne promettent pas une échelle proportionnelle.
- Les manipulations réelles nécessitent le matériel simple indiqué et un adulte. Un schéma préparatoire ne valide pas un montage électrique ou un robot réel. Les règles locales de tri, de risque et de sécurité ne sont pas inventées par le cours.
- Les activités documentaires obligatoires disposent de dossiers originaux intégrés ; un livre, un musée, une ressource extérieure identifiée ou une observation locale sont des prolongements facultatifs. Les manipulations réelles gardent leurs besoins matériels simples et leur observation accompagnée. Aucun chargement réseau n’est effectué par l’application. Une préparation documentaire n’est jamais présentée comme une visite ou une manipulation réellement effectuée.


## Révision d’autonomie du 24 octobre 2026

Les activités documentaires ne dépendent plus d’une recherche Internet, d’une photographie extérieure ou d’un manuel disponible chez le parent. Des **documents pédagogiques originaux intégrés**, explicitement différents d’archives, sont ajoutés pour :

- `h-ecole` : notices loi/observation présente ; `h-industrie-enquete` : synthèses travail/paysage ; `h-genocide` : dossier sobre de faits sans faux témoignage ; `h-memoire` : plaque/commune fictives clairement identifiées, utilisées seulement pour apprendre la méthode.
- `g-quotidien-france` : deux trajets fictifs avec critères ; `g-ailleurs` : cas situé du centre historique de **Venise, Italie, Europe**, marche/ponts/bateaux-bus, personnage fictif sans donnée de trafic actuelle ; `g-source` : deux ressources fictives dont fiabilité et limites sont à comparer.
- `g-localiser` : nouvelle étape de repères réels **Paris/Lyon–France–Europe ; Venise–Italie–Europe ; Tokyo–Japon–Asie**, trajets France/Europe/monde et schéma de cadres emboîtés explicitement non cartographique à l’échelle. Cette étape complète les situations concrètes du thème, au-delà d’une définition des réseaux.
- `s-lune` : quatre observations de référence schématisables sans prétendre être un calendrier réel ; `s-determiner` : clé d’une collection limitée avec critères fournis, distincte d’une identification universelle en milieu naturel ; `s-fossiles` : données d’ordre relatif sans âge précis inventé ; `s-aliments` : protocole encadré d’observation de pâte/levure, sans consommation crue ; `s-risque` : fiche intégrée d’inondation qui ne remplace pas une alerte locale ; `s-reseaux-alimentaires` : relations fournies pour deux chaînes réellement reliables en réseau dans le modèle.

Ressource d’accompagnement **effectivement téléchargée et lue le 24 octobre 2026** : [Éduscol, Géographie CM2, thème 1 « Se déplacer », mars 2016](https://eduscol.education.gouv.fr/sites/default/files/document/ra16c3higegeocm2th1sedeplacer616750pdf-77142.pdf), notamment pages 3–4 : cas localisés, comparaison France/autre lieu du monde, villes et changements d’échelle. Cette ressource accompagne l’ancien programme ; elle est utilisée pour la démarche compatible avec C20, pas pour remplacer ses textes normatifs.

Une tentative d’accès au site Venezia Unica (`https://www.veneziaunica.it/en/content/public-transport`) a reçu **HTTP 403** le 24 octobre : **son contenu n’a pas été consulté et ne sert pas de source revendiquée**. Le cas de Venise emploie seulement des repères géographiques généraux et non quantitatifs ; aucun horaire, tarif ou relevé actuel n’est prétendu vérifié. La ressource Éduscol ne lui est pas faussement attribuée comme source d’un fait local précis.

Dernier audit de pratique : trois activités accompagnées supplémentaires dans `s-etats`, `s-volume`, `s-dissoudre` distinguent observation et manipulation réelles des calculs. Deux exercices explicites de conversion sont ajoutés dans `s-mouvement`. Le dossier `s-fossiles` nomme des espèces fossiles (Dactylioceras commune, Tyrannosaurus rex) et actuelles (Homo sapiens, Felis catus), sans âge numérique précis inventé et avec ordre relatif annoncé.
