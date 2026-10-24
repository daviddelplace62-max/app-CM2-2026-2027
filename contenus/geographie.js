/* Contenus originaux ; références et statut dans notes-hg-sciences.md. */
window.CM2_SUBJECTS.push({
  "id": "geographie",
  "title": "Géographie",
  "icon": "🌍",
  "chapters": [
    {
      "id": "g-deplacer",
      "title": "Se déplacer",
      "steps": [
        {
          "id": "g-carte",
          "title": "Lire un plan et changer d’échelle",
          "notion": "Lire un plan et changer d’échelle",
          "objective": "Je localise des lieux et utilise une légende.",
          "lesson": "Un plan représente un petit espace vu de dessus. Une carte peut représenter une ville, un pays ou le monde. Le titre annonce le sujet, la légende explique les signes et une flèche indique le nord. À plus petite échelle, on voit un territoire plus grand, avec moins de détails.",
          "example": "Sur le schéma fictif, le parc est au nord de l’école et la gare à l’est. Ce dessin n’indique pas de distances réelles.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Si le nord est en haut, où se trouve l’est ?",
              "options": [
                "À droite",
                "À gauche",
                "En bas"
              ],
              "answer": "À droite",
              "hint": "Utilise les quatre directions cardinales.",
              "explanation": "Sur une carte orientée nord en haut, l’est est à droite.",
              "id": "g-carte-e1"
            },
            {
              "type": "choice",
              "prompt": "Quel document convient pour étudier un trajet entre deux pays ?",
              "options": [
                "Une carte de l’Europe ou du monde.",
                "Le plan détaillé d’une salle.",
                "Une liste sans localisation."
              ],
              "answer": "Une carte de l’Europe ou du monde.",
              "hint": "Choisis une échelle qui contient les deux lieux.",
              "explanation": "Le support dépend de l’espace étudié.",
              "id": "g-carte-e2"
            }
          ],
          "visual": {
            "type": "map",
            "caption": "Plan pédagogique fictif, sans échelle : nord en haut",
            "description": "L’école est au centre. Le parc est au nord de l’école ; la gare est à l’est. La bibliothèque est à l’ouest.",
            "points": [
              {
                "x": 50,
                "y": 50,
                "label": "École"
              },
              {
                "x": 50,
                "y": 18,
                "label": "Parc"
              },
              {
                "x": 82,
                "y": 50,
                "label": "Gare"
              },
              {
                "x": 18,
                "y": 50,
                "label": "Bibliothèque"
              }
            ]
          },
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée"
        },
        {
          "id": "g-quotidien-france",
          "title": "Se déplacer au quotidien en France",
          "notion": "Se déplacer au quotidien en France",
          "objective": "Je compare des moyens de déplacement selon un trajet.",
          "lesson": "Aller à l’école, travailler, se soigner ou faire des achats entraîne des déplacements quotidiens. En France, les possibilités varient selon les territoires : marche, vélo, bus, tramway, voiture ou train. On choisit selon la distance, le temps, l’accessibilité, la sécurité et les services disponibles.",
          "example": "Une personne peut marcher jusqu’à un arrêt, prendre le bus puis marcher encore : elle utilise plusieurs modes sur un même trajet.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pourquoi n’existe-t-il pas un moyen idéal pour tous les trajets ?",
              "options": [
                "Les distances, les besoins et les services disponibles diffèrent.",
                "Tout le monde habite au même endroit.",
                "Les bus circulent partout à toute heure."
              ],
              "answer": "Les distances, les besoins et les services disponibles diffèrent.",
              "hint": "Compare un centre-ville et un village isolé.",
              "explanation": "La mobilité dépend des personnes et de l’organisation du territoire.",
              "id": "g-quotidien-france-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, compare les trajets fictifs A et B intégrés : temps total, accès, sécurité et besoins des usagers. Justifie ton choix pour un personnage fictif, sans affirmer qu’il convient à tout le monde. Une enquête vers ton école réelle est un prolongement facultatif.",
              "criteria": [
                "Deux options réalistes sont comparées.",
                "Au moins trois critères sont utilisés.",
                "Les données personnelles restent privées."
              ],
              "hint": "Reste sur un plan ou un trajet accompagné ; ne pars pas seul pour l’enquête.",
              "explanation": "La comparaison aide à justifier un choix sans imposer un mode impossible à une famille.",
              "id": "g-quotidien-france-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé",
          "visual": {
            "type": "table",
            "caption": "Dossier de trajets fictifs dans un territoire français, sans adresse personnelle",
            "headers": [
              "Trajet",
              "Mode et durée fictive",
              "Condition à examiner"
            ],
            "rows": [
              [
                "A : quartier vers école",
                "Marche, 15 minutes",
                "Trottoir continu ; traversée à examiner avec un adulte"
              ],
              [
                "B : quartier vers école",
                "Bus, 8 minutes + 7 minutes d’accès et attente",
                "Arrêt accessible ; horaires à vérifier pour un trajet réel"
              ]
            ]
          }
        },
        {
          "id": "g-ailleurs",
          "title": "Se déplacer dans un autre lieu du monde",
          "notion": "Se déplacer dans un autre lieu du monde",
          "objective": "Je compare deux situations sans généraliser à tout un pays.",
          "lesson": "Étude de cas située : Venise est en Italie, en Europe, au bord de la mer Adriatique. Dans le centre historique, des canaux et des ponts structurent les déplacements : on circule notamment à pied et par des bateaux-bus appelés vaporetti. Cela ne décrit pas tous les trajets de tous les habitants de la commune. Dossier pédagogique rédigé pour le cours le 24 octobre 2026 : aucun horaire, tarif, comptage actuel ou enquête de terrain n’est revendiqué.",
          "example": "Un personnage fictif marche jusqu’à un arrêt de vaporetto, prend le bateau-bus puis poursuit à pied. Son récit est inventé pour comparer les modes ; la localisation Venise—Italie—Europe est réelle.",
          "exercises": [
            {
              "id": "g-ailleurs-localiser",
              "type": "choice",
              "prompt": "Où se trouve Venise ?",
              "options": [
                "En Italie, en Europe.",
                "En France, en Asie.",
                "Au Japon, en Afrique."
              ],
              "answer": "En Italie, en Europe.",
              "hint": "Repère le pays et le continent dans le dossier.",
              "explanation": "Venise est une ville italienne située en Europe, près de la mer Adriatique."
            },
            {
              "type": "choice",
              "prompt": "Une photographie d’un bateau sur un fleuve montre-t-elle tous les déplacements d’un pays ?",
              "options": [
                "Non, elle montre un lieu et un moment à identifier.",
                "Oui, tous les habitants se déplacent pareil.",
                "Oui, si le bateau est grand."
              ],
              "answer": "Non, elle montre un lieu et un moment à identifier.",
              "hint": "Une image est un cadrage limité.",
              "explanation": "On confronte plusieurs sources avant de généraliser.",
              "id": "g-ailleurs-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise les deux dossiers intégrés pour localiser Venise par rapport à la France (Italie, Europe, à l’est de la France métropolitaine), puis compare une ressemblance et une différence de déplacement. Explique pourquoi ce cas ne décrit pas toute l’Italie.",
              "criteria": [
                "Venise est située en Italie et en Europe ; la France et l’Italie sont distinguées.",
                "Une ressemblance et une différence sont fondées sur les dossiers.",
                "La limite de la généralisation à un pays entier est expliquée."
              ],
              "hint": "Compare les modes et les aménagements : marcher existe dans les deux cas ; un canal n’est pas une route.",
              "explanation": "La démarche construit des repères et une comparaison respectueuse.",
              "id": "g-ailleurs-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé",
          "visual": {
            "type": "table",
            "caption": "Repères et comparaison : lieux réels, personnages et trajets pédagogiques fictifs",
            "headers": [
              "Cas",
              "Localisation",
              "Moyens étudiés"
            ],
            "rows": [
              [
                "Quartier français du dossier précédent",
                "France, Europe",
                "Marche et bus"
              ],
              [
                "Centre historique de Venise",
                "Italie, Europe, mer Adriatique",
                "Marche, ponts et bateau-bus (vaporetto)"
              ]
            ]
          }
        },
        {
          "id": "g-reseaux",
          "title": "Des réseaux et leurs aménagements",
          "notion": "Des réseaux et leurs aménagements",
          "objective": "Je relie un réseau de transport à des infrastructures.",
          "lesson": "Un réseau est un ensemble de lignes et de points reliés. Routes, voies ferrées, lignes aériennes ou maritimes relient des lieux. Gares, ports, aéroports, ponts et tunnels sont des infrastructures : des aménagements nécessaires aux déplacements. Les réseaux sont inégalement denses.",
          "example": "Une gare permet de passer de la marche au train. Une correspondance relie plusieurs lignes.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’infrastructure au réseau.",
              "options": [
                "Gare",
                "Port",
                "Aéroport"
              ],
              "choices": [
                "Transport aérien",
                "Transport ferroviaire",
                "Transport maritime"
              ],
              "answer": [
                "Transport ferroviaire",
                "Transport maritime",
                "Transport aérien"
              ],
              "hint": "Regarde quel véhicule utilise le lieu.",
              "explanation": "Une gare dessert le train, un port les navires et un aéroport les avions.",
              "id": "g-reseaux-e1"
            },
            {
              "type": "choice",
              "prompt": "Un réseau est…",
              "options": [
                "un ensemble de lignes et de lieux reliés",
                "un seul véhicule sans trajet",
                "uniquement un parking"
              ],
              "answer": "un ensemble de lignes et de lieux reliés",
              "hint": "Pense aux connexions entre plusieurs points.",
              "explanation": "La notion de réseau aide à comprendre les déplacements entre territoires.",
              "id": "g-reseaux-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-villes",
          "title": "De ville en ville, en France, en Europe et dans le monde",
          "notion": "De ville en ville, en France, en Europe et dans le monde",
          "objective": "Je choisis un itinéraire et lis un horaire.",
          "lesson": "Un déplacement lointain peut combiner plusieurs réseaux. On compare le temps total, y compris l’accès aux gares ou aéroports, les correspondances et l’attente. Une liaison directe n’a pas de changement de véhicule ; une correspondance en comporte un.",
          "example": "Horaire fictif : train A de 8 h 10 à 9 h 00, puis train B de 9 h 20 à 10 h 05. L’attente dure 20 minutes et le trajet total 1 h 55.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Dans cet horaire fictif, combien de minutes attend-on entre 9 h 00 et 9 h 20 ? Nombre seul.",
              "answer": 20,
              "hint": "Compare l’arrivée du premier train au départ du second.",
              "explanation": "9 h 20 − 9 h 00 = 20 minutes.",
              "id": "g-villes-e1"
            },
            {
              "type": "choice",
              "prompt": "Pour comparer train et avion, il faut considérer…",
              "options": [
                "le trajet complet, les attentes et les accès",
                "seulement le temps dans le véhicule",
                "uniquement la couleur du billet"
              ],
              "answer": "le trajet complet, les attentes et les accès",
              "hint": "Le voyage commence avant l’embarquement.",
              "explanation": "Une comparaison cohérente prend en compte toutes les étapes du trajet.",
              "id": "g-villes-e2"
            }
          ],
          "visual": {
            "type": "table",
            "caption": "Horaire fictif pour apprendre à lire une correspondance",
            "headers": [
              "Étape",
              "Départ",
              "Arrivée"
            ],
            "rows": [
              [
                "Train A",
                "8 h 10",
                "9 h 00"
              ],
              [
                "Train B",
                "9 h 20",
                "10 h 05"
              ]
            ]
          },
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-localiser",
          "title": "Localiser des villes à trois échelles",
          "notion": "Localiser des villes à trois échelles",
          "objective": "Je relie une ville à son pays et son continent, puis je choisis une échelle de trajet.",
          "lesson": "Paris est la capitale de la France ; Lyon se trouve aussi en France, au sud-est de Paris. Venise est en Italie, en Europe, à l’est de la France métropolitaine. Tokyo est au Japon, en Asie, beaucoup plus à l’est. Le trajet Paris–Lyon se lit à l’échelle de la France ; Paris–Venise à celle de l’Europe ; Paris–Tokyo à celle du monde. On choisit une carte qui contient les deux lieux.",
          "example": "Une carte de France ne suffit pas à situer Tokyo. Pour comparer un trajet français, un trajet européen et un trajet intercontinental, il faut changer d’échelle.",
          "sourceRef": "C20 · Géographie CM2 · Se déplacer ; accompagnement Éduscol Se déplacer, mars 2016, p. 4",
          "sourceStatus": "Thème CM2 explicite — choix des villes et séquençage proposés",
          "visual": {
            "type": "table",
            "caption": "Repères géographiques réels ; aucun horaire ni distance de transport ne sont déduits",
            "headers": [
              "Ville",
              "Pays",
              "Continent"
            ],
            "rows": [
              [
                "Paris",
                "France",
                "Europe"
              ],
              [
                "Lyon",
                "France",
                "Europe"
              ],
              [
                "Venise",
                "Italie",
                "Europe"
              ],
              [
                "Tokyo",
                "Japon",
                "Asie"
              ]
            ]
          },
          "exercises": [
            {
              "id": "g-localiser-e1",
              "type": "match",
              "prompt": "Associe chaque trajet à l’échelle adaptée.",
              "options": [
                "Paris–Lyon",
                "Paris–Venise",
                "Paris–Tokyo"
              ],
              "choices": [
                "Monde",
                "France",
                "Europe"
              ],
              "answer": [
                "France",
                "Europe",
                "Monde"
              ],
              "hint": "Choisis un territoire qui contient à la fois départ et arrivée.",
              "explanation": "Lyon et Paris sont en France ; Venise est dans un autre pays européen ; Tokyo est en Asie."
            },
            {
              "id": "g-localiser-e2",
              "type": "match",
              "prompt": "Associe les villes au pays.",
              "options": [
                "Paris",
                "Venise",
                "Tokyo"
              ],
              "choices": [
                "Japon",
                "France",
                "Italie"
              ],
              "answer": [
                "France",
                "Italie",
                "Japon"
              ],
              "hint": "Relis les repères du tableau.",
              "explanation": "Paris est en France, Venise en Italie, Tokyo au Japon."
            },
            {
              "id": "g-localiser-e3",
              "type": "guided",
              "prompt": "Avec un adulte, trace trois cadres emboîtés intitulés « France », « Europe », « Monde » : indique Paris et Lyon dans France, puis ajoute Venise dans Europe et Tokyo dans Monde. Explique qu’il s’agit d’un schéma de localisation, sans distances ni contours réels.",
              "criteria": [
                "Villes, pays et continents sont correctement associés.",
                "Les trois échelles sont distinguées.",
                "Le schéma n’est pas présenté comme une carte exacte à l’échelle."
              ],
              "hint": "Les cadres représentent des emboîtements de territoires, pas des frontières dessinées.",
              "explanation": "Le schéma aide à choisir une échelle ; un vrai itinéraire demanderait ensuite une carte ou un outil adapté."
            }
          ]
        },
        {
          "id": "g-durable",
          "title": "Déplacements et développement durable",
          "notion": "Déplacements et développement durable",
          "objective": "Je propose un choix argumenté tenant compte des contraintes.",
          "lesson": "Les déplacements ont des effets sur l’air, le climat, le bruit, la santé et l’espace. Marcher, pédaler, utiliser les transports collectifs ou partager un véhicule peut réduire certains impacts, si les conditions le permettent. Un aménagement durable doit aussi être sûr et accessible.",
          "example": "Une piste cyclable utile relie des lieux, limite les conflits avec les véhicules et permet un trajet sécurisé ; un simple trait sur une carte ne suffit pas.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel projet prend en compte plusieurs enjeux ?",
              "options": [
                "Un trajet sûr, accessible et moins polluant quand c’est possible.",
                "Interdire tout déplacement nécessaire.",
                "Choisir sans regarder les besoins."
              ],
              "answer": "Un trajet sûr, accessible et moins polluant quand c’est possible.",
              "hint": "Durable comprend l’environnement et la vie des habitants.",
              "explanation": "On recherche des améliorations réalistes et on compare leurs conséquences.",
              "id": "g-durable-e1"
            },
            {
              "type": "guided",
              "prompt": "En famille ou en petit groupe, propose une amélioration d’un trajet : passage piéton, accès adapté, stationnement vélo ou horaire de bus. Fais un croquis légendé et explique un avantage et une limite.",
              "criteria": [
                "Le besoin et les usagers concernés sont décrits.",
                "Le croquis est légendé.",
                "Un avantage et une contrainte sont expliqués."
              ],
              "hint": "Ne dépose rien dans la rue : il s’agit d’une proposition accompagnée.",
              "explanation": "Argumenter permet de comprendre les choix d’aménagement, sans prétendre qu’une solution convient à tous.",
              "id": "g-durable-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Se déplacer",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        }
      ]
    },
    {
      "id": "g-internet",
      "title": "Communiquer d’un bout à l’autre du monde grâce à l’Internet",
      "steps": [
        {
          "id": "g-reseau",
          "title": "Internet : un monde de réseaux matériels",
          "notion": "Internet : un monde de réseaux matériels",
          "objective": "Je sais qu’Internet repose sur des équipements.",
          "lesson": "Internet relie de nombreux réseaux informatiques. Des câbles, dont des câbles sous-marins, des antennes, des routeurs et des centres de données permettent aux informations de circuler. Le Wi-Fi relie un appareil à un réseau local ; il n’efface pas les autres infrastructures.",
          "example": "Un message envoyé sans fil depuis une tablette peut ensuite voyager sur des câbles jusqu’à un serveur lointain.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle phrase est exacte ?",
              "options": [
                "Internet utilise des équipements matériels et de l’énergie.",
                "Internet n’utilise aucun câble ni machine.",
                "Le Wi-Fi est le nom de toute la planète."
              ],
              "answer": "Internet utilise des équipements matériels et de l’énergie.",
              "hint": "Même une communication sans fil passe par des appareils.",
              "explanation": "Les réseaux et les centres de données ont des localisations et des besoins matériels.",
              "id": "g-reseau-e1"
            },
            {
              "type": "order",
              "prompt": "Range le trajet simplifié d’un message.",
              "options": [
                "Réseaux et serveurs",
                "Appareil de départ",
                "Appareil du destinataire"
              ],
              "answer": [
                "Appareil de départ",
                "Réseaux et serveurs",
                "Appareil du destinataire"
              ],
              "hint": "Le message part d’un appareil et rejoint un autre appareil par des réseaux.",
              "explanation": "Ce schéma simplifie un trajet qui peut traverser de nombreux équipements.",
              "id": "g-reseau-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-connecte",
          "title": "Un habitant connecté au monde",
          "notion": "Un habitant connecté au monde",
          "objective": "Je distingue usages, services et effets d’une connexion.",
          "lesson": "Internet permet de communiquer, chercher des informations, apprendre, travailler, acheter ou partager des productions. Une communication peut être rapide malgré une grande distance. Mais une connexion ne garantit ni une réponse immédiate ni une information vraie.",
          "example": "Une classe peut échanger un texte avec une autre classe éloignée sans que les élèves aient à voyager.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’usage à son exemple.",
              "options": [
                "Communiquer",
                "S’informer",
                "Produire et partager"
              ],
              "choices": [
                "Créer un document commun",
                "Lire une ressource identifiée",
                "Envoyer un message"
              ],
              "answer": [
                "Envoyer un message",
                "Lire une ressource identifiée",
                "Créer un document commun"
              ],
              "hint": "Distingue échanger, rechercher et créer.",
              "explanation": "Internet rassemble plusieurs usages, parfois dans un même outil.",
              "id": "g-connecte-e1"
            },
            {
              "type": "choice",
              "prompt": "Un message venu de très loin est-il forcément exact ?",
              "options": [
                "Non, sa fiabilité dépend de sa source et de ses preuves.",
                "Oui, la distance garantit la vérité.",
                "Oui, s’il arrive vite."
              ],
              "answer": "Non, sa fiabilité dépend de sa source et de ses preuves.",
              "hint": "La rapidité n’est pas une preuve.",
              "explanation": "On conserve son esprit critique même quand l’information circule vite.",
              "id": "g-connecte-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-inegalites",
          "title": "Des habitants inégalement connectés",
          "notion": "Des habitants inégalement connectés",
          "objective": "Je lis des données et comprends différentes inégalités d’accès.",
          "lesson": "L’accès à Internet varie selon les équipements, la couverture des réseaux, le coût, l’électricité disponible et les compétences des usagers. Les inégalités existent entre territoires et à l’intérieur d’un même territoire. L’accessibilité pour les personnes en situation de handicap compte aussi.",
          "example": "Dans le tableau fictif, le groupe A compte 80 foyers connectés sur 100, le groupe B 50 sur 100. Ces nombres servent à s’entraîner, pas à décrire des pays réels.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Dans l’exemple fictif, combien de foyers sur 100 séparent les deux groupes : 80 et 50 ? Nombre seul.",
              "answer": 30,
              "hint": "Calcule la différence.",
              "explanation": "80 − 50 = 30 foyers sur 100 dans cet exemple.",
              "id": "g-inegalites-e1"
            },
            {
              "type": "choice",
              "prompt": "Quel obstacle peut limiter une connexion ?",
              "options": [
                "Le coût, l’absence d’équipement ou un réseau insuffisant.",
                "Uniquement la distance avec l’école.",
                "Aucun obstacle : tout le monde est connecté."
              ],
              "answer": "Le coût, l’absence d’équipement ou un réseau insuffisant.",
              "hint": "Pense aux conditions matérielles et aux usages.",
              "explanation": "Une inégalité numérique peut avoir plusieurs causes.",
              "id": "g-inegalites-e2"
            }
          ],
          "visual": {
            "type": "table",
            "caption": "Données fictives : deux groupes de 100 foyers",
            "headers": [
              "Groupe fictif",
              "Foyers connectés",
              "Foyers non connectés"
            ],
            "rows": [
              [
                "A",
                "80",
                "20"
              ],
              [
                "B",
                "50",
                "50"
              ]
            ]
          },
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-source",
          "title": "Chercher une information et identifier sa source",
          "notion": "Chercher une information et identifier sa source",
          "objective": "Je compare deux informations avant de les utiliser.",
          "lesson": "Une recherche commence par une question précise et des mots-clés. On vérifie l’auteur ou l’institution, la date et les preuves. Une publicité ou un message anonyme n’a pas le même rôle qu’une donnée expliquée par une source identifiée. Recouper signifie comparer avec une autre source indépendante.",
          "example": "Pour connaître un horaire, une page officielle du réseau de transport mise à jour est plus pertinente qu’un ancien commentaire sans date.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour vérifier l’horaire actuel d’un bus, quelle source choisir d’abord ?",
              "options": [
                "Le site ou document officiel récent du réseau.",
                "Un message anonyme vieux de plusieurs années.",
                "Une publicité sans horaire."
              ],
              "answer": "Le site ou document officiel récent du réseau.",
              "hint": "La date et le responsable de l’information sont essentiels.",
              "explanation": "La source doit être adaptée à la question et suffisamment à jour.",
              "id": "g-source-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise les ressources fictives A et B intégrées. Pose une question sur l’horaire du bus, propose trois mots-clés de recherche puis compare responsable, date et preuve. Explique quelle source est mieux adaptée dans l’exercice et pourquoi aucune ne suffit pour un vrai trajet. Une recherche réelle accompagnée est facultative.",
              "criteria": [
                "La question et les mots-clés sont précis.",
                "Les responsables, dates et preuves des deux fiches sont comparés.",
                "Le caractère fictif et l’impossibilité d’en déduire un horaire réel sont expliqués."
              ],
              "hint": "La fiche A a un responsable et une date ; le commentaire B n’en a pas. Tous deux sont ici des documents d’entraînement.",
              "explanation": "La compétence numérique s’observe dans une recherche réelle, pas seulement dans un QCM.",
              "id": "g-source-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée",
          "visual": {
            "type": "table",
            "caption": "Deux ressources intégrées fictives à comparer : ni horaire ni publicité réels",
            "headers": [
              "Ressource",
              "Responsable/date",
              "Message"
            ],
            "rows": [
              [
                "A : fiche du réseau fictif Clairbus",
                "Service fictif Clairbus, fiche du 1er septembre 2026",
                "Ligne A : départ pédagogique à 8 h 10. Pour un vrai voyage, consulter la fiche réelle à jour."
              ],
              [
                "B : commentaire isolé fictif",
                "Auteur inconnu, sans date",
                "« Le bus part toujours quand on veut ! » Aucun justificatif."
              ]
            ]
          }
        },
        {
          "id": "g-donnees",
          "title": "Protéger ses données et respecter les autres",
          "notion": "Protéger ses données et respecter les autres",
          "objective": "Je sais quoi faire avant de partager une information personnelle.",
          "lesson": "Un surnom, une photo, une adresse ou une localisation peuvent concerner une personne. On demande l’accord avant de partager l’image d’autrui, et on évite de diffuser des informations privées. Un mot de passe doit rester secret. Face à un message inquiétant, on n’est pas seul : on en parle à un adulte de confiance.",
          "example": "Pour montrer un projet de classe, on peut publier un dessin sans nom complet ni photo d’un enfant identifiable.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Avant de partager la photo d’un camarade, je dois…",
              "options": [
                "demander l’accord et suivre les règles fixées par l’adulte",
                "la publier aussitôt",
                "ajouter son adresse pour être précis"
              ],
              "answer": "demander l’accord et suivre les règles fixées par l’adulte",
              "hint": "L’image d’une personne n’est pas un objet libre à diffuser.",
              "explanation": "Respecter les personnes fait partie des usages responsables du numérique.",
              "id": "g-donnees-e1"
            },
            {
              "type": "choice",
              "prompt": "Un message me met mal à l’aise. Que faire ?",
              "options": [
                "En parler à un adulte de confiance et éviter de répondre seul.",
                "Garder absolument le secret.",
                "Donner mon adresse pour expliquer."
              ],
              "answer": "En parler à un adulte de confiance et éviter de répondre seul.",
              "hint": "Demander de l’aide est un bon réflexe.",
              "explanation": "L’adulte accompagne la protection des données et les démarches nécessaires.",
              "id": "g-donnees-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée"
        },
        {
          "id": "g-partager",
          "title": "Produire ensemble et expliquer un réseau",
          "notion": "Produire ensemble et expliquer un réseau",
          "objective": "Je coopère pour créer une représentation claire.",
          "lesson": "Un schéma peut montrer des appareils et les liens qui transportent l’information. Une légende explique les signes. Pour produire à plusieurs, on répartit les tâches, on vérifie les informations et on indique les sources. On utilise des images autorisées ou des dessins originaux.",
          "example": "Dans un groupe de trois, une personne dessine les équipements, une autre rédige la légende et la troisième vérifie les informations ; chacun relit ensuite l’ensemble.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Que doit contenir un schéma compréhensible ?",
              "options": [
                "Un titre, des liens lisibles et une légende.",
                "Seulement des décorations.",
                "Des données personnelles de tous les élèves."
              ],
              "answer": "Un titre, des liens lisibles et une légende.",
              "hint": "Le lecteur doit comprendre ce que les signes représentent.",
              "explanation": "Le schéma sert à expliquer, pas seulement à embellir.",
              "id": "g-partager-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte ou un camarade accompagné, réalise sur papier ou dans un outil local un schéma du trajet simplifié d’un message. Indique appareils, réseau, serveur et destinataire. Répartissez les tâches et expliquez le schéma.",
              "criteria": [
                "Le trajet est cohérent et légendé.",
                "Les rôles sont répartis et chaque personne participe.",
                "Les sources ou le caractère simplifié du modèle sont indiqués."
              ],
              "hint": "Un dessin original suffit ; ne publie aucune adresse ni identifiant réel.",
              "explanation": "La production collective permet d’observer coopération, langage géographique et compétences numériques.",
              "id": "g-partager-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Communiquer d’un bout à l’autre du monde grâce à l’Internet",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée"
        }
      ]
    },
    {
      "id": "g-habiter",
      "title": "Mieux habiter",
      "steps": [
        {
          "id": "g-nature",
          "title": "Favoriser la nature en ville",
          "notion": "Favoriser la nature en ville",
          "objective": "Je reconnais les fonctions des espaces végétalisés.",
          "lesson": "Parcs, arbres, jardins et berges accueillent des êtres vivants et offrent des lieux de détente. Ils peuvent apporter de l’ombre et aider l’eau à s’infiltrer. Leur intérêt dépend de leur diversité, de leur entretien et de leur accès pour les habitants. Un espace vert n’est pas utile seulement parce qu’il est joli.",
          "example": "Un arbre près d’un banc peut apporter de l’ombre ; un sol perméable laisse passer une partie de l’eau de pluie.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel aménagement peut favoriser la nature et le confort des habitants ?",
              "options": [
                "Des arbres adaptés et un espace accessible entretenu.",
                "Du béton sur tous les sols.",
                "Un espace vert fermé à tous et sans entretien."
              ],
              "answer": "Des arbres adaptés et un espace accessible entretenu.",
              "hint": "Pense aux êtres vivants et aux usages humains.",
              "explanation": "Les choix doivent tenir compte de la biodiversité, du climat local et des habitants.",
              "id": "g-nature-e1"
            },
            {
              "type": "choice",
              "prompt": "Un sol perméable…",
              "options": [
                "laisse s’infiltrer une partie de l’eau",
                "empêche toujours toute vie",
                "est forcément une route goudronnée"
              ],
              "answer": "laisse s’infiltrer une partie de l’eau",
              "hint": "Perméable signifie qui peut être traversé.",
              "explanation": "L’infiltration est un enjeu de l’aménagement urbain.",
              "id": "g-nature-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-corridors",
          "title": "Relier les espaces et observer les acteurs",
          "notion": "Relier les espaces et observer les acteurs",
          "objective": "Je comprends l’intérêt des continuités écologiques.",
          "lesson": "Une continuité écologique relie des milieux et facilite le déplacement de certains êtres vivants. Des haies, des berges végétalisées et des passages adaptés peuvent y contribuer. Les habitants, associations, collectivités et professionnels peuvent participer aux projets ; leurs besoins et avis ne sont pas toujours identiques.",
          "example": "Deux jardins reliés par une haie peuvent offrir davantage de possibilités de déplacement qu’un espace isolé, selon les espèces.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "À quoi peut servir un corridor écologique ?",
              "options": [
                "À relier des milieux pour certains êtres vivants.",
                "À faire circuler uniquement les voitures.",
                "À remplacer tous les espaces naturels."
              ],
              "answer": "À relier des milieux pour certains êtres vivants.",
              "hint": "Un corridor est ici un lien entre des habitats.",
              "explanation": "Les besoins varient selon les espèces ; on étudie le milieu avant d’aménager.",
              "id": "g-corridors-e1"
            },
            {
              "type": "match",
              "prompt": "Associe un acteur à un rôle possible.",
              "options": [
                "Commune",
                "Habitants",
                "Association naturaliste"
              ],
              "choices": [
                "Partager les usages et besoins du quartier",
                "Apporter des observations sur les espèces",
                "Décider et gérer certains aménagements publics"
              ],
              "answer": [
                "Décider et gérer certains aménagements publics",
                "Partager les usages et besoins du quartier",
                "Apporter des observations sur les espèces"
              ],
              "hint": "Les décisions, les usages et les connaissances se complètent.",
              "explanation": "Un projet de territoire fait intervenir plusieurs acteurs.",
              "id": "g-corridors-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-dechets",
          "title": "Réduire, réutiliser, puis trier",
          "notion": "Réduire, réutiliser, puis trier",
          "objective": "Je distingue prévention et traitement des déchets.",
          "lesson": "Le meilleur déchet est souvent celui qu’on évite de produire. Réduire signifie consommer moins de ressources ; réutiliser consiste à employer de nouveau un objet ; trier prépare certaines filières de traitement. Les consignes de tri dépendent du territoire : on consulte celles de sa collectivité.",
          "example": "Réparer une gourde évite d’en acheter une autre. Mettre un emballage dans le bon bac ne signifie pas qu’il sera toujours recyclé.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Dans cette démarche de prévention, place les actions du plus en amont au traitement.",
              "options": [
                "Trier ce qui reste",
                "Réduire les achats inutiles",
                "Réutiliser ou réparer"
              ],
              "answer": [
                "Réduire les achats inutiles",
                "Réutiliser ou réparer",
                "Trier ce qui reste"
              ],
              "hint": "Essaie d’abord d’éviter le déchet.",
              "explanation": "Réduire et réutiliser agissent avant le tri des déchets restants.",
              "id": "g-dechets-e1"
            },
            {
              "type": "choice",
              "prompt": "Pour connaître le bon bac dans ta commune, il faut…",
              "options": [
                "consulter les consignes locales",
                "copier n’importe quelle consigne trouvée ailleurs",
                "se fier seulement à la couleur d’un dessin"
              ],
              "answer": "consulter les consignes locales",
              "hint": "Les équipements et collectes varient.",
              "explanation": "Les règles locales indiquent les déchets acceptés et les précautions nécessaires.",
              "id": "g-dechets-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-recycler",
          "title": "Le recyclage continue après le tri",
          "notion": "Le recyclage continue après le tri",
          "objective": "Je décris une filière de recyclage et ses limites.",
          "lesson": "Après la collecte, des déchets sont triés, préparés puis transformés en matières qui peuvent servir à fabriquer de nouveaux objets. Recycler demande de l’énergie et des équipements. Tous les matériaux ne sont pas recyclés de la même façon ni un nombre illimité de fois ; réduire les déchets reste important.",
          "example": "Des emballages en verre correctement collectés peuvent être transformés pour fabriquer de nouveaux emballages, après les opérations nécessaires.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Remets le parcours simplifié dans l’ordre.",
              "options": [
                "Transformation en matière utilisable",
                "Tri par les habitants et collecte",
                "Fabrication d’un nouvel objet"
              ],
              "answer": [
                "Tri par les habitants et collecte",
                "Transformation en matière utilisable",
                "Fabrication d’un nouvel objet"
              ],
              "hint": "Le nouvel objet vient après le traitement de la matière.",
              "explanation": "Le tri prépare le recyclage ; il n’en est que le début.",
              "id": "g-recycler-e1"
            },
            {
              "type": "choice",
              "prompt": "Pourquoi réduire reste-t-il utile même si on trie ?",
              "options": [
                "Le recyclage a des limites et utilise des ressources.",
                "Le recyclage ne demande aucune énergie.",
                "Tous les objets sont recyclables pour toujours."
              ],
              "answer": "Le recyclage a des limites et utilise des ressources.",
              "hint": "Pense aux machines, transports et pertes de matière.",
              "explanation": "Prévenir les déchets évite aussi des consommations de ressources.",
              "id": "g-recycler-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-ecoquartier",
          "title": "Habiter un écoquartier",
          "notion": "Habiter un écoquartier",
          "objective": "Je compare des choix d’aménagement à plusieurs critères.",
          "lesson": "Un écoquartier cherche à améliorer la qualité de vie en tenant compte de l’environnement et des habitants. Il peut associer logements, services, espaces végétalisés, déplacements accessibles et économies de ressources. Le nom ne suffit pas : on observe les réalisations, leurs effets et leurs limites.",
          "example": "Un quartier peut proposer un arrêt de bus, des commerces proches et des logements mieux isolés ; il faut aussi se demander si les habitants peuvent y accéder et y vivre confortablement.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle question aide à évaluer un projet d’écoquartier ?",
              "options": [
                "Quels effets a-t-il sur les habitants, les déplacements et les ressources ?",
                "Le mot éco est-il écrit en grand ?",
                "Tous les bâtiments ont-ils la même couleur ?"
              ],
              "answer": "Quels effets a-t-il sur les habitants, les déplacements et les ressources ?",
              "hint": "Un projet s’évalue avec des critères observables.",
              "explanation": "Le vocabulaire d’un projet ne remplace pas l’examen de ses effets.",
              "id": "g-ecoquartier-e1"
            },
            {
              "type": "choice",
              "prompt": "Quel ensemble de choix est cohérent ?",
              "options": [
                "Services proches, trajets accessibles, végétation et sobriété énergétique.",
                "Aucun service et accès interdit aux piétons.",
                "Seulement une décoration verte."
              ],
              "answer": "Services proches, trajets accessibles, végétation et sobriété énergétique.",
              "hint": "Mieux habiter concerne plusieurs dimensions du cadre de vie.",
              "explanation": "Les dimensions sociales, environnementales et pratiques se complètent.",
              "id": "g-ecoquartier-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Thème CM2 explicite — séquençage pédagogique proposé"
        },
        {
          "id": "g-projet",
          "title": "Proposer un projet pour mieux habiter",
          "notion": "Proposer un projet pour mieux habiter",
          "objective": "Je réalise une enquête locale et justifie une proposition.",
          "lesson": "Une enquête commence par observer un lieu, recueillir des informations et identifier les usagers. On propose ensuite un aménagement, on choisit des critères et on envisage les contraintes. Un croquis légendé communique les idées. La décision réelle revient aux acteurs compétents.",
          "example": "Proposer de l’ombre dans une cour peut demander de réfléchir aux usages, à l’eau, à l’entretien et au coût, pas seulement au nombre d’arbres.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Avant de proposer un aménagement, il est utile de…",
              "options": [
                "observer le lieu et les besoins de différents usagers",
                "décider sans regarder le lieu",
                "annoncer que le projet est déjà construit"
              ],
              "answer": "observer le lieu et les besoins de différents usagers",
              "hint": "Une proposition répond à des besoins identifiés.",
              "explanation": "L’enquête fournit des arguments pour comparer des solutions.",
              "id": "g-projet-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, choisis un lieu proche autorisé. Fais un croquis avec titre, légende et orientation. Propose une amélioration liée à la nature, aux déchets ou aux déplacements. Présente deux bénéfices, une contrainte et les acteurs à consulter.",
              "criteria": [
                "L’observation et le croquis localisent clairement le lieu.",
                "La proposition répond à un besoin précis.",
                "Deux bénéfices, une contrainte et des acteurs sont présentés.",
                "Les participants écoutent et comparent les idées."
              ],
              "hint": "Tu peux utiliser un lieu fictif si une sortie n’est pas possible ; indique-le clairement.",
              "explanation": "Ce projet mobilise les méthodes géographiques et une participation raisonnée au développement durable.",
              "id": "g-projet-e2"
            }
          ],
          "sourceRef": "C20 · Géographie CM2 · Mieux habiter",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée"
        }
      ]
    }
  ]
});
