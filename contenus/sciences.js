/* Contenus originaux ; références et statut dans notes-hg-sciences.md. */
window.CM2_SUBJECTS.push({
  "id": "sciences",
  "title": "Sciences et technologie",
  "icon": "🔬",
  "chapters": [
    {
      "id": "s-matiere",
      "title": "Matière, mouvement, énergie et information",
      "steps": [
        {
          "id": "s-demarche",
          "title": "Mener une expérience juste",
          "notion": "Mener une expérience juste",
          "objective": "Je pose une question, teste une hypothèse et explique les résultats.",
          "lesson": "Une hypothèse est une réponse possible que l’on peut tester. Une expérience compare des situations en changeant un seul facteur à la fois. On note le matériel, les mesures et les résultats ; on peut recommencer pour vérifier. Une observation peut contredire notre idée : on modifie alors l’explication.",
          "example": "Pour tester l’effet de la lumière sur une plante, on garde autant que possible la même espèce, la même eau et la même température.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour tester l’effet de la lumière, que faut-il faire ?",
              "options": [
                "Changer la lumière en gardant les autres conditions comparables.",
                "Changer en même temps l’eau, la lumière et la plante.",
                "Choisir seulement le résultat qui nous plaît."
              ],
              "answer": "Changer la lumière en gardant les autres conditions comparables.",
              "hint": "Pour comprendre une cause, on évite de tout modifier.",
              "explanation": "La comparaison devient interprétable quand on contrôle les autres facteurs.",
              "id": "s-demarche-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, choisis une question sans danger, par exemple « le papier plié porte-t-il mieux un petit objet ? ». Prévois deux essais comparables, note les résultats puis recommence.",
              "criteria": [
                "Une question et une hypothèse sont formulées.",
                "Un seul facteur est modifié et les essais sont répétés.",
                "Le résultat est distingué de l’hypothèse et expliqué."
              ],
              "hint": "Utilise seulement du papier et de petits objets légers ; l’adulte choisit le matériel.",
              "explanation": "La démarche scientifique comprend aussi les résultats qui ne confirment pas l’idée de départ.",
              "id": "s-demarche-e2"
            }
          ],
          "sourceRef": "S23 · compétences travaillées · démarches scientifiques et technologiques",
          "sourceStatus": "Compétence de cycle — progression CM2 proposée"
        },
        {
          "id": "s-materiaux",
          "title": "Matière, matériaux et objets",
          "notion": "Matière, matériaux et objets",
          "objective": "Je distingue ce qui compose un objet et sa fabrication.",
          "lesson": "Un matériau est une matière utilisée pour fabriquer un objet : bois, verre, métal, plastique… Certaines matières sont directement disponibles dans la nature ; d’autres sont transformées ou fabriquées par les humains. Un même matériau peut servir à plusieurs objets, et un objet peut associer plusieurs matériaux.",
          "example": "Une table peut réunir un plateau en bois et des pieds en métal. Le verre d’une bouteille est fabriqué à partir de matières premières transformées.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’exemple à sa description.",
              "options": [
                "Branche tombée",
                "Bouteille en verre",
                "Chaise en bois et métal"
              ],
              "choices": [
                "Objet associant plusieurs matériaux",
                "Élément naturel",
                "Objet fabriqué avec une matière transformée"
              ],
              "answer": [
                "Élément naturel",
                "Objet fabriqué avec une matière transformée",
                "Objet associant plusieurs matériaux"
              ],
              "hint": "Sépare objet, matériau et transformation.",
              "explanation": "La bouteille et la chaise répondent à des usages humains ; la branche est ici un élément naturel.",
              "id": "s-materiaux-e1"
            },
            {
              "type": "choice",
              "prompt": "Le mot matériau répond surtout à la question…",
              "options": [
                "En quoi est fait l’objet ?",
                "Qui possède l’objet ?",
                "Quel est son prix ?"
              ],
              "answer": "En quoi est fait l’objet ?",
              "hint": "Observe la matière qui compose l’objet.",
              "explanation": "Décrire les matériaux aide à comprendre les propriétés et les usages.",
              "id": "s-materiaux-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-etats",
          "title": "Solide, liquide, gaz et changements d’état",
          "notion": "Solide, liquide, gaz et changements d’état",
          "objective": "Je décris les trois états et la réversibilité de certains changements.",
          "lesson": "Un solide garde sa forme et son volume. Un liquide garde son volume mais prend la forme du récipient. Un gaz occupe l’espace disponible : il n’a ni forme ni volume propres. L’eau peut fondre, se solidifier ou se vaporiser ; ces changements peuvent être inversés. La vapeur d’eau est invisible ; le nuage blanc au-dessus d’une eau chaude contient de petites gouttes.",
          "example": "Un glaçon fond et devient de l’eau liquide ; si on refroidit suffisamment cette eau, elle redevient solide.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe chaque état à sa propriété.",
              "options": [
                "Solide",
                "Liquide",
                "Gaz"
              ],
              "choices": [
                "Ni forme ni volume propres",
                "Forme et volume propres",
                "Volume propre, forme du récipient"
              ],
              "answer": [
                "Forme et volume propres",
                "Volume propre, forme du récipient",
                "Ni forme ni volume propres"
              ],
              "hint": "Pense à un caillou, à de l’eau et à de l’air.",
              "explanation": "Ces propriétés permettent de distinguer les états à l’échelle visible.",
              "id": "s-etats-e1"
            },
            {
              "type": "choice",
              "prompt": "La fonte d’un glaçon est-elle réversible ?",
              "options": [
                "Oui, l’eau peut être solidifiée de nouveau.",
                "Non, la matière a disparu.",
                "Oui, mais seulement en ajoutant du sel."
              ],
              "answer": "Oui, l’eau peut être solidifiée de nouveau.",
              "hint": "Le refroidissement inverse la fusion.",
              "explanation": "Un changement d’état ne fait pas disparaître la matière.",
              "id": "s-etats-e2"
            },
            {
              "id": "s-etats-observer",
              "type": "guided",
              "prompt": "Avec un adulte, observe un glaçon dans une petite coupelle à température ambiante. Note forme, état et évolution. L’adulte remet ensuite l’eau dans un récipient adapté au congélateur : compare après solidification. Ne chauffe rien et ne goûte pas l’eau de l’expérience.",
              "criteria": [
                "Les états avant/après sont correctement décrits.",
                "Fusion puis solidification sont nommées.",
                "Les observations réelles sont distinguées de la prévision et la sécurité est respectée."
              ],
              "hint": "Si le matériel manque, prépare le protocole ; une prévision seule ne vaut pas observation.",
              "explanation": "L’expérience montre le changement d’état de l’eau et sa réversibilité, sans faire disparaître la matière."
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-masse",
          "title": "Mesurer une masse et utiliser la tare",
          "notion": "Mesurer une masse et utiliser la tare",
          "objective": "Je mesure une masse en choisissant une unité adaptée.",
          "lesson": "La masse se mesure avec une balance. Pour peser un liquide, on pose le récipient vide et on fait la tare : la balance indique alors zéro avant l’ajout du liquide. Les unités usuelles comprennent tonne, quintal, kilogramme, gramme et milligramme. Une tonne vaut 1 000 kg ; un quintal vaut 100 kg ; 1 kg vaut 1 000 g ; 1 g vaut 1 000 mg.",
          "example": "Un bol vide de 120 g contient ensuite 200 g d’eau : le total vaut 320 g. Avec la tare, on lit directement les 200 g d’eau.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un récipient plein pèse 350 g ; vide il pèse 100 g. Quelle est la masse du contenu, en grammes ? Nombre seul.",
              "answer": 250,
              "hint": "Retire la masse du récipient.",
              "explanation": "350 − 100 = 250 g.",
              "id": "s-masse-e1"
            },
            {
              "type": "number",
              "prompt": "Combien de grammes représentent 2 kg ? Nombre seul.",
              "answer": 2000,
              "hint": "Un kilogramme vaut 1 000 grammes.",
              "explanation": "2 × 1 000 = 2 000 g.",
              "id": "s-masse-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec une balance et un adulte, compare deux petits objets puis mesure un peu d’eau dans un récipient taré. Note les unités et répète la mesure.",
              "criteria": [
                "La balance est utilisée correctement et la tare est expliquée.",
                "Les résultats comportent une unité.",
                "La répétition permet de comparer les mesures."
              ],
              "hint": "Ne dépasse pas la capacité de la balance ; garde les appareils électriques loin de l’eau.",
              "explanation": "L’observation pratique vérifie l’usage de l’instrument, au-delà du calcul.",
              "id": "s-masse-e3"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-volume",
          "title": "Mesurer un volume de liquide ou de solide",
          "notion": "Mesurer un volume de liquide ou de solide",
          "objective": "Je lis une graduation et utilise un déplacement d’eau.",
          "lesson": "Le volume est la place occupée. Un récipient gradué mesure un volume de liquide. Pour un petit solide qui ne se dissout pas et peut être immergé sans danger, on observe la hausse du niveau d’eau : la différence correspond au volume du solide. On lit à hauteur des yeux.",
          "example": "Le niveau passe de 40 mL à 55 mL après immersion d’un petit objet : son volume est 15 mL.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Le niveau passe de 30 mL à 48 mL. Quel volume occupe l’objet, en mL ? Nombre seul.",
              "answer": 18,
              "hint": "Soustrais le niveau initial au niveau final.",
              "explanation": "48 − 30 = 18 mL.",
              "id": "s-volume-e1"
            },
            {
              "type": "choice",
              "prompt": "Pour mesurer par déplacement d’eau, quel objet convient ?",
              "options": [
                "Un petit objet immergeable qui ne se dissout pas.",
                "Un appareil électrique branché.",
                "Une poudre qui se dissout complètement."
              ],
              "answer": "Un petit objet immergeable qui ne se dissout pas.",
              "hint": "Le solide doit rester identifiable et la manipulation sûre.",
              "explanation": "Le choix de l’objet et du récipient conditionne une mesure utilisable.",
              "id": "s-volume-e2"
            },
            {
              "id": "s-volume-mesurer",
              "type": "guided",
              "prompt": "Avec un adulte, verse de l’eau dans un récipient gradué et relève le volume à hauteur des yeux. Immerge un petit objet adapté, non soluble et sans danger, entièrement recouvert ; relève le nouveau volume et calcule la différence.",
              "criteria": [
                "Deux lectures avec unité sont relevées sur un instrument adapté.",
                "Le volume du solide est calculé par différence.",
                "L’objet est choisi en sécurité et aucune mesure n’est inventée."
              ],
              "hint": "Choisis un objet plus petit que le récipient ; on ne met jamais un appareil électrique dans l’eau.",
              "explanation": "La lecture et le geste sont observés par l’adulte ; le calcul seul ne prouve pas une mesure réalisée."
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-separer",
          "title": "Séparer des mélanges",
          "notion": "Séparer des mélanges",
          "objective": "Je choisis tamisage, décantation ou filtration.",
          "lesson": "Un tamis sépare des solides de tailles différentes. La décantation consiste à laisser se déposer certains éléments puis à séparer avec précaution. Une filtration retient des particules solides dans un filtre. Une eau filtrée n’est pas forcément potable : des substances dissoutes ou des microbes peuvent rester.",
          "example": "Pour séparer des graviers du sable, on peut tamiser. Pour retenir du sable dans l’eau, on peut utiliser un filtre adapté.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Choisis une technique adaptée.",
              "options": [
                "Graviers mélangés au sable",
                "Sable dans l’eau avec filtre",
                "Dépôt laissé au fond"
              ],
              "choices": [
                "Filtration",
                "Décantation",
                "Tamisage"
              ],
              "answer": [
                "Tamisage",
                "Filtration",
                "Décantation"
              ],
              "hint": "Pense aux tailles des grains et au rôle du filtre.",
              "explanation": "Les propriétés des constituants déterminent la technique.",
              "id": "s-separer-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, sépare du sable et de petits graviers par un tamis, puis observe un mélange eau-sable laissé au repos et filtré. Dessine les étapes. Ne bois pas l’eau.",
              "criteria": [
                "Les techniques sont nommées et choisies à bon escient.",
                "Les étapes sont dessinées ou décrites.",
                "La règle de ne pas boire l’eau expérimentale est respectée."
              ],
              "hint": "Utilise du matériel propre réservé à l’expérience et lave les mains après.",
              "explanation": "Comparer les techniques montre leurs possibilités et leurs limites.",
              "id": "s-separer-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-dissoudre",
          "title": "Dissoudre sans faire disparaître",
          "notion": "Dissoudre sans faire disparaître",
          "objective": "Je comprends dissolution, évaporation et conservation de la masse.",
          "lesson": "Du sel ou du sucre peut se dissoudre dans l’eau : on ne voit plus les grains, mais la matière est toujours présente. Dans un système où rien n’est perdu ni ajouté, la masse totale se conserve. L’évaporation de l’eau peut permettre de récupérer le sel ; elle peut se faire lentement à l’air, sans chauffer.",
          "example": "100 g d’eau et 5 g de sel donnent 105 g de mélange si rien ne s’échappe. Le sel ne disparaît pas parce qu’on ne le voit plus.",
          "exercises": [
            {
              "type": "number",
              "prompt": "On mélange 80 g d’eau et 4 g de sel sans perte. Quelle masse totale obtient-on, en grammes ? Nombre seul.",
              "answer": 84,
              "hint": "Additionne les masses introduites.",
              "explanation": "80 + 4 = 84 g.",
              "id": "s-dissoudre-e1"
            },
            {
              "type": "choice",
              "prompt": "Comment peut-on récupérer du sel dissous dans l’eau ?",
              "options": [
                "En laissant l’eau s’évaporer.",
                "En affirmant que le sel a disparu.",
                "En utilisant seulement un tamis à gros trous."
              ],
              "answer": "En laissant l’eau s’évaporer.",
              "hint": "L’eau peut partir sous forme de vapeur ; le sel reste.",
              "explanation": "La dissolution ne détruit pas le sel. L’évaporation permet de le récupérer sans nécessiter d’ébullition.",
              "id": "s-dissoudre-e2"
            },
            {
              "id": "s-dissoudre-mesurer",
              "type": "guided",
              "prompt": "Avec un adulte et une balance, mesure la masse d’un récipient contenant eau et un peu de sel avant de mélanger. Mélange sans perte, puis mesure l’ensemble de nouveau. Compare ; laisse ensuite un peu de solution dans une coupelle pour observer l’évaporation lente à l’air, sans chauffage ni dégustation.",
              "criteria": [
                "Le même ensemble est pesé avant et après dissolution sans perte volontaire.",
                "La comparaison et les éventuels écarts de mesure sont expliqués.",
                "L’observation de cristaux après évaporation est notée si elle est réalisée, sans invention."
              ],
              "hint": "Ne bouche pas un récipient qui serait chauffé : ici aucun chauffage n’est nécessaire. Attends plusieurs jours si besoin et garde la coupelle hors de portée des plus petits.",
              "explanation": "La masse se conserve si rien n’est perdu ; les différences de lecture peuvent venir de la précision ou d’une perte de matière."
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-mouvement",
          "title": "Décrire et mesurer un mouvement",
          "notion": "Décrire et mesurer un mouvement",
          "objective": "Je précise le point de vue et mesure distance et durée.",
          "lesson": "Un mouvement se décrit par rapport à un observateur. Rectiligne signifie que la trajectoire est une ligne droite ; circulaire signifie un cercle. On peut mesurer une distance parcourue et une durée entre deux instants. Le calcul de vitesse n’est pas demandé ici : on apprend d’abord à mesurer et à décrire. Pour les conversions usuelles : 1 m = 100 cm et 1 min = 60 s. On convertit une grandeur sans changer la distance ou la durée réelle.",
          "example": "Un passager assis est immobile par rapport à son siège, mais se déplace par rapport au quai lorsque le train roule.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Une bille qui suit une ligne droite sur une table a, par rapport à la table, un mouvement…",
              "options": [
                "rectiligne",
                "circulaire",
                "sans trajectoire"
              ],
              "answer": "rectiligne",
              "hint": "Rectiligne contient l’idée de ligne droite.",
              "explanation": "La trajectoire se décrit toujours dans un point de vue précisé.",
              "id": "s-mouvement-e1"
            },
            {
              "type": "number",
              "prompt": "Un déplacement commence à 10 h 02 et finit à 10 h 05. Quelle est sa durée, en minutes ? Nombre seul.",
              "answer": 3,
              "hint": "La durée est l’intervalle entre les deux instants.",
              "explanation": "10 h 05 − 10 h 02 = 3 minutes.",
              "id": "s-mouvement-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, fais rouler doucement un jouet sur 1 mètre dans un espace dégagé. Mesure la distance et la durée avec des outils adaptés, répète trois fois et compare les résultats.",
              "criteria": [
                "Le point de vue et la trajectoire sont décrits.",
                "Les distances et durées portent des unités.",
                "Les répétitions sont comparées sans cacher les différences."
              ],
              "hint": "Utilise un jouet léger, jamais un véhicule réel ou une pente dangereuse.",
              "explanation": "Les écarts entre mesures donnent l’occasion de discuter précision et reproductibilité.",
              "id": "s-mouvement-e3"
            },
            {
              "id": "s-mouvement-convertir-distance",
              "type": "number",
              "prompt": "Un jouet parcourt 2 m. Combien cela fait-il en centimètres ? Nombre seul.",
              "answer": 200,
              "hint": "Un mètre vaut 100 centimètres.",
              "explanation": "2 × 100 = 200 cm : la distance réelle reste la même."
            },
            {
              "id": "s-mouvement-convertir-duree",
              "type": "number",
              "prompt": "Un déplacement dure 2 min 30 s. Combien cela fait-il de secondes ? Nombre seul.",
              "answer": 150,
              "hint": "Convertis les deux minutes en secondes puis ajoute 30.",
              "explanation": "2 × 60 + 30 = 150 s."
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-energie",
          "title": "Observer une conversion d’énergie",
          "notion": "Observer une conversion d’énergie",
          "objective": "Je relie énergie de pesanteur, mouvement et électricité.",
          "lesson": "L’énergie permet des changements, comme mettre en mouvement ou éclairer. Un objet situé en hauteur possède une énergie de pesanteur. En descendant, il peut mettre une roue en mouvement : de l’énergie de pesanteur est convertie en énergie cinétique, liée au mouvement. Dans une éolienne, le mouvement peut permettre une production électrique.",
          "example": "Dans une petite roue à eau, l’eau qui descend fait tourner la roue. Une partie de l’énergie est aussi transférée à l’environnement.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe le mot à l’idée.",
              "options": [
                "Énergie de pesanteur",
                "Énergie cinétique",
                "Transfert électrique"
              ],
              "choices": [
                "Énergie liée au mouvement",
                "Énergie liée à la position en hauteur",
                "Énergie transmise dans un circuit"
              ],
              "answer": [
                "Énergie liée à la position en hauteur",
                "Énergie liée au mouvement",
                "Énergie transmise dans un circuit"
              ],
              "hint": "Pense à l’eau en hauteur, à la roue qui tourne puis au circuit.",
              "explanation": "Les formes et les transferts d’énergie décrivent des phénomènes concrets.",
              "id": "s-energie-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, construis une roue très simple en carton protégée de l’eau ou observe une maquette sûre de moulin. Montre ce qui met la roue en mouvement, dessine la conversion et explique les limites du modèle.",
              "criteria": [
                "La source du mouvement est identifiée.",
                "La conversion est expliquée avec un vocabulaire adapté.",
                "La manipulation reste sûre et le modèle est distingué d’une vraie centrale."
              ],
              "hint": "Le matériel est choisi par l’adulte ; aucune prise électrique ni eau chaude.",
              "explanation": "L’activité pratique permet d’observer un dispositif, et non seulement de mémoriser un mot.",
              "id": "s-energie-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-lumiere",
          "title": "Lumière, transparence et ombres",
          "notion": "Lumière, transparence et ombres",
          "objective": "Je distingue les matériaux et relie une ombre aux positions.",
          "lesson": "Un objet transparent laisse voir nettement à travers ; un objet translucide laisse passer de la lumière sans image nette ; un objet opaque bloque la lumière. Un objet opaque éclairé peut présenter une partie non éclairée, son ombre propre, et produire une ombre portée sur une surface. La position de l’ombre dépend de la source et de l’objet.",
          "example": "Une lampe éclaire une balle devant un mur : la balle bloque une partie de la lumière et une ombre apparaît derrière elle.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’exemple à sa propriété habituelle.",
              "options": [
                "Vitre claire",
                "Papier calque",
                "Carton épais"
              ],
              "choices": [
                "Opaque",
                "Transparent",
                "Translucide"
              ],
              "answer": [
                "Transparent",
                "Translucide",
                "Opaque"
              ],
              "hint": "Compare passage de la lumière et netteté de la vue.",
              "explanation": "La transparence et la translucidité laissent passer la lumière différemment.",
              "id": "s-lumiere-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec une petite lampe et un adulte, place un objet opaque devant une feuille. Fais varier doucement la position de la lampe ; dessine deux positions et les ombres. Ne dirige jamais la lampe vers les yeux et ne regarde pas le Soleil.",
              "criteria": [
                "Source, objet et surface sont identifiés.",
                "Deux configurations sont dessinées et comparées.",
                "Ombre propre et ombre portée sont distinguées."
              ],
              "hint": "Travaille avec une lampe froide et sans obscurcir dangereusement la pièce.",
              "explanation": "Le schéma doit montrer le lien entre les positions et l’ombre, pas seulement sa silhouette.",
              "id": "s-lumiere-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-lune",
          "title": "Observer les phases de la Lune",
          "notion": "Observer les phases de la Lune",
          "objective": "Je nomme des formes visibles et les replace dans une succession.",
          "lesson": "La Lune n’émet pas sa propre lumière visible : elle est éclairée par le Soleil. Depuis la Terre, on voit une portion variable de sa partie éclairée : les phases. Les repères principaux sont nouvelle lune, premier quartier, pleine lune et dernier quartier. Cette succession recommence ; il n’est pas nécessaire ici de modéliser tous les mouvements.",
          "example": "À la pleine lune, le disque visible paraît entièrement éclairé. Au premier ou au dernier quartier, environ la moitié du disque visible est éclairée.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Range les phases à partir de la nouvelle lune.",
              "options": [
                "Pleine lune",
                "Dernier quartier",
                "Nouvelle lune",
                "Premier quartier"
              ],
              "answer": [
                "Nouvelle lune",
                "Premier quartier",
                "Pleine lune",
                "Dernier quartier"
              ],
              "hint": "Après la nouvelle lune vient un premier quartier avant la pleine lune.",
              "explanation": "La succession cyclique se poursuit ensuite vers une nouvelle lune.",
              "id": "s-lune-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, commence par dessiner et nommer les quatre observations du dossier intégré. Puis, si les conditions le permettent, réalise des observations datées réelles sur plusieurs semaines. Distingue clairement schéma de référence et observation faite par toi. Ne regarde jamais le Soleil.",
              "criteria": [
                "Les quatre formes du dossier sont nommées et schématisées.",
                "Le dossier de référence n’est pas présenté comme un relevé réel daté.",
                "Si des observations réelles sont faites, elles sont datées et les consignes sont respectées."
              ],
              "hint": "Si la météo empêche l’observation, utilise des données identifiées avec l’adulte.",
              "explanation": "Observer et représenter fait partie de l’apprentissage ; le QCM ne remplace pas ce suivi.",
              "id": "s-lune-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé",
          "visual": {
            "type": "table",
            "caption": "Dossier d’observation pédagogique, séquence simplifiée non datée : pas un calendrier réel",
            "headers": [
              "Observation de référence",
              "Aspect décrit"
            ],
            "rows": [
              [
                "1 : nouvelle lune",
                "Disque non visible dans la direction proche du Soleil ; on ne regarde jamais le Soleil."
              ],
              [
                "2 : premier quartier",
                "Environ une moitié du disque visible est éclairée."
              ],
              [
                "3 : pleine lune",
                "Le disque visible paraît entièrement éclairé."
              ],
              [
                "4 : dernier quartier",
                "Environ l’autre moitié du disque visible est éclairée."
              ]
            ]
          }
        },
        {
          "id": "s-circuit",
          "title": "Construire un circuit en sécurité",
          "notion": "Construire un circuit en sécurité",
          "objective": "Je réalise une boucle avec une pile, un interrupteur et une lampe.",
          "lesson": "Un circuit fermé relie les deux bornes d’une pile à une lampe par des conducteurs : le courant peut circuler et la lampe peut s’allumer si le matériel est adapté. Un interrupteur ouvre ou ferme la boucle. On utilise uniquement des piles basse tension et du matériel prévu pour cela, sous la surveillance d’un adulte. Jamais de prise électrique ; ne relie jamais directement les bornes d’une pile.",
          "example": "Si on ouvre l’interrupteur, la boucle est coupée et la lampe s’éteint. On peut étudier un circuit avec une ou deux petites lampes adaptées.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Que fait un interrupteur ouvert dans un circuit simple ?",
              "options": [
                "Il coupe la boucle.",
                "Il rend la pile infinie.",
                "Il remplace la lampe."
              ],
              "answer": "Il coupe la boucle.",
              "hint": "Le courant a besoin d’une boucle fermée.",
              "explanation": "L’interrupteur commande la circulation du courant en ouvrant ou fermant le circuit.",
              "id": "s-circuit-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte disposant d’un kit adapté, réalise une boucle pile-interrupteur-lampe puis observe l’effet d’une seconde lampe si le kit le permet. Dessine le trajet et explique ouvert/fermé. Sans kit, réalise le schéma et demande une observation ultérieure de la manipulation.",
              "criteria": [
                "Le matériel basse tension est adapté et les règles de sécurité sont appliquées.",
                "La boucle et le rôle de l’interrupteur sont expliqués.",
                "L’adulte observe réellement le montage avant de valider la manipulation."
              ],
              "hint": "Ne manipule aucune prise, aucun appareil branché et aucune pile endommagée.",
              "explanation": "La simulation sur papier prépare le geste mais ne prouve pas la réalisation d’un circuit réel.",
              "id": "s-circuit-e2"
            }
          ],
          "sourceRef": "S23 · Matière, mouvement, énergie et information · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        }
      ]
    },
    {
      "id": "s-vivant",
      "title": "Le vivant, sa diversité et les fonctions qui le caractérisent",
      "steps": [
        {
          "id": "s-organes",
          "title": "Organisme, appareil et organe",
          "notion": "Organisme, appareil et organe",
          "objective": "Je repère des niveaux d’organisation chez une plante et un animal.",
          "lesson": "Un organisme est un être vivant entier. Il possède des organes qui assurent des fonctions. Plusieurs organes peuvent fonctionner ensemble dans un appareil. Chez l’être humain, l’estomac fait partie de l’appareil digestif. Chez une plante à fleurs, racines, tige et feuilles sont des organes.",
          "example": "Un chat entier est un organisme ; son cœur est un organe. Une plante de haricot est aussi un organisme, avec des racines et des feuilles.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe chaque exemple au niveau décrit.",
              "options": [
                "Être humain entier",
                "Appareil digestif",
                "Estomac"
              ],
              "choices": [
                "Organe",
                "Ensemble d’organes qui participent à la digestion",
                "Organisme"
              ],
              "answer": [
                "Organisme",
                "Ensemble d’organes qui participent à la digestion",
                "Organe"
              ],
              "hint": "Passe du vivant entier à ses parties.",
              "explanation": "L’organisation du vivant peut se décrire à différentes échelles.",
              "id": "s-organes-e1"
            },
            {
              "type": "choice",
              "prompt": "Chez une plante à fleurs, quelle proposition nomme des organes ?",
              "options": [
                "Racines, tige et feuilles.",
                "Table, chaise et lampe.",
                "Terre, pot et étiquette."
              ],
              "answer": "Racines, tige et feuilles.",
              "hint": "Les organes appartiennent au vivant lui-même.",
              "explanation": "Le pot et le sol entourent la plante ; ils ne sont pas ses organes.",
              "id": "s-organes-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-classer",
          "title": "Classer par attributs partagés",
          "notion": "Classer par attributs partagés",
          "objective": "Je construis des groupes emboîtés à partir de ce que les êtres vivants possèdent.",
          "lesson": "Pour classer scientifiquement, on choisit des attributs observables : par exemple squelette interne, poils ou plumes. Les groupes peuvent s’emboîter. On ne classe pas selon « utile » ou « nuisible », ni seulement selon le lieu de vie. Des attributs partagés permettent de rechercher des liens de parenté.",
          "example": "Un chat et un merle ont un squelette interne ; le chat possède des poils, le merle des plumes. Leurs groupes sont inclus dans celui des animaux à squelette interne.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel critère convient à une classification par attributs ?",
              "options": [
                "La présence de plumes.",
                "J’aime cet animal.",
                "Cet animal est utile pour moi."
              ],
              "answer": "La présence de plumes.",
              "hint": "Cherche un caractère possédé et observable.",
              "explanation": "La classification scientifique s’appuie sur des attributs, pas sur une préférence.",
              "id": "s-classer-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise les données suivantes : chat, squelette interne et poils ; merle, squelette interne et plumes ; abeille, six pattes et squelette externe. Dessine des groupes emboîtés fondés sur les attributs.",
              "criteria": [
                "Chaque groupe est nommé par un attribut.",
                "Chat et merle sont réunis dans le groupe squelette interne.",
                "Le lieu de vie et les préférences ne servent pas de critères."
              ],
              "hint": "Un même organisme peut être dans plusieurs groupes emboîtés.",
              "explanation": "La construction de groupes fait apparaître les attributs communs et prépare l’étude des parentés.",
              "id": "s-classer-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-determiner",
          "title": "Identifier avec une clé de détermination",
          "notion": "Identifier avec une clé de détermination",
          "objective": "Je distingue identifier un être vivant et le classer.",
          "lesson": "Une clé de détermination propose des choix successifs sur des caractères visibles pour identifier un organisme. Identifier revient à lui donner un nom à partir d’observations. Classer consiste à regrouper selon des attributs et des parentés : ce n’est pas exactement la même démarche. On n’arrache pas et on ne capture pas un vivant inconnu.",
          "example": "Clé simplifiée : six pattes → insecte ; huit pattes → arachnide. Cette clé de groupes ne donne pas à elle seule le nom précis d’une espèce.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Dans la clé simplifiée, un animal à huit pattes appartient au groupe…",
              "options": [
                "arachnides",
                "insectes",
                "oiseaux"
              ],
              "answer": "arachnides",
              "hint": "Compte les pattes plutôt que de deviner le nom.",
              "explanation": "Une clé fait suivre des critères observables ; ici huit pattes mènent aux arachnides.",
              "id": "s-determiner-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, construis une clé pour les trois fiches intégrées : poils → chat ; sans poils, six pattes → coccinelle ; sans pattes et avec coquille → escargot. Identifie A, B et C, puis explique pourquoi cette clé limitée ne suffit pas à identifier n’importe quel animal réel. Une observation extérieure avec un vrai guide reste un prolongement.",
              "criteria": [
                "Les caractères des trois fiches sont utilisés avant le nom.",
                "Le chemin de la clé est expliqué pour A, B et C.",
                "La limite de la collection est reconnue et aucune identification universelle n’est revendiquée."
              ],
              "hint": "Ne touche pas une plante, un champignon ou un animal inconnu ; une photo autorisée peut suffire.",
              "explanation": "Une identification prudente est plus scientifique qu’un nom affirmé sans preuve.",
              "id": "s-determiner-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé",
          "visual": {
            "type": "table",
            "caption": "Collection pédagogique limitée : cette clé n’identifie pas tous les animaux du milieu naturel",
            "headers": [
              "Description intégrée",
              "Identification dans cette collection"
            ],
            "rows": [
              [
                "Animal A : poils, quatre pattes, animal domestique du dossier",
                "Chat domestique"
              ],
              [
                "Animal B : six pattes, élytres rouges portant sept points noirs",
                "Coccinelle à sept points"
              ],
              [
                "Animal C : corps mou, pied et coquille de l’escargot du dossier",
                "Escargot petit-gris"
              ]
            ]
          }
        },
        {
          "id": "s-fossiles",
          "title": "La biodiversité a une histoire",
          "notion": "La biodiversité a une histoire",
          "objective": "Je distingue les temps géologiques et l’histoire humaine.",
          "lesson": "Un fossile est une trace ou un reste d’un être vivant ancien conservé dans des roches. Les fossiles montrent que les êtres vivants et les milieux ont changé. Les temps géologiques sont beaucoup plus longs que la durée d’une vie humaine ou que l’histoire écrite. On ne présente pas les espèces actuelles comme toutes apparues en même temps.",
          "example": "Une ammonite fossile indique qu’un organisme aujourd’hui disparu a vécu avant nous. Une frise peut montrer des espèces passées et actuelles, en précisant son échelle.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Que permettent de montrer les fossiles ?",
              "options": [
                "La biodiversité a changé au cours de l’histoire de la Terre.",
                "Tous les êtres vivants ont toujours été identiques.",
                "Les roches sont toutes fabriquées par les humains."
              ],
              "answer": "La biodiversité a changé au cours de l’histoire de la Terre.",
              "hint": "Une espèce fossile peut être différente des espèces actuelles.",
              "explanation": "Les fossiles sont des indices matériels de vies passées.",
              "id": "s-fossiles-e1"
            },
            {
              "type": "choice",
              "prompt": "Quelle durée appartient au temps géologique ?",
              "options": [
                "Des millions d’années.",
                "La durée d’une récréation.",
                "Une semaine de vacances."
              ],
              "answer": "Des millions d’années.",
              "hint": "Géologique renvoie à l’histoire longue de la Terre.",
              "explanation": "Il faut des échelles différentes pour représenter une semaine et plusieurs millions d’années.",
              "id": "s-fossiles-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise les quatre fiches intégrées pour placer Dactylioceras commune, Tyrannosaurus rex, puis les deux espèces actuelles Homo sapiens et Felis catus sur un schéma temporel. Indique qu’il exprime un ordre relatif, pas des intervalles proportionnels. Explique pourquoi le temps géologique et l’histoire humaine demandent des échelles différentes.",
              "criteria": [
                "Les espèces fossiles et actuelles sont distinguées et les repères suivent les données.",
                "Les échelles géologiques et humaines sont différenciées.",
                "Le schéma n’invente aucune date précise ni intervalle proportionnel."
              ],
              "hint": "Dans le dossier, l’ammonite précède le tyrannosaure ; les deux sont bien antérieurs aux humains. Les deux espèces actuelles peuvent figurer au présent.",
              "explanation": "La représentation apprend à distinguer temps long et histoire humaine.",
              "id": "s-fossiles-e3"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé",
          "visual": {
            "type": "table",
            "caption": "Données de repérage pédagogique : ordre relatif, pas une frise à intervalles proportionnels",
            "headers": [
              "Repère",
              "Position à représenter"
            ],
            "rows": [
              [
                "Ammonite Dactylioceras commune, espèce fossile",
                "Passé géologique, bien avant l’histoire humaine ; espèce disparue."
              ],
              [
                "Tyrannosaurus rex, espèce fossile",
                "Passé géologique, après les ammonites du dossier et bien avant l’histoire humaine ; espèce disparue."
              ],
              [
                "Homo sapiens, espèce actuelle",
                "Les êtres humains appartiennent à une espèce actuelle, d’apparition beaucoup plus récente que ces espèces fossiles."
              ],
              [
                "Chat domestique, Felis catus, observé aujourd’hui",
                "Espèce actuelle ; cela ne signifie pas que sa lignée n’a pas de passé."
              ]
            ]
          }
        },
        {
          "id": "s-besoins",
          "title": "Grandir et adapter ses besoins alimentaires",
          "notion": "Grandir et adapter ses besoins alimentaires",
          "objective": "Je relie alimentation, croissance et activité.",
          "lesson": "Les êtres vivants utilisent de la matière pour grandir et fonctionner. Les besoins alimentaires varient selon la croissance et l’activité physique, entre autres facteurs. Une donnée se lit dans son contexte : un nombre isolé ne permet pas de prescrire une alimentation à une personne. Les besoins de santé se discutent avec les adultes et les professionnels.",
          "example": "Dans une expérience sur de jeunes animaux, une croissance observée dépend notamment de l’alimentation ; on ne prive jamais un animal pour s’entraîner.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pourquoi les besoins alimentaires peuvent-ils varier ?",
              "options": [
                "La croissance et l’activité changent les besoins.",
                "Tous les corps ont exactement les mêmes besoins à tout moment.",
                "L’alimentation ne sert jamais à grandir."
              ],
              "answer": "La croissance et l’activité changent les besoins.",
              "hint": "Pense à l’organisme qui grandit et qui bouge.",
              "explanation": "Les aliments apportent de la matière et de l’énergie au fonctionnement du corps.",
              "id": "s-besoins-e1"
            },
            {
              "type": "choice",
              "prompt": "Une donnée alimentaire isolée permet-elle de décider seul d’un régime ?",
              "options": [
                "Non, elle doit être comprise dans un contexte et avec des adultes compétents.",
                "Oui, un seul nombre suffit toujours.",
                "Oui, si une publicité le dit."
              ],
              "answer": "Non, elle doit être comprise dans un contexte et avec des adultes compétents.",
              "hint": "Une information de santé demande prudence et contexte.",
              "explanation": "Le cours explique des principes généraux, sans prescription individuelle.",
              "id": "s-besoins-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-digestion",
          "title": "Le trajet des aliments",
          "notion": "Le trajet des aliments",
          "objective": "Je localise des transformations dans l’appareil digestif.",
          "lesson": "Dans la bouche, les dents mastiquent et la salive participe à la transformation des aliments. Le contenu passe par l’œsophage, l’estomac puis l’intestin grêle, où des nutriments passent dans le sang. Les résidus poursuivent leur trajet dans le gros intestin. Le changement de texture fait partie des transformations observables.",
          "example": "Un morceau de pain devient une pâte dans la bouche après mastication ; les transformations se poursuivent ensuite dans l’appareil digestif.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Range ces étapes simplifiées du trajet.",
              "options": [
                "Intestin grêle",
                "Bouche",
                "Estomac",
                "Œsophage"
              ],
              "answer": [
                "Bouche",
                "Œsophage",
                "Estomac",
                "Intestin grêle"
              ],
              "hint": "Pars de l’entrée des aliments.",
              "explanation": "La bouche précède l’œsophage, puis l’estomac et l’intestin grêle.",
              "id": "s-digestion-e1"
            },
            {
              "type": "choice",
              "prompt": "Quel rôle ont les dents ?",
              "options": [
                "Mastiquer et fragmenter les aliments.",
                "Pomper le sang.",
                "Produire les pensées."
              ],
              "answer": "Mastiquer et fragmenter les aliments.",
              "hint": "La mastication se déroule dans la bouche.",
              "explanation": "Les dents participent à la transformation mécanique des aliments.",
              "id": "s-digestion-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-sang",
          "title": "Le sang approvisionne les organes",
          "notion": "Le sang approvisionne les organes",
          "objective": "Je relie digestion et circulation sanguine.",
          "lesson": "Des nutriments issus de la digestion passent dans le sang au niveau de l’intestin grêle. Le sang circule et transporte des substances nécessaires au fonctionnement des organes. Le cœur participe à cette circulation en mettant le sang en mouvement. Les aliments entiers ne circulent pas dans les vaisseaux.",
          "example": "Un muscle utilise des substances transportées par le sang ; il ne reçoit pas des morceaux de pain.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Après la digestion, que transporte notamment le sang vers les organes ?",
              "options": [
                "Des nutriments.",
                "Des aliments entiers.",
                "Des assiettes miniatures."
              ],
              "answer": "Des nutriments.",
              "hint": "Les aliments ont été transformés.",
              "explanation": "Les nutriments peuvent être transportés ; un aliment entier ne passe pas dans les vaisseaux.",
              "id": "s-sang-e1"
            },
            {
              "type": "match",
              "prompt": "Associe l’organe à un rôle étudié.",
              "options": [
                "Dents",
                "Intestin grêle",
                "Cœur"
              ],
              "choices": [
                "Participer à la mise en mouvement du sang",
                "Mastiquer",
                "Permettre le passage de nutriments dans le sang"
              ],
              "answer": [
                "Mastiquer",
                "Permettre le passage de nutriments dans le sang",
                "Participer à la mise en mouvement du sang"
              ],
              "hint": "Relie chaque organe à son appareil et à sa fonction.",
              "explanation": "Les fonctions du corps sont liées sans être identiques.",
              "id": "s-sang-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-hygiene",
          "title": "Alimentation et gestes de santé",
          "notion": "Alimentation et gestes de santé",
          "objective": "Je reconnais des comportements favorables à la santé.",
          "lesson": "Une alimentation variée et adaptée aux besoins, l’eau comme boisson habituelle, l’hygiène des mains et des dents contribuent à la santé. On respecte les conditions de conservation et les dates indiquées avec un adulte. Aucun aliment ne remplace à lui seul une alimentation variée. On ne goûte jamais un produit expérimental ou inconnu sans accord.",
          "example": "Se laver les mains avant de préparer un repas limite la transmission de microbes ; ce geste ne remplace pas le respect du froid pour les aliments qui l’exigent.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel ensemble de gestes est cohérent ?",
              "options": [
                "Se laver les mains, varier les aliments et respecter leur conservation.",
                "Goûter tout produit inconnu.",
                "Remplacer tous les repas par un seul aliment."
              ],
              "answer": "Se laver les mains, varier les aliments et respecter leur conservation.",
              "hint": "La santé repose sur plusieurs habitudes complémentaires.",
              "explanation": "Les règles d’hygiène concernent la préparation, la consommation et la conservation.",
              "id": "s-hygiene-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, prépare la liste des précautions pour un goûter simple : lavage des mains, matériel propre, allergènes connus par l’adulte, conservation et nettoyage. Explique pourquoi chaque précaution est utile.",
              "criteria": [
                "Les règles d’hygiène sont justifiées.",
                "Les allergies et consignes de l’adulte sont respectées.",
                "Les déchets et le rangement sont pris en compte."
              ],
              "hint": "Ne prépare ni ne goûte un aliment sans l’accord de l’adulte.",
              "explanation": "L’activité pratique permet d’observer des gestes responsables sans noter le corps ni l’alimentation personnelle de l’enfant.",
              "id": "s-hygiene-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-aliments",
          "title": "Une transformation biologique des aliments",
          "notion": "Une transformation biologique des aliments",
          "objective": "Je reconnais le rôle de levures ou de ferments.",
          "lesson": "Des êtres vivants microscopiques peuvent participer à la fabrication d’aliments. Les levures utilisées en boulangerie produisent un gaz qui aide la pâte à lever. Des ferments participent à la fabrication du yaourt. Une recette exige des conditions précises et des règles d’hygiène. Produire un aliment est une activité organisée, de la matière première au produit. Protocole intégré d’observation, sans dégustation : l’adulte prépare une petite pâte de farine et d’eau tiède, ajoute de la levure boulangère alimentaire selon les indications de son emballage, marque le niveau et compare après repos à une pâte semblable sans levure. Le récipient reste ouvert ou couvert d’un linge, jamais fermé hermétiquement. On observe bulles et évolution du volume ; toute cuisson éventuelle relève de l’adulte.",
          "example": "Farine, eau, levure et autres ingrédients choisis dans une recette donnent une pâte ; la levure est à l’origine d’une transformation biologique.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Dans la fabrication du pain, la levure peut…",
              "options": [
                "produire un gaz qui aide la pâte à lever",
                "être remplacée par n’importe quel produit ménager",
                "faire disparaître toute la matière"
              ],
              "answer": "produire un gaz qui aide la pâte à lever",
              "hint": "Les bulles de gaz modifient la pâte.",
              "explanation": "La levure est un organisme microscopique utilisé pour une transformation alimentaire.",
              "id": "s-aliments-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise le protocole intégré pour observer une transformation de pâte par la levure, en respectant allergies, propreté et indications du sachet. Note ingrédients, étapes et observations. Ne goûte pas la pâte crue. Une fabrication complète de pain selon une recette familiale ou une rencontre professionnelle est un prolongement.",
              "criteria": [
                "Les étapes et le rôle de la levure sont expliqués.",
                "Les observations sont notées sans être inventées.",
                "Les consignes d’hygiène, d’allergies et de sécurité sont suivies."
              ],
              "hint": "Si le matériel manque, prépare le protocole et garde la manipulation en attente ; la lecture seule ne vaut pas réalisation.",
              "explanation": "La réalisation ou l’étude professionnelle relie vivant, transformation et production des aliments.",
              "id": "s-aliments-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-cycle-vie",
          "title": "Les étapes d’un cycle de vie",
          "notion": "Les étapes d’un cycle de vie",
          "objective": "Je décris un cycle chez une plante et un animal.",
          "lesson": "Les êtres vivants naissent, grandissent, peuvent se reproduire, vieillissent et meurent. Chez une plante à fleurs, on observe notamment graine, plantule et plante fleurie. Chez un animal, on peut observer œuf, jeune ou larve, puis adulte selon l’espèce. Un cycle relie les générations ; un individu ne revient pas à son propre début.",
          "example": "Un haricot issu d’une graine peut devenir une plante qui produira de nouvelles graines. Une chenille et un papillon correspondent à des formes d’un même cycle.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Place les formes d’une plante de haricot.",
              "options": [
                "Plante fleurie",
                "Graine",
                "Plantule"
              ],
              "answer": [
                "Graine",
                "Plantule",
                "Plante fleurie"
              ],
              "hint": "La jeune plante sort de la graine.",
              "explanation": "La graine peut germer, donner une plantule puis une plante fleurie.",
              "id": "s-cycle-vie-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, observe une culture de graines adaptées ou les données d’un élevage respectueux. Date et dessine plusieurs étapes ; décris ce qui change et ce qui permet une nouvelle génération.",
              "criteria": [
                "Les observations sont datées et répétées.",
                "Les formes et étapes sont correctement nommées.",
                "Le soin du vivant et les conditions d’observation sont respectés."
              ],
              "hint": "Ne prive pas les êtres vivants de conditions nécessaires ; une série de documents identifiés peut remplacer l’élevage.",
              "explanation": "Le suivi donne des preuves de transformation dans le temps.",
              "id": "s-cycle-vie-e2"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-puberte",
          "title": "Le corps change à la puberté",
          "notion": "Le corps change à la puberté",
          "objective": "Je connais des changements du corps et le vocabulaire scientifique sans juger les personnes.",
          "lesson": "La puberté est une période de changements du corps qui prépare la capacité biologique à se reproduire. La croissance, la pilosité, la transpiration ou la voix peuvent évoluer. Les ovaires et les testicules sont des organes reproducteurs ; les règles peuvent apparaître, et la production de spermatozoïdes débute. Les rythmes varient. Chacun a droit au respect, à l’intimité et à des réponses fiables de la part d’un adulte ou d’un professionnel de santé.",
          "example": "Deux enfants du même âge peuvent connaître des changements à des moments différents : on ne se moque pas et on ne demande pas de détails intimes.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle phrase est correcte ?",
              "options": [
                "Les changements de puberté ne surviennent pas au même rythme chez tout le monde.",
                "Tous les corps changent exactement le même jour.",
                "On doit se moquer d’une différence de rythme."
              ],
              "answer": "Les changements de puberté ne surviennent pas au même rythme chez tout le monde.",
              "hint": "La diversité des rythmes est normale.",
              "explanation": "Respect et intimité s’appliquent à tous les corps.",
              "id": "s-puberte-e1"
            },
            {
              "type": "choice",
              "prompt": "Quels mots désignent des organes reproducteurs ?",
              "options": [
                "Ovaires et testicules.",
                "Coudes et genoux.",
                "Poumons et dents."
              ],
              "answer": "Ovaires et testicules.",
              "hint": "Utilise le vocabulaire anatomique sans surnom ni jugement.",
              "explanation": "Les termes scientifiques permettent de poser des questions précises et respectueuses.",
              "id": "s-puberte-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte de confiance, relis les mots du cours et prépare une question générale sur la puberté. Tu peux choisir une question fictive et ne rien raconter de personnel.",
              "criteria": [
                "Les mots scientifiques sont compris et utilisés avec respect.",
                "Les différences de rythme et l’intimité sont reconnues.",
                "Une personne ressource fiable est identifiée."
              ],
              "hint": "Aucune photo, mesure du corps ou confidence intime n’est demandée.",
              "explanation": "L’accompagnement permet de vérifier la compréhension et d’orienter les questions de santé sans évaluer une situation personnelle.",
              "id": "s-puberte-e3"
            }
          ],
          "sourceRef": "S23 · Le vivant, sa diversité et les fonctions qui le caractérisent · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        }
      ]
    },
    {
      "id": "s-techniques",
      "title": "Les objets techniques au cœur de la société",
      "steps": [
        {
          "id": "s-objets",
          "title": "Des objets pour répondre à des besoins",
          "notion": "Des objets pour répondre à des besoins",
          "objective": "Je distingue objet naturel, objet technique et besoin.",
          "lesson": "Un objet technique est conçu ou transformé par les humains pour répondre à un besoin : se déplacer, se nourrir, se chauffer, communiquer… Un objet naturel n’a pas été fabriqué pour cet usage. Le besoin et l’objet ne sont pas la même chose : plusieurs objets peuvent répondre au même besoin.",
          "example": "Pour transporter de l’eau, on peut utiliser un seau ou une gourde. Un caillou trouvé dans la nature n’est pas fabriqué, mais peut être utilisé puis transformé.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’objet à un besoin principal.",
              "options": [
                "Vélo",
                "Gourde",
                "Manteau"
              ],
              "choices": [
                "Se protéger du froid",
                "Se déplacer",
                "Transporter de l’eau"
              ],
              "answer": [
                "Se déplacer",
                "Transporter de l’eau",
                "Se protéger du froid"
              ],
              "hint": "Pense au service rendu.",
              "explanation": "L’analyse commence par le besoin auquel l’objet répond.",
              "id": "s-objets-e1"
            },
            {
              "type": "choice",
              "prompt": "Quelle proposition exprime un besoin plutôt qu’un objet ?",
              "options": [
                "S’éclairer.",
                "Une lampe.",
                "Une ampoule."
              ],
              "answer": "S’éclairer.",
              "hint": "Le besoin exprime ce que l’on cherche à faire.",
              "explanation": "Une lampe est une réponse technique possible au besoin de s’éclairer.",
              "id": "s-objets-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-evolution",
          "title": "Les objets évoluent selon les contextes",
          "notion": "Les objets évoluent selon les contextes",
          "objective": "Je compare des solutions anciennes et actuelles.",
          "lesson": "Les besoins peuvent rester proches alors que les objets évoluent grâce aux techniques, aux ressources et aux usages. Une innovation apporte une nouveauté dans une solution. Comparer ne signifie pas dire que le plus récent est toujours préférable : on examine les avantages, les contraintes et le contexte.",
          "example": "Une locomotive à vapeur et un train électrique répondent au besoin de transporter. Ils n’utilisent pas les mêmes solutions techniques ni les mêmes infrastructures.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour comparer deux moyens de transport, il faut…",
              "options": [
                "étudier leurs usages, leurs contraintes et leur contexte",
                "choisir automatiquement le plus récent",
                "regarder seulement leur couleur"
              ],
              "answer": "étudier leurs usages, leurs contraintes et leur contexte",
              "hint": "Un objet répond à un besoin dans une situation précise.",
              "explanation": "Le choix dépend de critères argumentés, pas de l’âge de l’objet seul.",
              "id": "s-evolution-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, compare deux objets de la même famille, anciens ou actuels : éclairage, transport ou communication. Fais un tableau besoin, énergie, matériaux, avantages et limites.",
              "criteria": [
                "Le besoin commun est identifié.",
                "Au moins trois critères de comparaison sont utilisés.",
                "Les sources ou observations sont indiquées et la conclusion est nuancée."
              ],
              "hint": "Des photographies ou des objets non branchés suffisent ; ne démonte pas d’appareil.",
              "explanation": "La comparaison relie évolution technique et contexte historique, géographique ou social.",
              "id": "s-evolution-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-detournement",
          "title": "Réutiliser et réfléchir aux conséquences",
          "notion": "Réutiliser et réfléchir aux conséquences",
          "objective": "Je reconnais un détournement d’usage et questionne un choix technique.",
          "lesson": "Un détournement d’usage emploie un objet pour un besoin différent de celui prévu au départ. Cela peut éviter un déchet, mais il faut vérifier la sécurité, l’hygiène et les conséquences pour les autres et l’environnement. Une réflexion éthique se demande si une solution est responsable et respectueuse.",
          "example": "Un pot propre transformé en rangement pour crayons change d’usage. Un récipient ayant contenu un produit dangereux ne doit pas servir à conserver un aliment.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel exemple est un détournement d’usage prudent ?",
              "options": [
                "Un pot adapté et propre utilisé pour ranger des crayons.",
                "Une bouteille de produit ménager utilisée pour une boisson.",
                "Un câble branché utilisé comme jouet."
              ],
              "answer": "Un pot adapté et propre utilisé pour ranger des crayons.",
              "hint": "Réutiliser ne suffit pas : la sécurité compte.",
              "explanation": "Le nouvel usage doit être compatible avec les propriétés et l’histoire de l’objet.",
              "id": "s-detournement-e1"
            },
            {
              "type": "choice",
              "prompt": "Quelle question relève d’une réflexion éthique ?",
              "options": [
                "La solution est-elle sûre, accessible et respectueuse des ressources ?",
                "Peut-on ignorer ses effets sur les autres ?",
                "Sa couleur est-elle la seule qui existe ?"
              ],
              "answer": "La solution est-elle sûre, accessible et respectueuse des ressources ?",
              "hint": "Un choix technique a des effets sociaux et environnementaux.",
              "explanation": "On peut discuter les conséquences et justifier une solution responsable.",
              "id": "s-detournement-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-fonctions",
          "title": "Fonctions techniques, matériaux et sous-ensembles",
          "notion": "Fonctions techniques, matériaux et sous-ensembles",
          "objective": "Je relie une partie d’objet au rôle qu’elle assure.",
          "lesson": "Le besoin explique pourquoi l’objet existe. Une fonction technique décrit une action nécessaire ; une solution technologique indique comment elle est assurée. Un objet est constitué de parties ou sous-ensembles. Les matériaux sont choisis selon leurs propriétés et les contraintes.",
          "example": "Sur un vélo, « freiner » est une fonction ; un système de patins ou de disques est une solution. Le cadre, les roues et les freins sont des sous-ensembles.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe les éléments d’une lampe à un rôle.",
              "options": [
                "Interrupteur",
                "Source lumineuse",
                "Support"
              ],
              "choices": [
                "Maintenir la lampe",
                "Commander allumer/éteindre",
                "Éclairer"
              ],
              "answer": [
                "Commander allumer/éteindre",
                "Éclairer",
                "Maintenir la lampe"
              ],
              "hint": "Demande ce que fait chaque partie.",
              "explanation": "Les sous-ensembles assurent des fonctions complémentaires.",
              "id": "s-fonctions-e1"
            },
            {
              "type": "choice",
              "prompt": "Quelle proposition distingue correctement fonction et solution ?",
              "options": [
                "Fonction : freiner ; solution : freins à patins.",
                "Fonction : vélo rouge ; solution : se déplacer.",
                "Fonction : prix ; solution : demain."
              ],
              "answer": "Fonction : freiner ; solution : freins à patins.",
              "hint": "La fonction est une action ; la solution est un moyen concret.",
              "explanation": "Plusieurs solutions peuvent assurer la même fonction.",
              "id": "s-fonctions-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-croquis",
          "title": "Croquis et schéma n’ont pas le même rôle",
          "notion": "Croquis et schéma n’ont pas le même rôle",
          "objective": "Je représente l’apparence et le fonctionnement d’un objet.",
          "lesson": "Un croquis à main levée montre ce qu’on observe, avec des légendes. Un schéma simplifie pour expliquer le fonctionnement : on conserve les parties et les liens utiles. Les deux nécessitent un titre lisible et un vocabulaire précis. On ne démonte pas un objet pour lequel on n’a pas d’autorisation.",
          "example": "Le croquis d’une paire de ciseaux montre sa forme ; un schéma peut mettre en évidence les deux lames et leur rotation autour d’un axe.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel dessin sert surtout à expliquer des relations de fonctionnement ?",
              "options": [
                "Un schéma.",
                "Une décoration sans légende.",
                "Un dessin au hasard."
              ],
              "answer": "Un schéma.",
              "hint": "Le schéma sélectionne les informations utiles.",
              "explanation": "L’apparence détaillée n’est pas toujours nécessaire pour comprendre le fonctionnement.",
              "id": "s-croquis-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, observe un objet simple non dangereux, par exemple une pince à linge. Réalise un croquis légendé puis un schéma expliquant ce qui bouge et ce qui maintient.",
              "criteria": [
                "Les parties principales et matériaux observables sont identifiés.",
                "Le croquis et le schéma ont un titre et des légendes.",
                "Le fonctionnement est expliqué avec des liens compréhensibles."
              ],
              "hint": "Ne démonte pas un appareil électrique et n’utilise pas d’outil coupant.",
              "explanation": "L’adulte observe si les représentations aident à comprendre le fonctionnement, pas la beauté du dessin.",
              "id": "s-croquis-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-concevoir",
          "title": "Comparer des solutions sous contraintes",
          "notion": "Comparer des solutions sous contraintes",
          "objective": "Je choisis des matériaux et de l’énergie en justifiant mes critères.",
          "lesson": "Une contrainte est une condition à respecter : poids, solidité, imperméabilité, coût, sécurité ou ressources disponibles. Concevoir consiste à proposer des solutions, les comparer puis choisir avec des critères. Le choix de l’énergie dépend aussi du lieu et des ressources accessibles.",
          "example": "Pour une maquette d’abri, un toit doit résister à quelques gouttes d’eau sans être trop lourd. On peut comparer des matériaux sur ces deux critères.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Une contrainte pour un petit abri contre la pluie peut être…",
              "options": [
                "l’imperméabilité du toit",
                "le prénom du constructeur",
                "la couleur des chaussures"
              ],
              "answer": "l’imperméabilité du toit",
              "hint": "Cherche ce qui permet de répondre au besoin.",
              "explanation": "Le choix technique doit être lié à une condition utile et testable.",
              "id": "s-concevoir-e1"
            },
            {
              "type": "choice",
              "prompt": "Pour chauffer un refuge isolé, pourquoi faut-il étudier l’énergie disponible ?",
              "options": [
                "Les ressources et les possibilités de transport ou de raccordement varient.",
                "Toutes les sources sont accessibles partout de la même façon.",
                "La sécurité n’a aucune importance."
              ],
              "answer": "Les ressources et les possibilités de transport ou de raccordement varient.",
              "hint": "Un objet est conçu dans un contexte.",
              "explanation": "On compare ressources, sécurité, environnement et usages avant de retenir une solution.",
              "id": "s-concevoir-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, compare deux matériaux pour un petit toit de maquette : poids, rigidité et résistance à quelques gouttes d’eau. Note tes critères et choisis une solution sans dissimuler ses limites.",
              "criteria": [
                "Les contraintes sont explicites avant les essais.",
                "Les essais sont comparables et les observations notées.",
                "Le choix final est justifié par les résultats."
              ],
              "hint": "Utilise de petits morceaux sans bord coupant ; ne teste aucune installation réelle.",
              "explanation": "Les essais transforment une préférence en choix technique argumenté.",
              "id": "s-concevoir-e3"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-cycle-objet",
          "title": "Le cycle de vie d’un objet",
          "notion": "Le cycle de vie d’un objet",
          "objective": "Je relie les étapes d’un objet à leurs conséquences environnementales.",
          "lesson": "Le cycle de vie d’un objet comprend l’obtention des matières premières, la fabrication, les transports, l’utilisation et la fin d’usage. Réparer, réemployer et recycler peuvent modifier ce parcours. Un choix de conception agit sur plusieurs étapes : solidité, démontage, consommation d’énergie et traitement des matériaux.",
          "example": "Une gourde durable peut éviter de nombreux emballages si elle est utilisée longtemps ; sa fabrication et son entretien ont aussi des effets.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Range le parcours simplifié.",
              "options": [
                "Utilisation",
                "Fabrication",
                "Matières premières",
                "Fin d’usage et traitement"
              ],
              "answer": [
                "Matières premières",
                "Fabrication",
                "Utilisation",
                "Fin d’usage et traitement"
              ],
              "hint": "L’objet doit être fabriqué avant d’être utilisé.",
              "explanation": "Les transports peuvent intervenir entre plusieurs étapes.",
              "id": "s-cycle-objet-e1"
            },
            {
              "type": "choice",
              "prompt": "Quel choix facilite souvent la prolongation de l’usage ?",
              "options": [
                "Un objet réparable avec des pièces remplaçables.",
                "Un objet impossible à réparer dès une petite panne.",
                "Un objet jeté sans examen."
              ],
              "answer": "Un objet réparable avec des pièces remplaçables.",
              "hint": "Pense à la durée de vie.",
              "explanation": "Réparer peut éviter une fabrication de remplacement, selon la situation et la sécurité.",
              "id": "s-cycle-objet-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-maquette",
          "title": "Réaliser un projet technique en équipe",
          "notion": "Réaliser un projet technique en équipe",
          "objective": "Je planifie, construis et teste une maquette.",
          "lesson": "Un projet part d’un besoin, précise les contraintes, imagine des solutions puis prépare la réalisation. Dans une équipe, on répartit et planifie les tâches, on communique et on respecte les consignes. Le test final vérifie si la maquette répond au problème. Une difficulté sert à améliorer la solution.",
          "example": "Défi : fabriquer un pont de papier entre deux supports, capable de porter un petit objet léger. On compare les plis et on teste sans mettre de personne en danger.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Range les étapes du projet.",
              "options": [
                "Tester et améliorer",
                "Définir le besoin et les contraintes",
                "Préparer puis fabriquer",
                "Proposer et comparer des idées"
              ],
              "answer": [
                "Définir le besoin et les contraintes",
                "Proposer et comparer des idées",
                "Préparer puis fabriquer",
                "Tester et améliorer"
              ],
              "hint": "On teste une solution après l’avoir préparée et réalisée.",
              "explanation": "Le projet n’est pas seulement une fabrication : il comprend réflexion et vérification.",
              "id": "s-maquette-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte et si possible un camarade, relève le défi du pont de papier. Note le besoin, une portée choisie, une petite charge sûre, un croquis, les rôles, les essais puis une amélioration.",
              "criteria": [
                "Le besoin, les contraintes et la planification sont écrits.",
                "Les rôles sont répartis et chacun participe.",
                "Une maquette est réalisée et testée sans danger.",
                "Le bilan explique un choix et une amélioration possible."
              ],
              "hint": "Utilise de petites charges non cassantes et des supports stables ; aucun essai avec une personne.",
              "explanation": "La grille valide une observation de la démarche, pas la réussite supposée d’une image de pont.",
              "id": "s-maquette-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-capteurs",
          "title": "Capteurs, commande et actionneurs",
          "notion": "Capteurs, commande et actionneurs",
          "objective": "Je repère la chaîne d’information et la chaîne d’action.",
          "lesson": "Un capteur recueille une information, comme la luminosité ou la présence d’un obstacle. Une commande utilise cette information et des instructions. Un actionneur produit une action, par exemple un moteur qui fait tourner une roue ou une lampe qui éclaire. On distingue information reçue et action effectuée.",
          "example": "Pour un éclairage automatique, un capteur détecte l’obscurité, un programme décide puis une lampe est allumée.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’élément à son rôle.",
              "options": [
                "Détecteur de présence",
                "Programme de commande",
                "Moteur"
              ],
              "choices": [
                "Effectuer une action mécanique",
                "Recueillir une information",
                "Traiter selon des instructions"
              ],
              "answer": [
                "Recueillir une information",
                "Traiter selon des instructions",
                "Effectuer une action mécanique"
              ],
              "hint": "Le capteur détecte, la commande décide, l’actionneur agit.",
              "explanation": "Une chaîne relie ces fonctions sans les confondre.",
              "id": "s-capteurs-e1"
            },
            {
              "type": "choice",
              "prompt": "Dans un robot, le moteur des roues est principalement…",
              "options": [
                "un actionneur",
                "un capteur de lumière",
                "une consigne écrite"
              ],
              "answer": "un actionneur",
              "hint": "Il transforme une commande en mouvement.",
              "explanation": "Le moteur produit une action ; un capteur détecte une information.",
              "id": "s-capteurs-e2"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-algorithme",
          "title": "Lire, écrire et corriger un programme",
          "notion": "Lire, écrire et corriger un programme",
          "objective": "Je prépare une suite de consignes et vérifie son effet.",
          "lesson": "Un algorithme est une suite organisée d’instructions pour accomplir une tâche. Un programme peut contenir une répétition ou une condition : « si un obstacle est détecté, alors s’arrêter ». On teste le résultat attendu, on repère une erreur puis on corrige. Un ordre précis est nécessaire.",
          "example": "Sur une grille fictive, un robot orienté vers la droite avance de deux cases puis tourne à gauche : il finit orienté vers le haut, après son déplacement.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Pour atteindre la case de droite puis s’arrêter, remets ces blocs simples dans l’ordre.",
              "options": [
                "S’arrêter",
                "Démarrer face à la droite",
                "Avancer d’une case"
              ],
              "answer": [
                "Démarrer face à la droite",
                "Avancer d’une case",
                "S’arrêter"
              ],
              "hint": "La direction doit être connue avant le déplacement.",
              "explanation": "Les consignes sont exécutées dans l’ordre.",
              "id": "s-algorithme-e1"
            },
            {
              "type": "choice",
              "prompt": "Le programme dit : « si obstacle détecté, avancer ». Pour éviter la collision, quelle correction convient ?",
              "options": [
                "Si obstacle détecté, s’arrêter.",
                "Supprimer tous les tests et accélérer.",
                "Ignorer le capteur."
              ],
              "answer": "Si obstacle détecté, s’arrêter.",
              "hint": "Compare le comportement attendu et la consigne.",
              "explanation": "La condition doit déclencher une action cohérente avec la sécurité.",
              "id": "s-algorithme-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, dessine une grille avec départ, arrivée et obstacle. Écris un programme par blocs sur papier ou dans un outil local disponible ; simule-le avec un pion, corrige-le et explique la correction. Un robot réel n’est pas obligatoire pour la préparation.",
              "criteria": [
                "Les instructions et conditions sont compréhensibles.",
                "La simulation suit exactement le programme.",
                "Une erreur ou un choix est expliqué, puis testé de nouveau."
              ],
              "hint": "Le pion reste sur la table ; aucun objet motorisé n’est envoyé vers une personne.",
              "explanation": "La simulation fait travailler le raisonnement algorithmique. La programmation d’un objet réel reste une observation distincte si elle est réalisée.",
              "id": "s-algorithme-e3"
            }
          ],
          "sourceRef": "S23 · Les objets techniques au cœur de la société · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        }
      ]
    },
    {
      "id": "s-terre",
      "title": "La Terre, une planète peuplée par des êtres vivants",
      "steps": [
        {
          "id": "s-solaire",
          "title": "Situer la Terre dans le système solaire",
          "notion": "Situer la Terre dans le système solaire",
          "objective": "Je distingue une étoile, une planète et un satellite.",
          "lesson": "Le Soleil est l’étoile du système solaire. Huit planètes tournent autour de lui ; la Terre est la troisième à partir du Soleil. La Lune est un satellite naturel de la Terre. Un modèle permet de situer les astres mais leurs tailles et distances sont souvent simplifiées : il faut le préciser.",
          "example": "Ordre des planètes depuis le Soleil : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Quelle est la position de la Terre à partir du Soleil ? Nombre seul.",
              "answer": 3,
              "hint": "Mercure est première, Vénus deuxième.",
              "explanation": "La Terre est la troisième planète depuis le Soleil.",
              "id": "s-solaire-e1"
            },
            {
              "type": "match",
              "prompt": "Associe l’astre à sa catégorie.",
              "options": [
                "Soleil",
                "Terre",
                "Lune"
              ],
              "choices": [
                "Satellite naturel de la Terre",
                "Étoile",
                "Planète"
              ],
              "answer": [
                "Étoile",
                "Planète",
                "Satellite naturel de la Terre"
              ],
              "hint": "Le Soleil émet de la lumière ; la Terre est une planète.",
              "explanation": "La Lune est liée à la Terre comme satellite naturel, tout en appartenant au système solaire.",
              "id": "s-solaire-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-meteo",
          "title": "Météorologie et climat",
          "notion": "Météorologie et climat",
          "objective": "Je distingue une situation de courte durée et des tendances longues.",
          "lesson": "La météorologie décrit et prévoit des conditions atmosphériques à court terme dans un lieu : température, pluie, vent… Le climat décrit des caractéristiques étudiées sur de longues périodes dans une région. Une journée froide ne permet pas de conclure à elle seule sur l’évolution du climat.",
          "example": "Dire « il a plu ce matin dans notre cour » est une observation météo ; comparer des données de nombreuses années relève d’une étude du climat.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Classe ces études.",
              "options": [
                "La pluie de ce matin",
                "Le vent prévu demain",
                "Des températures comparées sur de nombreuses années"
              ],
              "choices": [
                "Météorologie",
                "Climat"
              ],
              "answer": [
                "Météorologie",
                "Météorologie",
                "Climat"
              ],
              "hint": "Observe les durées étudiées.",
              "explanation": "La différence d’échelle temporelle est essentielle ; plusieurs questions peuvent relever de la même catégorie.",
              "id": "s-meteo-e1"
            },
            {
              "type": "choice",
              "prompt": "Une journée froide suffit-elle à décrire un changement climatique ?",
              "options": [
                "Non, il faut des données sur une longue durée.",
                "Oui, une seule mesure décrit tout le climat.",
                "Oui, si elle est prise le matin."
              ],
              "answer": "Non, il faut des données sur une longue durée.",
              "hint": "Un événement bref ne remplace pas une tendance.",
              "explanation": "On évite de confondre météo locale et climat.",
              "id": "s-meteo-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-mesures",
          "title": "Mesurer la météo et lire les données",
          "notion": "Mesurer la météo et lire les données",
          "objective": "Je choisis un instrument et interprète un tableau de mesures.",
          "lesson": "Un thermomètre mesure la température, un pluviomètre la quantité de pluie et un anémomètre la vitesse du vent. Pour comparer, on suit un protocole : lieu, horaire, unité et conditions de mesure. Les données doivent être datées. Un tableau permet de repérer une évolution sans inventer ce qu’on n’a pas mesuré.",
          "example": "Dans le tableau fictif, les températures à la même heure sont 12 °C, 15 °C et 13 °C : le deuxième jour est le plus chaud de cette série seulement.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe la grandeur à l’instrument.",
              "options": [
                "Température",
                "Quantité de pluie",
                "Vitesse du vent"
              ],
              "choices": [
                "Pluviomètre",
                "Anémomètre",
                "Thermomètre"
              ],
              "answer": [
                "Thermomètre",
                "Pluviomètre",
                "Anémomètre"
              ],
              "hint": "Le nom de chaque appareil renvoie à la grandeur mesurée.",
              "explanation": "Les instruments et unités adaptés rendent les données comparables.",
              "id": "s-mesures-e1"
            },
            {
              "type": "number",
              "prompt": "Dans la série 12 °C, 15 °C, 13 °C, quel est l’écart entre le maximum et le minimum, en degrés ? Nombre seul.",
              "answer": 3,
              "hint": "Soustrais 12 de 15.",
              "explanation": "15 − 12 = 3 °C.",
              "id": "s-mesures-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, relève la température dans un lieu sûr selon un protocole comparable pendant plusieurs jours. Note date, heure, unité et conditions, puis construis un tableau et une conclusion limitée à tes données.",
              "criteria": [
                "Le protocole et les dates sont notés.",
                "Les mesures et unités sont lisibles.",
                "La conclusion ne confond pas la série locale avec une étude du climat."
              ],
              "hint": "L’adulte choisit un emplacement sûr ; n’installe rien en hauteur ni près de la route.",
              "explanation": "La mesure réelle est accompagnée et peut être reprise si les conditions changent.",
              "id": "s-mesures-e3"
            }
          ],
          "visual": {
            "type": "table",
            "caption": "Série pédagogique fictive : même heure et même lieu",
            "headers": [
              "Jour",
              "Température"
            ],
            "rows": [
              [
                "Jour 1",
                "12 °C"
              ],
              [
                "Jour 2",
                "15 °C"
              ],
              [
                "Jour 3",
                "13 °C"
              ]
            ]
          },
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-terre-active",
          "title": "Une planète active et des ressources",
          "notion": "Une planète active et des ressources",
          "objective": "Je reconnais des manifestations d’activité interne et externe.",
          "lesson": "Séismes et volcans sont des indices de l’activité interne de la Terre. Vents, courants océaniques et érosion participent à son activité externe. Les humains exploitent des ressources liées à cette planète active : roches pour construire, chaleur du sous-sol pour la géothermie… Une ressource doit être étudiée avec ses contraintes et ses effets.",
          "example": "La géothermie utilise la chaleur du sous-sol ; une carrière fournit des roches, mais son exploitation transforme aussi le paysage.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’exemple à l’idée.",
              "options": [
                "Séisme",
                "Vent",
                "Géothermie"
              ],
              "choices": [
                "Utilisation de la chaleur du sous-sol",
                "Manifestation de l’activité interne",
                "Mouvement de l’atmosphère"
              ],
              "answer": [
                "Manifestation de l’activité interne",
                "Mouvement de l’atmosphère",
                "Utilisation de la chaleur du sous-sol"
              ],
              "hint": "Distingue un phénomène et l’usage d’une ressource.",
              "explanation": "L’activité de la planète peut produire des phénomènes et rendre certaines ressources disponibles.",
              "id": "s-terre-active-e1"
            },
            {
              "type": "choice",
              "prompt": "Exploiter une ressource naturelle nécessite…",
              "options": [
                "d’étudier aussi les effets et les limites de l’exploitation",
                "d’ignorer le milieu et les habitants",
                "de supposer qu’elle est toujours infinie"
              ],
              "answer": "d’étudier aussi les effets et les limites de l’exploitation",
              "hint": "Une ressource n’est pas seulement un matériau utile.",
              "explanation": "Un choix raisonné tient compte des besoins et des conséquences.",
              "id": "s-terre-active-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-risque",
          "title": "Comprendre un risque naturel et sa prévention",
          "notion": "Comprendre un risque naturel et sa prévention",
          "objective": "Je distingue phénomène naturel, exposition et protection.",
          "lesson": "Un phénomène naturel peut devenir un risque pour des personnes ou des biens exposés. La prévention consiste à connaître les dangers, adapter les aménagements et préparer les bons comportements. On suit les consignes officielles et celles de l’école ou de l’adulte ; une activité pédagogique ne remplace pas un plan de sécurité.",
          "example": "Une forte pluie peut provoquer une inondation. Connaître les zones exposées et ne pas entrer dans une voie inondée contribue à la prévention.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Face à une route inondée, que faut-il faire ?",
              "options": [
                "Ne pas s’y engager et suivre les consignes des autorités et de l’adulte.",
                "Traverser pour mesurer la profondeur.",
                "Aller jouer dans l’eau."
              ],
              "answer": "Ne pas s’y engager et suivre les consignes des autorités et de l’adulte.",
              "hint": "L’eau peut cacher un danger et être en mouvement.",
              "explanation": "La sécurité passe avant une observation ou une mesure.",
              "id": "s-risque-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise la fiche intégrée « inondation » : indique phénomène, personnes ou biens exposés et deux précautions. Explique pourquoi il faut suivre les consignes locales en situation réelle. La consultation du plan de l’école ou d’une source locale est un prolongement recommandé, sans simulation dangereuse.",
              "criteria": [
                "Le phénomène et les conséquences possibles sont distingués.",
                "Deux précautions du dossier sont expliquées.",
                "La différence entre cours général et consignes réelles locales est comprise."
              ],
              "hint": "Ne simule jamais une situation réelle de danger ; demande à l’adulte de choisir les informations.",
              "explanation": "La prévention est liée au contexte local et aux responsables de sécurité.",
              "id": "s-risque-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé",
          "visual": {
            "type": "table",
            "caption": "Fiche intégrée : risque d’inondation, principes généraux de prévention",
            "headers": [
              "Question",
              "Information du dossier"
            ],
            "rows": [
              [
                "Phénomène",
                "Une forte montée des eaux peut menacer personnes et biens dans une zone exposée."
              ],
              [
                "Prévention",
                "Connaître les lieux exposés, écouter les consignes des autorités, préparer les règles de l’école ou de la famille."
              ],
              [
                "Comportement",
                "Ne pas entrer dans une voie inondée ; rester avec l’adulte et appliquer les consignes reçues."
              ],
              [
                "Limite",
                "Cette fiche ne remplace ni une alerte réelle ni le plan local de sécurité."
              ]
            ]
          }
        },
        {
          "id": "s-ecosysteme",
          "title": "Décrire un écosystème",
          "notion": "Décrire un écosystème",
          "objective": "Je relie un milieu, des êtres vivants et leurs interactions.",
          "lesson": "Un écosystème comprend un milieu de vie, les êtres vivants qui l’occupent et les interactions entre eux et avec ce milieu. Température, lumière, eau et sol sont des éléments physiques importants. Une mare n’est donc pas seulement une liste d’animaux : elle inclut aussi eau, plantes, lumière et relations.",
          "example": "Dans une mare, des plantes offrent des abris ; des animaux se nourrissent et utilisent l’eau et l’oxygène selon leurs besoins.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle description présente le mieux un écosystème ?",
              "options": [
                "Un milieu, des êtres vivants et leurs interactions.",
                "Une liste d’animaux sans milieu.",
                "Un seul objet fabriqué."
              ],
              "answer": "Un milieu, des êtres vivants et leurs interactions.",
              "hint": "Les liens comptent autant que les éléments.",
              "explanation": "L’écosystème est un ensemble organisé et dynamique.",
              "id": "s-ecosysteme-e1"
            },
            {
              "type": "match",
              "prompt": "Associe chaque élément à sa nature dans l’exemple.",
              "options": [
                "Température de l’eau",
                "Grenouille",
                "Plante aquatique"
              ],
              "choices": [
                "Élément physique du milieu",
                "Être vivant"
              ],
              "answer": [
                "Élément physique du milieu",
                "Être vivant",
                "Être vivant"
              ],
              "hint": "Les éléments physiques ne sont pas eux-mêmes des organismes.",
              "explanation": "Les conditions du milieu et le peuplement doivent être décrits ensemble.",
              "id": "s-ecosysteme-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-relations",
          "title": "Coopération, prédation et autres liens",
          "notion": "Coopération, prédation et autres liens",
          "objective": "Je décris plusieurs relations entre espèces.",
          "lesson": "Une relation alimentaire relie un organisme à ce qu’il mange. La prédation correspond à la capture d’une proie par un prédateur. D’autres relations peuvent apporter un bénéfice aux partenaires, comme certaines coopérations. Une même espèce participe à plusieurs relations ; on ne résume pas le vivant à une compétition permanente.",
          "example": "Une mésange peut manger des chenilles ; des insectes peuvent transporter du pollen en visitant des fleurs et y trouver de la nourriture.",
          "exercises": [
            {
              "type": "match",
              "prompt": "Associe l’exemple à la relation décrite.",
              "options": [
                "Un oiseau capture une chenille",
                "Un insecte visite une fleur et transporte du pollen"
              ],
              "choices": [
                "Interaction pouvant bénéficier aux deux partenaires",
                "Prédation"
              ],
              "answer": [
                "Prédation",
                "Interaction pouvant bénéficier aux deux partenaires"
              ],
              "hint": "Demande ce que chaque partenaire fait et reçoit.",
              "explanation": "Les relations écologiques ont des formes variées.",
              "id": "s-relations-e1"
            },
            {
              "type": "choice",
              "prompt": "Une espèce peut-elle participer à plusieurs relations ?",
              "options": [
                "Oui, elle a des liens alimentaires et d’autres interactions.",
                "Non, elle n’a qu’un seul lien dans sa vie.",
                "Non, les êtres vivants restent isolés."
              ],
              "answer": "Oui, elle a des liens alimentaires et d’autres interactions.",
              "hint": "Un écosystème fonctionne comme un réseau de liens.",
              "explanation": "Décrire plusieurs relations évite une vision trop simplifiée du milieu.",
              "id": "s-relations-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-repartition",
          "title": "Pourquoi les êtres vivants ne se répartissent-ils pas partout pareil ?",
          "notion": "Pourquoi les êtres vivants ne se répartissent-ils pas partout pareil ?",
          "objective": "Je relie des observations aux conditions physiques du milieu.",
          "lesson": "On peut comparer deux milieux proches en mesurant des facteurs physiques : humidité, température ou lumière. Les différences de peuplement peuvent être liées à ces conditions, mais une observation isolée ne prouve pas une cause unique. On note les mêmes informations et on répète si possible.",
          "example": "Des cloportes sont souvent observés dans des endroits humides et abrités ; on les observe sans les exposer volontairement à des conditions dangereuses.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour comparer deux zones du jardin, quelle démarche convient ?",
              "options": [
                "Observer selon le même protocole et relever lumière et humidité.",
                "Changer les règles de comptage entre les zones.",
                "Déplacer tous les animaux pour les forcer à choisir."
              ],
              "answer": "Observer selon le même protocole et relever lumière et humidité.",
              "hint": "Une comparaison exige des informations comparables.",
              "explanation": "On respecte le vivant et on cherche des indices de relations avec le milieu.",
              "id": "s-repartition-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, observe deux petits espaces proches autorisés, l’un ombragé et l’autre plus lumineux. Note conditions et êtres vivants visibles selon le même temps d’observation. Compare sans arracher ni capturer.",
              "criteria": [
                "Le protocole est comparable dans les deux espaces.",
                "Des facteurs physiques et observations du vivant sont notés.",
                "La conclusion indique une relation possible sans inventer une cause certaine."
              ],
              "hint": "Reste à distance des espèces inconnues et respecte les lieux.",
              "explanation": "Une enquête écologique s’appuie sur des données et une interprétation prudente.",
              "id": "s-repartition-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-reseaux-alimentaires",
          "title": "Chaînes et réseaux alimentaires",
          "notion": "Chaînes et réseaux alimentaires",
          "objective": "Je représente qui est mangé par qui.",
          "lesson": "Les animaux produisent leur matière en consommant de la nourriture issue d’autres êtres vivants. Les végétaux occupent une place particulière à la base de nombreux réseaux alimentaires. Dans notre convention, la flèche va de l’être vivant mangé vers celui qui le mange : elle signifie « est mangé par ». Plusieurs chaînes reliées forment un réseau.",
          "example": "Herbe → sauterelle → grenouille : la sauterelle mange l’herbe et la grenouille mange la sauterelle. D’autres liens peuvent se connecter à cette chaîne.",
          "exercises": [
            {
              "type": "order",
              "prompt": "Construis la chaîne avec une flèche signifiant « est mangé par ».",
              "options": [
                "Grenouille",
                "Herbe",
                "Sauterelle"
              ],
              "answer": [
                "Herbe",
                "Sauterelle",
                "Grenouille"
              ],
              "hint": "Pars du végétal consommé.",
              "explanation": "Herbe → sauterelle → grenouille respecte la convention annoncée.",
              "id": "s-reseaux-alimentaires-e1"
            },
            {
              "type": "choice",
              "prompt": "Un réseau alimentaire est…",
              "options": [
                "un ensemble de chaînes reliées",
                "une seule liste sans relations",
                "un filet fabriqué par tous les animaux"
              ],
              "answer": "un ensemble de chaînes reliées",
              "hint": "Un être vivant peut avoir plusieurs liens alimentaires.",
              "explanation": "La représentation en réseau montre l’interdépendance.",
              "id": "s-reseaux-alimentaires-e2"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, utilise le dossier intégré pour dessiner les chaînes « herbe → sauterelle → grenouille » et « plante à feuilles → chenille → mésange → épervier ». Relie aussi la sauterelle à la mésange selon la dernière ligne. Indique le sens des flèches et explique la place des végétaux.",
              "criteria": [
                "Les relations respectent le dossier et les deux chaînes sont reliées.",
                "Les flèches signifient « est mangé par ».",
                "La place des végétaux à la base des chaînes est expliquée."
              ],
              "hint": "La mésange peut manger chenilles et sauterelles dans le modèle ; elle relie donc des chaînes. N’ajoute pas de relation non fournie.",
              "explanation": "La représentation relie données, langage graphique et compréhension des besoins.",
              "id": "s-reseaux-alimentaires-e3"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé",
          "visual": {
            "type": "table",
            "caption": "Petit dossier de relations à utiliser : simplification pédagogique d’un milieu terrestre",
            "headers": [
              "Être vivant",
              "Aliment dans le modèle"
            ],
            "rows": [
              [
                "Sauterelle",
                "Herbe"
              ],
              [
                "Chenille",
                "Feuilles de plante"
              ],
              [
                "Grenouille",
                "Sauterelle"
              ],
              [
                "Mésange",
                "Chenille"
              ],
              [
                "Épervier",
                "Mésange"
              ],
              [
                "Mésange",
                "Sauterelle également, dans ce modèle"
              ]
            ]
          }
        },
        {
          "id": "s-plantes",
          "title": "Expérimenter les besoins des végétaux",
          "notion": "Expérimenter les besoins des végétaux",
          "objective": "Je teste un besoin de la plante avec une comparaison respectueuse.",
          "lesson": "Des plantes vertes ont notamment besoin d’eau, de lumière et de conditions adaptées pour se développer. Pour tester un facteur, on garde les autres conditions aussi proches que possible. Une observation doit durer assez longtemps pour montrer une évolution ; on évite toute souffrance inutile et on remet les plantes dans de bonnes conditions après l’essai.",
          "example": "Deux jeunes plantes comparables peuvent être observées avec des quantités d’eau différentes choisies par l’adulte, en gardant lumière et température comparables.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour étudier un besoin en eau, on compare des plantes…",
              "options": [
                "semblables avec une seule différence principale : l’apport d’eau",
                "d’espèces différentes dans des lieux et températures différents",
                "sans noter les conditions"
              ],
              "answer": "semblables avec une seule différence principale : l’apport d’eau",
              "hint": "Isole le facteur étudié.",
              "explanation": "Un protocole contrôlé permet de mieux interpréter l’effet observé.",
              "id": "s-plantes-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, prépare un protocole court pour étudier un besoin de jeunes plantes adaptées. Note hypothèse, variable testée, conditions communes et observations datées ; rends aux plantes de bonnes conditions dès que nécessaire.",
              "criteria": [
                "Le facteur testé et les conditions communes sont explicités.",
                "Les observations sont répétées et datées.",
                "La conclusion s’appuie sur les résultats et le soin du vivant est respecté."
              ],
              "hint": "L’adulte fixe la durée et les conditions ; on peut exploiter des données expérimentales identifiées plutôt que priver une plante.",
              "explanation": "La démarche compte davantage qu’un résultat attendu recopié.",
              "id": "s-plantes-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-actions",
          "title": "Actions humaines : effets positifs et négatifs",
          "notion": "Actions humaines : effets positifs et négatifs",
          "objective": "Je relie une action à ses effets sur le milieu proche.",
          "lesson": "Les humains modifient les milieux : détruire une haie peut supprimer des abris, tandis que préserver des zones végétalisées peut favoriser certains êtres vivants. Les effets dépendent du contexte et du temps. On compare des observations et on distingue une intention d’un résultat réellement mesuré.",
          "example": "Une plantation ne devient pas immédiatement un écosystème riche ; il faut choisir des espèces adaptées, entretenir et observer les effets.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Pour savoir si une action favorise la biodiversité, il faut…",
              "options": [
                "observer ses effets dans le temps avec des critères",
                "se fier uniquement à son nom",
                "affirmer la réussite sans regarder le milieu"
              ],
              "answer": "observer ses effets dans le temps avec des critères",
              "hint": "Une bonne intention doit être confrontée aux résultats.",
              "explanation": "L’évaluation s’appuie sur des observations adaptées et répétées.",
              "id": "s-actions-e1"
            },
            {
              "type": "match",
              "prompt": "Associe l’action à un effet possible à vérifier.",
              "options": [
                "Supprimer une haie",
                "Préserver une zone végétalisée",
                "Jeter un déchet dans un cours d’eau"
              ],
              "choices": [
                "Dégrader le milieu aquatique",
                "Réduire certains abris",
                "Maintenir des habitats"
              ],
              "answer": [
                "Réduire certains abris",
                "Maintenir des habitats",
                "Dégrader le milieu aquatique"
              ],
              "hint": "Relie l’action aux éléments du milieu concernés.",
              "explanation": "On étudie les effets sans présenter chaque conséquence comme identique dans tous les contextes.",
              "id": "s-actions-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        },
        {
          "id": "s-projet",
          "title": "Agir et vérifier pour le développement durable",
          "notion": "Agir et vérifier pour le développement durable",
          "objective": "Je participe à un projet et en mesure un résultat.",
          "lesson": "Un projet responsable part d’un constat : gaspillage, eau, énergie, déchets, santé ou biodiversité. On choisit un objectif réaliste, on partage les tâches et on suit un indicateur. Une conclusion honnête précise ce qui a changé, ce qui n’a pas été mesuré et ce qui pourrait être amélioré.",
          "example": "Pour réduire le papier jeté, un groupe compte les feuilles utilisables récupérées pendant deux périodes comparables et explique les différences.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel indicateur permet d’évaluer une action de réduction du papier jeté ?",
              "options": [
                "Le nombre de feuilles jetées dans des périodes comparables.",
                "La couleur préférée du groupe.",
                "Le nombre de compliments reçus."
              ],
              "answer": "Le nombre de feuilles jetées dans des périodes comparables.",
              "hint": "L’indicateur doit être lié à l’objectif.",
              "explanation": "Des données comparables permettent de discuter les résultats.",
              "id": "s-projet-e1"
            },
            {
              "type": "guided",
              "prompt": "Avec un adulte, choisis un petit projet sur l’eau, l’énergie, les déchets, l’alimentation ou la biodiversité. Note le constat, l’objectif, les rôles et un indicateur ; réalise l’action sans danger puis fais un bilan appuyé sur des données.",
              "criteria": [
                "Le constat, l’objectif et l’indicateur sont reliés.",
                "Les tâches sont réparties et l’action réalisée.",
                "Le bilan utilise des données et reconnaît ses limites.",
                "Les choix de santé et de sécurité sont respectés."
              ],
              "hint": "Ne touche pas aux installations électriques, à des déchets dangereux ni à des organismes inconnus.",
              "explanation": "Participer et évaluer une action permet d’exercer des compétences scientifiques, citoyennes et de coopération.",
              "id": "s-projet-e2"
            }
          ],
          "sourceRef": "S23 · La Terre, une planète peuplée par des êtres vivants · attendus de fin de cours moyen",
          "sourceStatus": "Fin de cours moyen — séquençage CM2 proposé"
        }
      ]
    }
  ]
});
