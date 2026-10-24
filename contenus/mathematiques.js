/* Contenu original ; objectifs CM2 vérifiés dans le programme 2025 applicable en 2026. */
window.CM2_SUBJECTS.push({
  "id": "mathematiques",
  "title": "Mathématiques",
  "icon": "🔢",
  "reference": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027.",
  "chapters": [
    {
      "id": "mathematiques-fractions",
      "title": "Fractions : partager, repérer et calculer",
      "steps": [
        {
          "id": "mathematiques-fractions-sens",
          "title": "Des parts égales aux nombres",
          "notion": "Des parts égales aux nombres",
          "objective": "Je lis une fraction et je reconnais son unité.",
          "lesson": "Une fraction indique des parts égales d’une unité. Le dénominateur dit en combien de parts égales on partage ; le numérateur dit combien de parts on prend. Toujours repérer l’unité avant de comparer.",
          "example": "3/4 d’un gâteau : le gâteau entier est partagé en quatre parts égales, trois sont prises.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Dans 5/8, quel nombre indique le nombre de parts égales de l’unité ?",
              "options": [
                "5",
                "8",
                "13"
              ],
              "answer": "8",
              "hint": "Le dénominateur est sous la barre.",
              "explanation": "8 est le dénominateur ; 5 est le nombre de parts prises.",
              "id": "mathematiques-fractions-sens-ex1"
            },
            {
              "type": "number",
              "prompt": "Une bande unité est partagée en 6 parts égales. Tu prends 4 parts. Écris la fraction prise.",
              "answer": "4/6",
              "hint": "Numérateur : parts prises ; dénominateur : parts de l’unité.",
              "explanation": "La fraction est 4/6, équivalente à 2/3.",
              "id": "mathematiques-fractions-sens-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-droite",
          "title": "Repérer une fraction sur une droite",
          "notion": "Repérer une fraction sur une droite",
          "objective": "Je place et lis une fraction sur une demi-droite graduée.",
          "lesson": "Entre 0 et 1, partage l’unité en autant d’intervalles égaux que le dénominateur. Compte les intervalles depuis 0. Les fractions peuvent dépasser 1.",
          "example": "Sur une droite graduée en quarts, les points sont 0 ; 1/4 ; 2/4 ; 3/4 ; 4/4=1 ; 5/4.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Sur une droite graduée en cinquièmes, quelle fraction repère le troisième trait après 0 ?",
              "answer": "3/5",
              "hint": "Chaque intervalle vaut 1/5.",
              "explanation": "Trois intervalles de 1/5 donnent 3/5.",
              "id": "mathematiques-fractions-droite-ex1"
            },
            {
              "type": "number",
              "prompt": "La droite est graduée de 1/4 en 1/4. Quelle est l’abscisse du deuxième trait après 1 ?",
              "answer": "6/4",
              "hint": "Pars de 1=4/4, puis ajoute deux quarts.",
              "explanation": "4/4+2/4=6/4=1,5.",
              "id": "mathematiques-fractions-droite-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-decomposer",
          "title": "Décomposer une fraction supérieure à 1",
          "notion": "Décomposer une fraction supérieure à 1",
          "objective": "Je sépare une fraction en un entier et une fraction.",
          "lesson": "Regroupe des parts pour former des unités complètes. Une fraction reste un seul nombre même si elle s’écrit comme somme.",
          "example": "11/4 = 8/4 + 3/4 = 2 + 3/4 ; donc 11/4 est entre 2 et 3.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Dans 17/5 = … + 2/5, quel entier manque ?",
              "answer": 3,
              "hint": "Combien de groupes de 5 y a-t-il dans 17 ?",
              "explanation": "17=3×5+2 donc 17/5=3+2/5.",
              "id": "mathematiques-fractions-decomposer-ex1"
            },
            {
              "type": "number",
              "prompt": "Écris comme une seule fraction : 2 + 1/3.",
              "answer": "7/3",
              "hint": "Transforme 2 en six tiers.",
              "explanation": "2=6/3 ; 6/3+1/3=7/3.",
              "id": "mathematiques-fractions-decomposer-ex2"
            },
            {
              "type": "choice",
              "prompt": "Entre quels entiers consécutifs se trouve 13/4 ?",
              "options": [
                "2 et 3",
                "3 et 4",
                "4 et 5"
              ],
              "answer": "3 et 4",
              "hint": "12/4=3 et 16/4=4.",
              "explanation": "13/4=3+1/4, donc entre 3 et 4.",
              "id": "mathematiques-fractions-decomposer-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-equivalentes",
          "title": "Reconnaître des fractions égales",
          "notion": "Reconnaître des fractions égales",
          "objective": "Je trouve des écritures différentes du même nombre.",
          "lesson": "Multiplier le numérateur et le dénominateur par le même entier non nul ne change pas la fraction. Le partage est plus fin mais la quantité reste la même. On peut aussi regrouper les parts.",
          "example": "1/2 = 2/4 = 3/6 : trois écritures de la moitié.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Complète : 3/4 = …/12.",
              "answer": 9,
              "hint": "Le dénominateur a été multiplié par 3.",
              "explanation": "3×3=9 et 4×3=12, donc 3/4=9/12.",
              "id": "mathematiques-fractions-equivalentes-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quelle fraction est égale à 4/6 ?",
              "options": [
                "2/3",
                "4/3",
                "2/6"
              ],
              "answer": "2/3",
              "hint": "Regroupe les parts deux par deux.",
              "explanation": "On divise numérateur et dénominateur par 2 : 4/6=2/3.",
              "id": "mathematiques-fractions-equivalentes-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-comparer",
          "title": "Comparer des fractions",
          "notion": "Comparer des fractions",
          "objective": "Je compare des fractions en raisonnant sur les parts.",
          "lesson": "Même dénominateur : compare le nombre de parts. Même numérateur : des parts plus petites donnent une quantité plus petite. Sinon, cherche des fractions égales avec le même dénominateur ou compare à 1.",
          "example": "3/4 > 2/4 ; 2/3 > 2/5 ; 1/2=3/6 donc 1/2<4/6.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle relation est correcte ?",
              "options": [
                "3/5 > 4/5",
                "3/5 < 4/5",
                "3/5 = 4/5"
              ],
              "answer": "3/5 < 4/5",
              "hint": "Les parts sont de même taille.",
              "explanation": "Trois cinquièmes sont moins que quatre cinquièmes.",
              "id": "mathematiques-fractions-comparer-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quelle fraction est la plus grande ?",
              "options": [
                "2/3",
                "2/7"
              ],
              "answer": "2/3",
              "hint": "À numérateur égal, compare la taille des parts.",
              "explanation": "Deux tiers représentent des parts plus grandes que deux septièmes.",
              "id": "mathematiques-fractions-comparer-ex2"
            },
            {
              "type": "choice",
              "prompt": "Compare 3/4 et 5/8.",
              "options": [
                "3/4 > 5/8",
                "3/4 < 5/8",
                "3/4 = 5/8"
              ],
              "answer": "3/4 > 5/8",
              "hint": "Écris trois quarts en huitièmes.",
              "explanation": "3/4=6/8 ; 6/8>5/8.",
              "id": "mathematiques-fractions-comparer-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-addition",
          "title": "Additionner et soustraire des fractions",
          "notion": "Additionner et soustraire des fractions",
          "objective": "Je calcule avec des fractions qui représentent la même unité.",
          "lesson": "Pour additionner des fractions, exprime-les en parts de même taille. Additionne les numérateurs, conserve le dénominateur commun. Pour soustraire, même principe. N’additionne pas les dénominateurs.",
          "example": "1/2+1/4=2/4+1/4=3/4. 5/6−1/3=5/6−2/6=3/6=1/2.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 2/7 + 3/7.",
              "answer": "5/7",
              "hint": "Les septièmes restent des septièmes.",
              "explanation": "2+3=5 parts, donc 5/7.",
              "id": "mathematiques-fractions-addition-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 3/4 − 1/2.",
              "answer": "1/4",
              "hint": "Une moitié vaut deux quarts.",
              "explanation": "3/4−2/4=1/4.",
              "id": "mathematiques-fractions-addition-ex2"
            },
            {
              "type": "number",
              "prompt": "Calcule 1/3 + 1/6.",
              "answer": "1/2",
              "hint": "Écris 1/3 comme 2/6.",
              "explanation": "2/6+1/6=3/6=1/2.",
              "id": "mathematiques-fractions-addition-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-produit",
          "title": "Multiplier une fraction par un entier",
          "notion": "Multiplier une fraction par un entier",
          "objective": "Je calcule plusieurs fois la même fraction.",
          "lesson": "Multiplier une fraction par un entier revient à l’additionner plusieurs fois. Multiplie son numérateur par l’entier, puis cherche éventuellement une écriture plus simple.",
          "example": "3×2/5=2/5+2/5+2/5=6/5=1+1/5.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 4 × 3/8.",
              "answer": "3/2",
              "hint": "4×3=12, le dénominateur reste 8.",
              "explanation": "12/8=3/2=1,5.",
              "id": "mathematiques-fractions-produit-ex1"
            },
            {
              "type": "number",
              "prompt": "Trois rubans mesurent chacun 2/3 de mètre. Quelle longueur totale en mètres ?",
              "answer": 2,
              "hint": "Ajoute trois fois deux tiers.",
              "explanation": "3×2/3=6/3=2 mètres.",
              "id": "mathematiques-fractions-produit-ex2",
              "unit": "m"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        },
        {
          "id": "mathematiques-fractions-quantite",
          "title": "Prendre une fraction d’une quantité",
          "notion": "Prendre une fraction d’une quantité",
          "objective": "Je calcule une fraction d’un nombre ou d’une mesure.",
          "lesson": "Pour trouver a/b d’une quantité, partage la quantité en b parts égales puis prends a parts. Vérifie que ta réponse est plausible : une fraction inférieure à 1 donne moins que le tout.",
          "example": "Les 3/4 de 20 billes : 20÷4=5 puis 3×5=15 billes.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une classe a 24 élèves. Les 2/3 viennent à pied. Combien cela fait-il d’élèves ?",
              "answer": 16,
              "hint": "Un tiers de 24 vaut 8.",
              "explanation": "24÷3=8 et 2×8=16 élèves.",
              "id": "mathematiques-fractions-quantite-ex1"
            },
            {
              "type": "number",
              "prompt": "On utilise les 3/5 d’une corde de 30 m. Combien de mètres utilise-t-on ?",
              "answer": 18,
              "hint": "Trouve un cinquième puis trois cinquièmes.",
              "explanation": "30÷5=6 ; 3×6=18 m.",
              "id": "mathematiques-fractions-quantite-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les fractions."
        }
      ]
    },
    {
      "id": "mathematiques-decimaux",
      "title": "Fractions décimales et nombres à virgule",
      "steps": [
        {
          "id": "mathematiques-decimaux-milliemes",
          "title": "Du dixième au millième",
          "notion": "Du dixième au millième",
          "objective": "Je comprends les dixièmes, centièmes et millièmes.",
          "lesson": "1 unité = 10 dixièmes = 100 centièmes = 1 000 millièmes. Chaque rang vaut dix fois le rang situé à sa droite. Une fraction décimale a pour dénominateur 10, 100, 1 000… Au CM2, on étudie les millièmes.",
          "example": "0,437 = 4/10+3/100+7/1000 ; le 7 représente sept millièmes.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Dans 6,285, quel chiffre occupe le rang des centièmes ?",
              "answer": 8,
              "hint": "Après la virgule : dixièmes, centièmes, millièmes.",
              "explanation": "Le 2 est aux dixièmes, le 8 aux centièmes et le 5 aux millièmes.",
              "id": "mathematiques-decimaux-milliemes-ex1"
            },
            {
              "type": "number",
              "prompt": "Combien de millièmes y a-t-il dans 3 dixièmes ?",
              "answer": 300,
              "hint": "Un dixième vaut 100 millièmes.",
              "explanation": "3/10=300/1000.",
              "id": "mathematiques-decimaux-milliemes-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres décimaux."
        },
        {
          "id": "mathematiques-decimaux-ecritures",
          "title": "Passer d’une écriture à l’autre",
          "notion": "Passer d’une écriture à l’autre",
          "objective": "Je relie fraction décimale, décomposition et écriture à virgule.",
          "lesson": "La virgule sépare la partie entière des rangs décimaux. Des zéros peuvent garder un rang vide. Les zéros finaux après la virgule ne changent pas la valeur.",
          "example": "2+5/100+7/1000=2,057. 2,500=2,5 mais 2,05 n’est pas 2,5.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Écris avec une virgule : 3 + 4/10 + 6/1000.",
              "answer": 3.406,
              "hint": "Il n’y a aucun centième : écris un zéro à ce rang.",
              "explanation": "3+0,4+0,006=3,406.",
              "id": "mathematiques-decimaux-ecritures-ex1"
            },
            {
              "type": "number",
              "prompt": "Écris comme un nombre décimal : 407/100.",
              "answer": 4.07,
              "hint": "407 centièmes = 4 unités et 7 centièmes.",
              "explanation": "407/100=4,07.",
              "id": "mathematiques-decimaux-ecritures-ex2"
            },
            {
              "type": "number",
              "prompt": "Quel numérateur manque : 0,032 = …/1000 ?",
              "answer": 32,
              "hint": "Lis trente-deux millièmes.",
              "explanation": "0,032=32/1000.",
              "id": "mathematiques-decimaux-ecritures-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres décimaux."
        },
        {
          "id": "mathematiques-decimaux-droite",
          "title": "Repérer et intercaler des décimaux",
          "notion": "Repérer et intercaler des décimaux",
          "objective": "Je lis une graduation et je place un décimal.",
          "lesson": "Observe d’abord la valeur entre deux repères connus, puis partage par le nombre d’intervalles. Il y a toujours des décimaux entre deux décimaux différents.",
          "example": "Entre 1,2 et 1,3 séparés par dix intervalles, chaque intervalle vaut 0,01 ; le troisième trait après 1,2 est 1,23.",
          "exercises": [
            {
              "type": "number",
              "prompt": "De 0,6 à 0,7, on compte 10 intervalles égaux. Quel nombre est au quatrième trait après 0,6 ?",
              "answer": 0.64,
              "hint": "Chaque intervalle vaut 0,01.",
              "explanation": "0,6+4×0,01=0,64.",
              "id": "mathematiques-decimaux-droite-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quel nombre est strictement entre 2,41 et 2,42 ?",
              "options": [
                "2,415",
                "2,43",
                "2,4"
              ],
              "answer": "2,415",
              "hint": "Tu peux utiliser les millièmes.",
              "explanation": "2,410<2,415<2,420.",
              "id": "mathematiques-decimaux-droite-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres décimaux."
        },
        {
          "id": "mathematiques-decimaux-ordre",
          "title": "Comparer et ordonner les décimaux",
          "notion": "Comparer et ordonner les décimaux",
          "objective": "Je compare sans me laisser tromper par la longueur de l’écriture.",
          "lesson": "Compare les parties entières, puis les dixièmes, les centièmes et les millièmes. Tu peux ajouter des zéros à droite après la virgule pour aligner les rangs.",
          "example": "3,9=3,900 est plus grand que 3,125 : neuf dixièmes sont plus que un dixième.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle comparaison est correcte ?",
              "options": [
                "4,08 > 4,8",
                "4,08 < 4,8",
                "4,08 = 4,8"
              ],
              "answer": "4,08 < 4,8",
              "hint": "Compare 4,080 et 4,800.",
              "explanation": "Le premier nombre a 0 dixième, le second 8 dixièmes.",
              "id": "mathematiques-decimaux-ordre-ex1"
            },
            {
              "type": "order",
              "prompt": "Range ces décimaux dans l’ordre croissant.",
              "options": [
                "1,5",
                "1,05",
                "1,505",
                "1,55"
              ],
              "answer": [
                "1,05",
                "1,5",
                "1,505",
                "1,55"
              ],
              "hint": "Écris mentalement 1,050 ; 1,500 ; 1,505 ; 1,550.",
              "explanation": "À partie entière égale, on compare les rangs décimaux : 1,05<1,5<1,505<1,55.",
              "id": "mathematiques-decimaux-ordre-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres décimaux."
        },
        {
          "id": "mathematiques-decimaux-arrondi",
          "title": "Partie entière, encadrement et arrondi",
          "notion": "Partie entière, encadrement et arrondi",
          "objective": "Je distingue la partie entière et l’arrondi à l’entier.",
          "lesson": "La partie entière correspond aux unités complètes. Pour arrondir à l’entier le plus proche, compare la partie décimale à 0,5. Si elle vaut 0,5, on choisit ici l’entier supérieur.",
          "example": "Pour 8,72, partie entière : 8 ; encadrement : 8<8,72<9 ; arrondi : 9.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Quelle est la partie entière de 15,987 ?",
              "answer": 15,
              "hint": "Combien d’unités complètes ?",
              "explanation": "La partie entière est 15, même si l’arrondi serait 16.",
              "id": "mathematiques-decimaux-arrondi-ex1"
            },
            {
              "type": "number",
              "prompt": "Arrondis 27,49 à l’entier le plus proche.",
              "answer": 27,
              "hint": "Compare 0,49 à 0,5.",
              "explanation": "27,49 est plus proche de 27 que de 28.",
              "id": "mathematiques-decimaux-arrondi-ex2"
            },
            {
              "type": "number",
              "prompt": "Arrondis 6,5 à l’entier le plus proche selon la règle de la leçon.",
              "answer": 7,
              "hint": "À mi-chemin, la règle annoncée choisit l’entier supérieur.",
              "explanation": "6,5 se situe à égale distance de 6 et 7 ; la convention utilisée donne 7.",
              "id": "mathematiques-decimaux-arrondi-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres décimaux."
        }
      ]
    },
    {
      "id": "mathematiques-entiers",
      "title": "Nombres entiers et divisibilité",
      "steps": [
        {
          "id": "mathematiques-entiers-numeration",
          "title": "Lire les nombres jusqu’à neuf chiffres",
          "notion": "Lire les nombres jusqu’à neuf chiffres",
          "objective": "Je lis et décompose les nombres jusqu’à 999 999 999.",
          "lesson": "Groupe les chiffres par trois depuis la droite : unités, milliers, millions. Un zéro marque un rang vide. La valeur d’un chiffre dépend de sa position.",
          "example": "305 040 018 = 305 millions + 40 milliers + 18. Le 5 vaut 5 000 000.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Dans 482 615 307, quelle est la valeur du chiffre 6 ?",
              "answer": 600000,
              "hint": "Le 6 est dans la classe des milliers, au rang des centaines de milliers.",
              "explanation": "Le chiffre 6 représente six cent mille.",
              "id": "mathematiques-entiers-numeration-ex1"
            },
            {
              "type": "number",
              "prompt": "Écris en chiffres : vingt-trois millions quatre mille neuf.",
              "answer": 23004009,
              "hint": "Sépare les classes : 23 | 004 | 009.",
              "explanation": "23 millions + 4 mille + 9 = 23 004 009.",
              "id": "mathematiques-entiers-numeration-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres entiers."
        },
        {
          "id": "mathematiques-entiers-relations",
          "title": "Relier les unités de numération",
          "notion": "Relier les unités de numération",
          "objective": "Je transforme une représentation d’un entier.",
          "lesson": "Dix unités d’un rang forment une unité du rang suivant. Un nombre peut se décomposer de plusieurs façons. Ne confonds pas chiffre d’un rang et nombre de groupes de ce rang.",
          "example": "Dans 2 345 678, le chiffre des milliers est 5 ; le nombre de milliers complets est 2 345.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Combien de milliers complets contient 48 750 ?",
              "answer": 48,
              "hint": "Compte les groupes de mille, pas seulement le chiffre des milliers.",
              "explanation": "48 750=48×1000+750.",
              "id": "mathematiques-entiers-relations-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule : 7 millions + 35 milliers + 8 centaines.",
              "answer": 7035800,
              "hint": "Écris chaque quantité en unités.",
              "explanation": "7 000 000+35 000+800=7 035 800.",
              "id": "mathematiques-entiers-relations-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres entiers."
        },
        {
          "id": "mathematiques-entiers-ordre",
          "title": "Comparer, encadrer et repérer les entiers",
          "notion": "Comparer, encadrer et repérer les entiers",
          "objective": "Je compare et situe de grands nombres.",
          "lesson": "Compare d’abord le nombre de chiffres, puis les chiffres de gauche à droite. Sur une droite graduée, calcule la valeur de chaque intervalle. Encadrer signifie trouver un nombre inférieur et un nombre supérieur.",
          "example": "Entre 5 000 000 et 6 000 000 avec dix intervalles, un intervalle vaut 100 000.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel nombre est le plus grand ?",
              "options": [
                "54 090 000",
                "54 900 000",
                "5 490 000"
              ],
              "answer": "54 900 000",
              "hint": "Compare les dizaines de millions puis les rangs suivants.",
              "explanation": "54 900 000 a plus de centaines de milliers que 54 090 000.",
              "id": "mathematiques-entiers-ordre-ex1"
            },
            {
              "type": "number",
              "prompt": "De 2 000 à 3 000, il y a 5 intervalles égaux. Quel nombre est au troisième trait après 2 000 ?",
              "answer": 2600,
              "hint": "Chaque intervalle vaut 1000÷5=200.",
              "explanation": "2000+3×200=2600.",
              "id": "mathematiques-entiers-ordre-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres entiers."
        },
        {
          "id": "mathematiques-entiers-multiples",
          "title": "Multiples, diviseurs et critères",
          "notion": "Multiples, diviseurs et critères",
          "objective": "Je reconnais un multiple et un diviseur.",
          "lesson": "Si 24=6×4, 24 est un multiple de 6 et 6 est un diviseur de 24. Un entier est divisible par 2 s’il est pair, par 5 s’il finit par 0 ou 5, par 10 s’il finit par 0. Pour les autres cas, utilise tables ou division.",
          "example": "45 est multiple de 5 et de 9 ; 5 et 9 divisent 45 sans reste.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel nombre est divisible à la fois par 2 et par 5 ?",
              "options": [
                "135",
                "240",
                "222"
              ],
              "answer": "240",
              "hint": "Il faut être pair et se terminer par 0 ou 5.",
              "explanation": "240 se termine par 0 : il est divisible par 2, 5 et 10.",
              "id": "mathematiques-entiers-multiples-ex1"
            },
            {
              "type": "number",
              "prompt": "Quel entier multiplié par 7 donne 56 ?",
              "answer": 8,
              "hint": "Utilise la table de 7.",
              "explanation": "7×8=56 ; 7 et 8 sont des diviseurs de 56.",
              "id": "mathematiques-entiers-multiples-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres entiers."
        },
        {
          "id": "mathematiques-entiers-communs",
          "title": "Chercher tous les diviseurs et des multiples communs",
          "notion": "Chercher tous les diviseurs et des multiples communs",
          "objective": "Je trouve les diviseurs communs et des multiples communs.",
          "lesson": "Pour lister les diviseurs, cherche des produits par paires et vérifie que tu n’en oublies pas. Pour deux nombres, compare leurs listes. Les multiples communs peuvent servir à comparer des fractions.",
          "example": "Diviseurs de 12 : 1,2,3,4,6,12. De 18 : 1,2,3,6,9,18. Communs : 1,2,3,6.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle liste contient tous les diviseurs de 20 ?",
              "options": [
                "1, 2, 4, 5, 10, 20",
                "1, 2, 5, 20",
                "2, 4, 6, 10, 20"
              ],
              "answer": "1, 2, 4, 5, 10, 20",
              "hint": "Cherche 1×20, 2×10 et 4×5.",
              "explanation": "Ces trois paires donnent les six diviseurs de 20.",
              "id": "mathematiques-entiers-communs-ex1"
            },
            {
              "type": "number",
              "prompt": "Quel est le plus petit multiple commun strictement positif de 4 et de 6 ?",
              "answer": 12,
              "hint": "Liste 4,8,12… et 6,12…",
              "explanation": "12 est le premier nombre positif présent dans les deux listes.",
              "id": "mathematiques-entiers-communs-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Les nombres entiers."
        }
      ]
    },
    {
      "id": "mathematiques-calcul",
      "title": "Calcul mental, posé et contrôle",
      "steps": [
        {
          "id": "mathematiques-calcul-faits",
          "title": "Mémoriser des faits utiles",
          "notion": "Mémoriser des faits utiles",
          "objective": "Je mobilise tables, moitiés et fractions usuelles.",
          "lesson": "Les tables et les relations entre fractions évitent de tout recalculer. Entraîne-toi brièvement et régulièrement, sans course ni pénalité. Relie les faits : 8×7=56 donc 56÷8=7.",
          "example": "La moitié de 9 est 4,5 ; 1/4=0,25 ; 3/4=0,75 ; 1/2=0,5.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 7 × 8.",
              "answer": 56,
              "hint": "7×4=28 ; double ce résultat.",
              "explanation": "7×8=56.",
              "id": "mathematiques-calcul-faits-ex1"
            },
            {
              "type": "number",
              "prompt": "Quelle est la moitié de 15 ?",
              "answer": 7.5,
              "hint": "Partage 14 puis le dernier 1.",
              "explanation": "14÷2=7 et 1÷2=0,5 : total 7,5.",
              "id": "mathematiques-calcul-faits-ex2"
            },
            {
              "type": "number",
              "prompt": "Écris 3/4 sous forme décimale.",
              "answer": 0.75,
              "hint": "Un quart vaut 0,25.",
              "explanation": "3×0,25=0,75.",
              "id": "mathematiques-calcul-faits-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-dix",
          "title": "Multiplier et diviser par 10, 100, 1 000",
          "notion": "Multiplier et diviser par 10, 100, 1 000",
          "objective": "Je change la valeur des chiffres sans règle trompeuse.",
          "lesson": "Multiplier par 10 rend chaque chiffre dix fois plus grand ; diviser par 10 le rend dix fois plus petit. Réécris les chiffres dans les bons rangs, avec des zéros si nécessaire.",
          "example": "3,47×100=347 ; 8÷1000=0,008. Dire seulement « ajouter des zéros » ne fonctionne pas toujours.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 4,083 × 100.",
              "answer": 408.3,
              "hint": "Chaque chiffre prend une valeur cent fois plus grande.",
              "explanation": "4,083×100=408,3.",
              "id": "mathematiques-calcul-dix-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 27 ÷ 1 000.",
              "answer": 0.027,
              "hint": "Mille fois plus petit ; les rangs doivent rester distincts.",
              "explanation": "27 unités divisées par mille donnent 27 millièmes, soit 0,027.",
              "id": "mathematiques-calcul-dix-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-ajuster",
          "title": "Ajouter et soustraire avec astuce",
          "notion": "Ajouter et soustraire avec astuce",
          "objective": "Je choisis une décomposition simple.",
          "lesson": "Pour ajouter 19, ajoute 20 puis enlève 1. Pour soustraire 29, soustrais 30 puis ajoute 1. Avec un décimal, garde la valeur des dixièmes ou centièmes.",
          "example": "56+19=56+20−1=75 ; 7,6+2,8=7,6+2+0,8=10,4.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule mentalement 146 − 29.",
              "answer": 117,
              "hint": "Enlève 30 puis rajoute 1.",
              "explanation": "146−30+1=117.",
              "id": "mathematiques-calcul-ajuster-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 4,7 + 3,8.",
              "answer": 8.5,
              "hint": "4+3=7 et 0,7+0,8=1,5.",
              "explanation": "7+1,5=8,5.",
              "id": "mathematiques-calcul-ajuster-ex2"
            },
            {
              "type": "number",
              "prompt": "Calcule 6,75 + 4.",
              "answer": 10.75,
              "hint": "Ajoute quatre unités.",
              "explanation": "6,75+4=10,75.",
              "id": "mathematiques-calcul-ajuster-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-distributivite",
          "title": "Décomposer un produit",
          "notion": "Décomposer un produit",
          "objective": "Je calcule en utilisant la distributivité.",
          "lesson": "Multiplier une somme revient à multiplier chaque partie puis additionner. Choisis une décomposition utile. On peut aussi utiliser un nombre rond puis compenser.",
          "example": "7×23=7×20+7×3=140+21=161.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 6 × 48.",
              "answer": 288,
              "hint": "6×(50−2)=300−12.",
              "explanation": "6×48=6×50−6×2=300−12=288.",
              "id": "mathematiques-calcul-distributivite-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 30 × 400.",
              "answer": 12000,
              "hint": "3×4=12 puis tiens compte des dizaines et centaines.",
              "explanation": "30×400=12×1000=12 000.",
              "id": "mathematiques-calcul-distributivite-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-demidouble",
          "title": "Doubles, moitiés et divisions par 4 ou 8",
          "notion": "Doubles, moitiés et divisions par 4 ou 8",
          "objective": "Je construis un calcul à partir de moitiés et de doubles.",
          "lesson": "Diviser par 4 revient à prendre la moitié puis encore la moitié. Diviser par 8 revient à prendre trois fois la moitié. Pour doubler un décimal, double chaque partie puis regroupe.",
          "example": "48÷8 : moitié 24, moitié 12, moitié 6. Double de 3,7 : 7,4.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 84 ÷ 4.",
              "answer": 21,
              "hint": "Prends deux fois la moitié.",
              "explanation": "84→42→21.",
              "id": "mathematiques-calcul-demidouble-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule la moitié de 7,4.",
              "answer": 3.7,
              "hint": "7,4 peut s’écrire 74 dixièmes.",
              "explanation": "74 dixièmes÷2=37 dixièmes=3,7.",
              "id": "mathematiques-calcul-demidouble-ex2"
            },
            {
              "type": "number",
              "prompt": "Calcule le double de 2,65.",
              "answer": 5.3,
              "hint": "2×2=4 et 2×0,65=1,3.",
              "explanation": "4+1,3=5,3.",
              "id": "mathematiques-calcul-demidouble-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-cinq",
          "title": "Multiplier par 5 ou par 50",
          "notion": "Multiplier par 5 ou par 50",
          "objective": "Je transforme le produit en un calcul simple.",
          "lesson": "Multiplier par 5 revient à multiplier par 10 puis diviser par 2. Multiplier par 50 revient à multiplier par 100 puis diviser par 2. Choisis l’ordre qui facilite le calcul.",
          "example": "4,8×5=48÷2=24 ; 1,6×50=160÷2=80.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 6,4 × 5.",
              "answer": 32,
              "hint": "Multiplie par 10 puis prends la moitié.",
              "explanation": "64÷2=32.",
              "id": "mathematiques-calcul-cinq-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 3,6 × 50.",
              "answer": 180,
              "hint": "3,6×100=360.",
              "explanation": "360÷2=180.",
              "id": "mathematiques-calcul-cinq-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-additionposee",
          "title": "Addition et soustraction décimales",
          "notion": "Addition et soustraction décimales",
          "objective": "Je pose un calcul en alignant les mêmes unités.",
          "lesson": "Aligne unités avec unités, dixièmes avec dixièmes, donc les virgules. Tu peux ajouter des zéros finaux. Calcule avec retenues si nécessaire puis vérifie un ordre de grandeur.",
          "example": "12,8−3,47 s’écrit 12,80−3,47=9,33.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 37,85 + 6,7.",
              "answer": 44.55,
              "hint": "Écris 6,70 sous 37,85.",
              "explanation": "37,85+6,70=44,55.",
              "id": "mathematiques-calcul-additionposee-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 20 − 7,36.",
              "answer": 12.64,
              "hint": "Écris 20,00 et organise les échanges entre rangs.",
              "explanation": "20,00−7,36=12,64.",
              "id": "mathematiques-calcul-additionposee-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-multiplication",
          "title": "Multiplier un décimal par un entier",
          "notion": "Multiplier un décimal par un entier",
          "objective": "Je pose et contrôle un produit.",
          "lesson": "Tu peux calculer d’abord comme avec des entiers, puis retrouver les unités. Donner un sens au résultat aide à placer la virgule. Au CM2, le multiplicateur étudié ici est entier, pas décimal.",
          "example": "2,35×4 : 235 centièmes×4=940 centièmes=9,40.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 14,6 × 7.",
              "answer": 102.2,
              "hint": "146 dixièmes×7=1022 dixièmes.",
              "explanation": "14,6×7=102,2, proche de 15×7=105.",
              "id": "mathematiques-calcul-multiplication-ex1"
            },
            {
              "type": "number",
              "prompt": "Une place coûte 8,75 €. Combien coûtent 6 places, en euros ?",
              "answer": 52.5,
              "hint": "Calcule 875 centimes×6.",
              "explanation": "875×6=5250 centimes=52,50 €.",
              "id": "mathematiques-calcul-multiplication-ex2",
              "unit": "€"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-divisioneuclidienne",
          "title": "Partager avec un reste",
          "notion": "Partager avec un reste",
          "objective": "Je donne quotient et reste d’une division entière.",
          "lesson": "Dans une division euclidienne : dividende = diviseur × quotient + reste, et le reste est inférieur au diviseur. Le contexte dit ce qu’on fait du reste.",
          "example": "53=6×8+5 : 53 objets donnent 8 groupes complets de 6 et 5 objets restants.",
          "exercises": [
            {
              "type": "number",
              "prompt": "On range 67 cartes par paquets de 8. Combien de paquets complets ?",
              "answer": 8,
              "hint": "8×8=64.",
              "explanation": "Le quotient entier est 8 ; 3 cartes restent.",
              "id": "mathematiques-calcul-divisioneuclidienne-ex1"
            },
            {
              "type": "number",
              "prompt": "Quel est le reste de la division entière de 67 par 8 ?",
              "answer": 3,
              "hint": "67−64=…",
              "explanation": "67=8×8+3 et 3<8.",
              "id": "mathematiques-calcul-divisioneuclidienne-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-divisiondecimale",
          "title": "Poursuivre une division",
          "notion": "Poursuivre une division",
          "objective": "Je divise un entier ou un décimal par un entier à un chiffre.",
          "lesson": "Si un partage peut continuer, transforme une unité restante en dix dixièmes, puis en centièmes si besoin. Ne force pas une écriture décimale finie si le partage se répète sans fin.",
          "example": "15÷4 : 3 unités chacun, reste 3 ; 30 dixièmes donnent 7 dixièmes, reste 2 ; 20 centièmes donnent 5 centièmes. Résultat 3,75.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule 27 ÷ 4.",
              "answer": 6.75,
              "hint": "24÷4=6 ; partage les 3 unités restantes.",
              "explanation": "27÷4=6,75.",
              "id": "mathematiques-calcul-divisiondecimale-ex1"
            },
            {
              "type": "number",
              "prompt": "Calcule 18,6 ÷ 3.",
              "answer": 6.2,
              "hint": "18÷3=6 et 0,6÷3=0,2.",
              "explanation": "18,6÷3=6,2.",
              "id": "mathematiques-calcul-divisiondecimale-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        },
        {
          "id": "mathematiques-calcul-parentheses",
          "title": "Respecter les parenthèses et vérifier",
          "notion": "Respecter les parenthèses et vérifier",
          "objective": "Je calcule dans l’ordre indiqué et j’estime le résultat.",
          "lesson": "Calcule d’abord ce qui est entre parenthèses. Deux expressions de même apparence peuvent donner des résultats différents. Un ordre de grandeur aide à repérer une erreur, sans remplacer le résultat exact.",
          "example": "(12+8)×3=60 mais 12+(8×3)=36. Pour 19,8×6, une estimation est 20×6=120.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Calcule (18 − 6) × (3 + 2).",
              "answer": 60,
              "hint": "Calcule séparément les deux parenthèses.",
              "explanation": "12×5=60.",
              "id": "mathematiques-calcul-parentheses-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quel résultat est plausible pour 49,8 × 4 ?",
              "options": [
                "19,92",
                "199,2",
                "1 992"
              ],
              "answer": "199,2",
              "hint": "50×4=200.",
              "explanation": "199,2 est proche de 200 ; les autres résultats sont d’un autre ordre de grandeur.",
              "id": "mathematiques-calcul-parentheses-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Le calcul mental ; Les quatre opérations."
        }
      ]
    },
    {
      "id": "mathematiques-problemes",
      "title": "Comprendre, modéliser, calculer, répondre",
      "steps": [
        {
          "id": "mathematiques-problemes-additifs",
          "title": "Choisir addition ou soustraction",
          "notion": "Choisir addition ou soustraction",
          "objective": "Je représente le problème avant de choisir l’opération.",
          "lesson": "Addition et soustraction servent à réunir, compléter, comparer ou retrouver un état. Le mot plus ne signifie pas toujours additionner. Reformule l’histoire et cherche l’inconnue.",
          "example": "« Noé a 18 billes, soit 5 de plus que Lina. » Lina en a 18−5=13.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Mina possède 34 cartes, soit 8 de plus que son frère. Combien son frère en a-t-il ?",
              "answer": 26,
              "hint": "Mina a davantage : son frère en a moins que 34.",
              "explanation": "34−8=26 cartes.",
              "id": "mathematiques-problemes-additifs-ex1"
            },
            {
              "type": "number",
              "prompt": "Une collecte vise 250 livres. On en a réuni 178. Combien manque-t-il de livres ?",
              "answer": 72,
              "hint": "Cherche le complément pour atteindre 250.",
              "explanation": "250−178=72 livres.",
              "id": "mathematiques-problemes-additifs-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-partiestout",
          "title": "Groupes égaux et partage",
          "notion": "Groupes égaux et partage",
          "objective": "Je reconnais une situation multiplicative parties-tout.",
          "lesson": "Un total formé de groupes égaux peut se trouver par multiplication. Pour retrouver le nombre de groupes ou la taille d’un groupe, utilise une division. Dessine des paquets si besoin.",
          "example": "5 boîtes de 12 crayons donnent 5×12=60 crayons ; 60 crayons répartis en 5 boîtes donnent 12 par boîte.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Il y a 7 rangées de 18 sièges. Combien de sièges en tout ?",
              "answer": 126,
              "hint": "Chaque rangée a la même taille.",
              "explanation": "7×18=126 sièges.",
              "id": "mathematiques-problemes-partiestout-ex1"
            },
            {
              "type": "number",
              "prompt": "On répartit 144 photos dans 8 albums identiques. Combien de photos par album ?",
              "answer": 18,
              "hint": "Le total est connu ; cherche une part.",
              "explanation": "144÷8=18 photos par album.",
              "id": "mathematiques-problemes-partiestout-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-mixte",
          "title": "Résoudre en plusieurs étapes",
          "notion": "Résoudre en plusieurs étapes",
          "objective": "Je garde la trace des résultats intermédiaires.",
          "lesson": "Un problème peut nécessiter plusieurs opérations. Décris les étapes, note les résultats avec leur sens puis réponds à la question finale. Vérifie les unités et la vraisemblance.",
          "example": "4 entrées à 7 € coûtent 28 € ; avec 3 € de parking, total 31 €.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une classe achète 6 lots de 8 cahiers, puis en distribue 35. Combien de cahiers reste-t-il ?",
              "answer": 13,
              "hint": "Trouve d’abord le nombre acheté.",
              "explanation": "6×8=48 ; 48−35=13 cahiers.",
              "id": "mathematiques-problemes-mixte-ex1"
            },
            {
              "type": "number",
              "prompt": "Deux rubans mesurent 3,5 m chacun. On coupe ensuite 1,25 m dans l’ensemble. Quelle longueur reste, en mètres ?",
              "answer": 5.75,
              "hint": "Calcule la longueur totale avant la coupe.",
              "explanation": "2×3,5=7 ; 7−1,25=5,75 m.",
              "id": "mathematiques-problemes-mixte-ex2",
              "unit": "m"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-comparaison",
          "title": "Comparer avec « fois plus »",
          "notion": "Comparer avec « fois plus »",
          "objective": "Je distingue comparaison additive et multiplicative.",
          "lesson": "Trois fois autant signifie multiplier par 3 ; trois de plus signifie ajouter 3. Pour retrouver la petite quantité, on divise la grande par le nombre de fois.",
          "example": "Un ruban de 24 cm est trois fois aussi long qu’un ruban de 8 cm : 24÷3=8.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un vélo coûte 90 €. Un autre coûte trois fois autant. Quel est son prix, en euros ?",
              "answer": 270,
              "hint": "Trois fois autant : trois groupes de 90.",
              "explanation": "90×3=270 €.",
              "id": "mathematiques-problemes-comparaison-ex1",
              "unit": "€"
            },
            {
              "type": "number",
              "prompt": "Une grande réserve contient 42 L, soit 6 fois autant qu’un bidon. Quelle est la capacité du bidon, en litres ?",
              "answer": 7,
              "hint": "42 est la grande quantité ; partage-la en six.",
              "explanation": "42÷6=7 L.",
              "id": "mathematiques-problemes-comparaison-ex2",
              "unit": "L"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-denombrement",
          "title": "Compter sans oublier les possibilités",
          "notion": "Compter sans oublier les possibilités",
          "objective": "Je dénombre toutes les combinaisons simples.",
          "lesson": "Organise les possibilités par listes, tableau ou arbre. Associe chaque choix de la première catégorie à tous les choix de la seconde. Cela évite oublis et doubles comptes.",
          "example": "Avec 2 hauts et 3 pantalons, chaque haut va avec 3 pantalons : 2×3=6 tenues.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un menu propose 3 entrées et 4 plats. Combien de repas entrée-plat différents peut-on composer ?",
              "answer": 12,
              "hint": "À chacune des trois entrées correspondent quatre plats.",
              "explanation": "3×4=12 repas différents.",
              "id": "mathematiques-problemes-denombrement-ex1"
            },
            {
              "type": "guided",
              "prompt": "Dessine un tableau pour 2 couleurs de papier (bleu, jaune) et 3 formes (rond, carré, triangle).",
              "criteria": [
                "Les six associations apparaissent une seule fois.",
                "Les lignes et colonnes sont nommées.",
                "Je peux expliquer pourquoi il y en a six."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-problemes-denombrement-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-optimisation",
          "title": "Chercher la meilleure solution",
          "notion": "Chercher la meilleure solution",
          "objective": "Je compare toutes les solutions utiles avant de choisir.",
          "lesson": "Optimiser, c’est chercher le plus grand, le plus petit ou le plus économique sous des contraintes. Organise tes essais, calcule puis justifie le choix. Le prix d’un lot ne suffit pas : il faut assez d’objets.",
          "example": "Pour 10 crayons, des lots de 4 à 3 € nécessitent 3 lots : 12 crayons et 9 €. Deux lots ne suffisent pas.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Il faut au moins 18 bouteilles. Lot A : 6 bouteilles pour 4 €. Lot B : 10 pour 7 €. Quel est le coût minimal en euros si on choisit un seul type de lot ?",
              "answer": 12,
              "hint": "Compare 3 lots A à 2 lots B.",
              "explanation": "A : 3×4=12 € pour 18 bouteilles ; B : 2×7=14 € pour 20. Minimum 12 €.",
              "id": "mathematiques-problemes-optimisation-ex1",
              "unit": "€"
            },
            {
              "type": "guided",
              "prompt": "Pour 24 personnes, compare des tables de 4 places et de 6 places. Cherche le plus petit nombre de tables, puis explique tes essais.",
              "criteria": [
                "Il y a au moins 24 places.",
                "Je compare plusieurs possibilités organisées.",
                "Je justifie le minimum : quatre tables de six suffisent, trois tables offrent au plus 18 places."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-problemes-optimisation-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        },
        {
          "id": "mathematiques-problemes-algorithme",
          "title": "Résoudre par une procédure répétée",
          "notion": "Résoudre par une procédure répétée",
          "objective": "Je suis une règle et je contrôle chaque étape.",
          "lesson": "Un algorithme est une suite d’instructions précises. Certaines tâches demandent de répéter les mêmes instructions jusqu’à une condition d’arrêt. Note l’état après chaque répétition.",
          "example": "Une réserve de 25 L perd 4 L par jour : après 1 jour 21 L, après 2 jours 17 L ; on suit chaque étape au lieu de deviner.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un robot part de 2. Trois fois de suite, il ajoute 3. Quel nombre obtient-il ?",
              "answer": 11,
              "hint": "Note 2→5→8→…",
              "explanation": "Après trois ajouts de 3 : 2+3+3+3=11.",
              "id": "mathematiques-problemes-algorithme-ex1"
            },
            {
              "type": "choice",
              "prompt": "La règle est : tant que le nombre est inférieur à 10, ajouter 2. On part de 3. Quel nombre provoque l’arrêt ?",
              "options": [
                "9",
                "10",
                "11"
              ],
              "answer": "11",
              "hint": "Suis 3,5,7,9,11.",
              "explanation": "À 9, on ajoute encore 2 ; à 11, la condition inférieur à 10 n’est plus vraie.",
              "id": "mathematiques-problemes-algorithme-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : La résolution de problèmes."
        }
      ]
    },
    {
      "id": "mathematiques-algebre",
      "title": "Égalités, nombres inconnus et programmes",
      "steps": [
        {
          "id": "mathematiques-algebre-egalite",
          "title": "Une égalité a deux côtés",
          "notion": "Une égalité a deux côtés",
          "objective": "Je trouve un nombre manquant dans une égalité.",
          "lesson": "Le signe = dit que les deux côtés ont la même valeur. Il ne signifie pas seulement « voici le résultat ». Calcule un côté puis cherche ce qui rend l’autre égal.",
          "example": "18−□=2×5 : le côté droit vaut 10, donc □=8.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Complète : 63 − … = 7 × 6.",
              "answer": 21,
              "hint": "Le côté droit vaut 42.",
              "explanation": "63−21=42=7×6.",
              "id": "mathematiques-algebre-egalite-ex1"
            },
            {
              "type": "number",
              "prompt": "Complète : 4 × … = 18 + 10.",
              "answer": 7,
              "hint": "18+10=28.",
              "explanation": "4×7=28.",
              "id": "mathematiques-algebre-egalite-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Algèbre ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-algebre-symboles",
          "title": "Raisonner avec un symbole",
          "notion": "Raisonner avec un symbole",
          "objective": "Je représente une quantité inconnue sans la deviner au hasard.",
          "lesson": "Un symbole peut remplacer une quantité. Utilise les relations connues et un schéma en barres pour retrouver la valeur. Une même lettre représente la même quantité dans un même problème.",
          "example": "Deux sacs identiques et 3 billes font 17 billes : les deux sacs font 14, donc chaque sac contient 7 billes.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Deux boîtes identiques et 5 crayons contiennent au total 23 crayons. Combien de crayons dans chaque boîte ?",
              "answer": 9,
              "hint": "Enlève les cinq crayons isolés avant de partager.",
              "explanation": "23−5=18 ; 18÷2=9 crayons par boîte.",
              "id": "mathematiques-algebre-symboles-ex1"
            },
            {
              "type": "number",
              "prompt": "Un carnet coûte N euros. Trois carnets et 2 € de livraison coûtent 20 €. Quelle est la valeur de N ?",
              "answer": 6,
              "hint": "La livraison ne se répète pas.",
              "explanation": "20−2=18 ; 18÷3=6 €. La même valeur N est utilisée pour chaque carnet.",
              "id": "mathematiques-algebre-symboles-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Algèbre ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-algebre-programme",
          "title": "Exécuter et produire un programme de calcul",
          "notion": "Exécuter et produire un programme de calcul",
          "objective": "Je suis jusqu’à trois instructions de calcul.",
          "lesson": "Effectue les instructions dans l’ordre, en utilisant le résultat précédent. Pour expliquer un programme, évite les ambiguïtés et donne un exemple.",
          "example": "Choisir 4 ; ajouter 3 ; multiplier par 2 ; retirer 1 : 4→7→14→13.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Pars de 5, ajoute 2, multiplie le résultat par 4, puis retire 3. Quel résultat obtiens-tu ?",
              "answer": 25,
              "hint": "Suis 5→7→28→…",
              "explanation": "(5+2)×4−3=25.",
              "id": "mathematiques-algebre-programme-ex1"
            },
            {
              "type": "guided",
              "prompt": "Écris un programme de trois instructions qui transforme 2 en 15, puis teste-le avec un adulte.",
              "criteria": [
                "Chaque instruction est précise et dans l’ordre.",
                "Le programme donne bien 15 en partant de 2.",
                "Je peux expliquer que plusieurs programmes conviennent."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-algebre-programme-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Algèbre ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-algebre-suites",
          "title": "Identifier une règle et un motif évolutif",
          "notion": "Identifier une règle et un motif évolutif",
          "objective": "Je formule une règle de suite et je prévois une étape.",
          "lesson": "Cherche comment on passe d’une étape à la suivante et, si possible, comment le rang détermine le nombre. Plusieurs règles peuvent parfois convenir à quelques termes : annonce celle que tu utilises.",
          "example": "Une rangée de carrés accolés utilise 4 bâtonnets pour 1 carré puis ajoute 3 bâtonnets par carré : 4,7,10,13…",
          "exercises": [
            {
              "type": "number",
              "prompt": "La règle est « doubler puis ajouter 1 ». La suite commence 3, 7, 15. Quel terme vient ensuite ?",
              "answer": 31,
              "hint": "Double 15 puis ajoute 1.",
              "explanation": "15×2+1=31.",
              "id": "mathematiques-algebre-suites-ex1"
            },
            {
              "type": "number",
              "prompt": "Des carrés sont accolés en une rangée en partageant un côté. Il faut 4 bâtonnets pour le premier, puis 3 par carré ajouté. Combien pour 6 carrés ?",
              "answer": 19,
              "hint": "Après le premier, il reste cinq carrés à ajouter.",
              "explanation": "4+5×3=19 bâtonnets.",
              "id": "mathematiques-algebre-suites-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Nombres, calcul et résolution de problèmes : Algèbre ; Initiation à la pensée informatique."
        }
      ]
    },
    {
      "id": "mathematiques-mesures",
      "title": "Grandeurs, aires, angles et durées",
      "steps": [
        {
          "id": "mathematiques-mesures-unites",
          "title": "Choisir l’unité et convertir avec du sens",
          "notion": "Choisir l’unité et convertir avec du sens",
          "objective": "Je relie des unités de longueur, masse et capacité.",
          "lesson": "Choisis une unité adaptée puis utilise les relations : 1 m=100 cm ; 1 km=1000 m ; 1 kg=1000 g ; 1 L=1000 mL. Explique la relation au lieu de déplacer mécaniquement dans un tableau.",
          "example": "2,4 m=240 cm car chaque mètre vaut 100 cm. Une masse de 2,4 kg vaut 2400 g.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Convertis 3,25 m en centimètres. Réponds par le nombre de centimètres.",
              "answer": 325,
              "hint": "Chaque mètre vaut 100 centimètres.",
              "explanation": "3,25×100=325 cm.",
              "id": "mathematiques-mesures-unites-ex1",
              "unit": "cm"
            },
            {
              "type": "number",
              "prompt": "Convertis 750 mL en litres. Réponds par le nombre de litres.",
              "answer": 0.75,
              "hint": "Mille millilitres font un litre.",
              "explanation": "750÷1000=0,75 L.",
              "id": "mathematiques-mesures-unites-ex2",
              "unit": "L"
            },
            {
              "type": "number",
              "prompt": "Convertis 2,5 kg en grammes. Réponds par le nombre de grammes.",
              "answer": 2500,
              "hint": "Un kilogramme contient mille grammes.",
              "explanation": "2,5×1000=2500 g.",
              "id": "mathematiques-mesures-unites-ex3",
              "unit": "g"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-perimetre",
          "title": "Mesurer le contour",
          "notion": "Mesurer le contour",
          "objective": "Je distingue périmètre et aire.",
          "lesson": "Le périmètre est la longueur du contour. Additionne les longueurs des côtés, avec la même unité. On peut établir une règle pour une figure, sans réciter une formule sans comprendre.",
          "example": "Un rectangle de 8 cm sur 3 cm a deux côtés de 8 cm et deux de 3 cm : contour 8+3+8+3=22 cm.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un carré a des côtés de 6 cm. Quel est son périmètre en centimètres ?",
              "answer": 24,
              "hint": "Le contour comporte quatre côtés égaux.",
              "explanation": "6+6+6+6=24 cm.",
              "id": "mathematiques-mesures-perimetre-ex1",
              "unit": "cm"
            },
            {
              "type": "number",
              "prompt": "Un rectangle mesure 7,5 m de long et 2 m de large. Quel est son périmètre en mètres ?",
              "answer": 19,
              "hint": "Deux longueurs et deux largeurs.",
              "explanation": "7,5+2+7,5+2=19 m.",
              "id": "mathematiques-mesures-perimetre-ex2",
              "unit": "m"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-aire",
          "title": "Comparer et déterminer une aire",
          "notion": "Comparer et déterminer une aire",
          "objective": "Je mesure une surface en unités d’aire.",
          "lesson": "L’aire mesure la surface occupée, pas le contour. Compare par superposition, découpage ou comptage de carreaux de même taille. Deux figures de même aire n’ont pas nécessairement le même périmètre.",
          "example": "Un rectangle de 3 rangées de 4 carreaux a une aire de 12 carreaux.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une figure couvre 8 carreaux entiers et 6 demi-carreaux. Quelle est son aire en carreaux ?",
              "answer": 11,
              "hint": "Deux demi-carreaux forment un carreau.",
              "explanation": "8+6÷2=11 carreaux.",
              "id": "mathematiques-mesures-aire-ex1"
            },
            {
              "type": "choice",
              "prompt": "Deux figures de même aire ont-elles toujours le même périmètre ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Non",
              "hint": "On peut répartir les mêmes carreaux autrement.",
              "explanation": "Un rectangle de 1×4 et un carré de 2×2 ont une aire de 4, mais des périmètres de 10 et 8 unités.",
              "id": "mathematiques-mesures-aire-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-airesunites",
          "title": "Passer entre cm², dm² et m²",
          "notion": "Passer entre cm², dm² et m²",
          "objective": "Je convertis des aires en comprenant le carré unité.",
          "lesson": "Un carré de 1 dm de côté mesure 10 cm sur 10 cm ; il contient donc 100 cm². De même, 1 m²=100 dm²=10 000 cm². Les conversions d’aire ne suivent pas le même facteur que les longueurs.",
          "example": "2 dm²=200 cm² et non 20 cm².",
          "exercises": [
            {
              "type": "number",
              "prompt": "Convertis 3 dm² en cm². Réponds par le nombre de centimètres carrés.",
              "answer": 300,
              "hint": "Un décimètre carré contient cent centimètres carrés.",
              "explanation": "3×100=300 cm².",
              "id": "mathematiques-mesures-airesunites-ex1",
              "unit": "cm²"
            },
            {
              "type": "number",
              "prompt": "Convertis 250 dm² en m². Réponds par le nombre de mètres carrés.",
              "answer": 2.5,
              "hint": "100 dm² forment 1 m².",
              "explanation": "250÷100=2,5 m².",
              "id": "mathematiques-mesures-airesunites-ex2",
              "unit": "m²"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-rectangles",
          "title": "Déterminer l’aire d’un rectangle",
          "notion": "Déterminer l’aire d’un rectangle",
          "objective": "Je compte les unités carrées par rangées.",
          "lesson": "Pour un rectangle, le nombre d’unités carrées est le nombre de rangées multiplié par le nombre de carrés d’une rangée. L’aire est donc longueur×largeur lorsque les deux longueurs sont exprimées dans la même unité.",
          "example": "Un rectangle de 5 cm sur 3 cm contient 3 rangées de 5 cm² : aire 15 cm².",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une feuille rectangulaire mesure 12 cm sur 8 cm. Quelle est son aire en cm² ?",
              "answer": 96,
              "hint": "Compte huit rangées de douze carrés de 1 cm².",
              "explanation": "12×8=96 cm².",
              "id": "mathematiques-mesures-rectangles-ex1",
              "unit": "cm²"
            },
            {
              "type": "number",
              "prompt": "Un carré a un côté de 7 m. Quelle est son aire en m² ?",
              "answer": 49,
              "hint": "Le carré est aussi un rectangle : sept rangées de sept.",
              "explanation": "7×7=49 m².",
              "id": "mathematiques-mesures-rectangles-ex2",
              "unit": "m²"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-angles",
          "title": "Comparer et nommer les angles",
          "notion": "Comparer et nommer les angles",
          "objective": "Je reconnais sommet, côtés et ouverture d’un angle.",
          "lesson": "Un angle est formé par deux demi-droites de même origine, le sommet. Sa grandeur dépend de l’ouverture, pas de la longueur dessinée des côtés. Un angle droit mesure 90°. Un angle aigu est plus petit, un angle obtus plus grand que l’angle droit et plus petit que l’angle plat.",
          "example": "Pour comparer, superpose les sommets et un côté ou utilise un gabarit. Dans l’angle ABC, B est le sommet.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Combien de degrés mesure un angle droit ?",
              "answer": 90,
              "hint": "C’est l’unité de référence étudiée.",
              "explanation": "Un angle droit mesure 90°.",
              "id": "mathematiques-mesures-angles-ex1",
              "unit": "°"
            },
            {
              "type": "choice",
              "prompt": "Dans l’angle ABC, où est le sommet ?",
              "options": [
                "A",
                "B",
                "C"
              ],
              "answer": "B",
              "hint": "Le sommet est la lettre centrale.",
              "explanation": "Les deux côtés partent de B.",
              "id": "mathematiques-mesures-angles-ex2"
            },
            {
              "type": "choice",
              "prompt": "Si les côtés dessinés sont plus longs, l’angle est-il forcément plus grand ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Non",
              "hint": "Compare l’ouverture, pas les longueurs.",
              "explanation": "L’ouverture peut rester identique même avec des côtés plus longs.",
              "id": "mathematiques-mesures-angles-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-construireangles",
          "title": "Additionner et partager des angles",
          "notion": "Additionner et partager des angles",
          "objective": "Je construis des angles avec des gabarits et des pliages.",
          "lesson": "Pour additionner deux angles, place leurs ouvertures côte à côte avec le même sommet, sans recouvrement. Pour prendre la moitié, plie un gabarit en faisant coïncider ses côtés. Le rapporteur n’est pas requis au CM2.",
          "example": "La moitié d’un angle droit vaut 45° ; deux angles droits côte à côte forment un angle plat.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Quelle est la moitié de 90° ?",
              "answer": 45,
              "hint": "Partage un angle droit en deux ouvertures égales.",
              "explanation": "90÷2=45°.",
              "id": "mathematiques-mesures-construireangles-ex1",
              "unit": "°"
            },
            {
              "type": "guided",
              "prompt": "Découpe deux gabarits d’angles aigus avec un adulte. Construis leur somme puis la moitié de l’un par pliage.",
              "criteria": [
                "Les sommets et les côtés de départ coïncident pour la comparaison.",
                "La somme juxtapose les deux ouvertures sans les confondre.",
                "Le pliage partage l’angle en deux ouvertures égales."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-mesures-construireangles-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-horloge",
          "title": "Lire et représenter heure, minute et seconde",
          "notion": "Lire et représenter heure, minute et seconde",
          "objective": "Je lis l’heure et je place les aiguilles.",
          "lesson": "La petite aiguille indique les heures et avance progressivement. La grande aiguille fait un tour en 60 minutes ; la trotteuse, si elle existe, en 60 secondes. 1 h=60 min et 1 min=60 s.",
          "example": "À 3 h 30, la grande aiguille est sur 6 et la petite entre 3 et 4.",
          "exercises": [
            {
              "type": "number",
              "prompt": "La grande aiguille est sur 9. Combien de minutes indique-t-elle ?",
              "answer": 45,
              "hint": "Chaque nombre représente cinq minutes pour la grande aiguille.",
              "explanation": "9×5=45 minutes.",
              "id": "mathematiques-mesures-horloge-ex1"
            },
            {
              "type": "guided",
              "prompt": "Dessine une horloge à aiguilles montrant 10 h 20 min 30 s.",
              "criteria": [
                "La grande aiguille indique 20 minutes, sur le 4.",
                "La petite aiguille est entre 10 et 11, plus proche de 10.",
                "La trotteuse indique 30 secondes, sur le 6."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-mesures-horloge-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        },
        {
          "id": "mathematiques-mesures-durees",
          "title": "Calculer une durée",
          "notion": "Calculer une durée",
          "objective": "Je calcule avec des heures, minutes et secondes.",
          "lesson": "Les durées utilisent la base soixante, pas la base cent : 1 h 30 min n’est pas 1,30 h. Fais des bonds entre deux horaires ou convertis dans une unité commune.",
          "example": "De 9 h 45 à 11 h 10 : 15 min jusqu’à 10 h, puis 1 h et 10 min ; total 1 h 25 min.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une séance commence à 14 h 35 et finit à 16 h 05. Quelle est sa durée en minutes ?",
              "answer": 90,
              "hint": "De 14 h 35 à 15 h :25 min ; puis 65 min.",
              "explanation": "25+60+5=90 minutes.",
              "id": "mathematiques-mesures-durees-ex1",
              "unit": "min"
            },
            {
              "type": "number",
              "prompt": "Deux courses durent 1 min 48 s et 2 min 25 s. Quelle durée totale en secondes ?",
              "answer": 253,
              "hint": "Convertis chaque durée en secondes.",
              "explanation": "108+145=253 s, soit 4 min 13 s.",
              "id": "mathematiques-mesures-durees-ex2",
              "unit": "s"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Grandeurs et mesures : acquis antérieurs ; Les aires ; Les angles ; Le repérage dans le temps et les durées."
        }
      ]
    },
    {
      "id": "mathematiques-geometrie",
      "title": "Figures, solides et déplacements",
      "steps": [
        {
          "id": "mathematiques-geometrie-vocabulaire",
          "title": "Choisir les bons mots et instruments",
          "notion": "Choisir les bons mots et instruments",
          "objective": "Je distingue droite, segment et demi-droite.",
          "lesson": "Une droite est illimitée des deux côtés ; un segment a deux extrémités ; une demi-droite a une origine et se prolonge d’un côté. La règle trace, la règle graduée mesure, l’équerre vérifie l’angle droit et le compas reporte une longueur ou trace un cercle.",
          "example": "Le segment [AB] a A et B pour extrémités. La notation est toujours accompagnée du mot segment dans les consignes.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quel instrument sert à vérifier un angle droit ?",
              "options": [
                "Équerre",
                "Compas seul",
                "Chronomètre"
              ],
              "answer": "Équerre",
              "hint": "Cherche l’instrument avec un angle droit de référence.",
              "explanation": "L’équerre permet de vérifier la perpendicularité.",
              "id": "mathematiques-geometrie-vocabulaire-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quelle figure a deux extrémités ?",
              "options": [
                "Un segment",
                "Une droite",
                "Une demi-droite"
              ],
              "answer": "Un segment",
              "hint": "Deux points en limitent la longueur.",
              "explanation": "Une droite n’a pas d’extrémité, une demi-droite a une origine, un segment en a deux.",
              "id": "mathematiques-geometrie-vocabulaire-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-droites",
          "title": "Parallèles et perpendiculaires",
          "notion": "Parallèles et perpendiculaires",
          "objective": "Je reconnais et je construis des relations entre droites.",
          "lesson": "Deux droites perpendiculaires se coupent en formant un angle droit. Deux droites parallèles d’un même plan ne se coupent pas, même prolongées. Deux droites perpendiculaires à une même droite sont parallèles.",
          "example": "Les côtés opposés d’un rectangle sont parallèles ; deux côtés voisins sont perpendiculaires.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Deux droites qui forment un angle droit sont…",
              "options": [
                "perpendiculaires",
                "forcément parallèles",
                "toujours confondues"
              ],
              "answer": "perpendiculaires",
              "hint": "Un angle droit est le critère utile.",
              "explanation": "Elles sont perpendiculaires.",
              "id": "mathematiques-geometrie-droites-ex1"
            },
            {
              "type": "guided",
              "prompt": "Trace une droite puis une droite perpendiculaire avec l’équerre. Trace ensuite une seconde perpendiculaire à la première droite.",
              "criteria": [
                "Les angles droits sont vérifiés et codés.",
                "Les deux perpendiculaires distinctes sont reconnues parallèles.",
                "L’adulte observe l’usage de la règle et de l’équerre."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-droites-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-triangles",
          "title": "Décrire et construire les triangles",
          "notion": "Décrire et construire les triangles",
          "objective": "Je reconnais les triangles par leurs propriétés.",
          "lesson": "Un triangle a trois côtés. Rectangle : un angle droit ; isocèle : au moins deux côtés de même longueur ; équilatéral : trois côtés de même longueur et trois angles égaux. Un dessin à main levée ne suffit pas à vérifier.",
          "example": "Un triangle de côtés 5 cm, 5 cm et 3 cm est isocèle ; le compas peut reporter les côtés égaux.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Un triangle a trois côtés de 4 cm. Il est…",
              "options": [
                "équilatéral",
                "rectangle seulement",
                "un quadrilatère"
              ],
              "answer": "équilatéral",
              "hint": "Compare ses trois côtés.",
              "explanation": "Trois côtés de même longueur définissent un triangle équilatéral.",
              "id": "mathematiques-geometrie-triangles-ex1"
            },
            {
              "type": "guided",
              "prompt": "Construis un triangle dont les côtés mesurent 5 cm, 5 cm et 6 cm, avec règle et compas.",
              "criteria": [
                "Les trois longueurs sont respectées.",
                "Les deux côtés de 5 cm sont repérés.",
                "Je nomme le triangle isocèle et j’explique ma construction."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-triangles-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-quadrilateres",
          "title": "Comparer les quadrilatères et polygones",
          "notion": "Comparer les quadrilatères et polygones",
          "objective": "Je classe des figures en utilisant leur définition.",
          "lesson": "Un quadrilatère a quatre côtés. Rectangle : quatre angles droits ; losange : quatre côtés égaux ; carré : les deux. Un trapèze possède au moins une paire de côtés opposés parallèles ; les conventions de classement peuvent varier et doivent être annoncées. Un pentagone a cinq côtés, un hexagone six.",
          "example": "Un carré est aussi un rectangle et un losange. Un trapèze rectangle a une paire de côtés parallèles et des angles droits.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle propriété suffit à définir un rectangle parmi les quadrilatères ?",
              "options": [
                "Quatre angles droits",
                "Quatre côtés égaux seulement",
                "Un côté horizontal"
              ],
              "answer": "Quatre angles droits",
              "hint": "Ne te fie pas à l’orientation du dessin.",
              "explanation": "Un rectangle peut être incliné ; ses quatre angles restent droits.",
              "id": "mathematiques-geometrie-quadrilateres-ex1"
            },
            {
              "type": "number",
              "prompt": "Combien de côtés a un hexagone ?",
              "answer": 6,
              "hint": "Pense au préfixe hexa-.",
              "explanation": "Un hexagone est un polygone à six côtés.",
              "id": "mathematiques-geometrie-quadrilateres-ex2"
            },
            {
              "type": "guided",
              "prompt": "Construis un rectangle de 6 cm sur 4 cm, puis un carré de côté 4 cm.",
              "criteria": [
                "Les angles droits sont vérifiés.",
                "Les longueurs et le parallélisme des côtés opposés sont contrôlés.",
                "Je compare les propriétés sans me fier à l’apparence."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-quadrilateres-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-cercle",
          "title": "Cercle et disque",
          "notion": "Cercle et disque",
          "objective": "Je décris un cercle par la distance à son centre.",
          "lesson": "Un cercle est l’ensemble des points situés à la même distance de son centre. Le disque comprend le cercle et l’intérieur. Le rayon relie centre et cercle ; le diamètre traverse le centre et vaut deux rayons.",
          "example": "Pour un rayon de 3 cm, le diamètre est 6 cm. Un point à 2 cm du centre est dans le disque mais pas sur le cercle.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un cercle a un diamètre de 10 cm. Quel est son rayon en centimètres ?",
              "answer": 5,
              "hint": "Le diamètre est le double du rayon.",
              "explanation": "10÷2=5 cm.",
              "id": "mathematiques-geometrie-cercle-ex1",
              "unit": "cm"
            },
            {
              "type": "guided",
              "prompt": "Trace au compas un cercle de centre O et de rayon 4 cm. Place un point sur le cercle et un autre à l’intérieur.",
              "criteria": [
                "L’écartement du compas reste égal au rayon.",
                "Le centre est identifié.",
                "Je distingue les points du cercle et ceux du disque."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-cercle-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-programme",
          "title": "Suivre et écrire une construction",
          "notion": "Suivre et écrire une construction",
          "objective": "Je décris une construction sans ambiguïté.",
          "lesson": "Un programme de construction précise l’ordre, les longueurs et les relations. Nomme les points au fur et à mesure. Exécute le programme avec les outils puis vérifie chaque condition.",
          "example": "Tracer le segment [AB] de 6 cm. Tracer le cercle de centre A passant par B. Tout point du cercle est à 6 cm de A.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "On trace un cercle de centre A passant par B avec AB=6 cm. Quel est son rayon ?",
              "options": [
                "3 cm",
                "6 cm",
                "12 cm"
              ],
              "answer": "6 cm",
              "hint": "Le rayon va du centre à un point du cercle.",
              "explanation": "AB est un rayon, donc il mesure 6 cm.",
              "id": "mathematiques-geometrie-programme-ex1"
            },
            {
              "type": "guided",
              "prompt": "Écris et fais exécuter par un adulte un programme pour construire un carré de côté 5 cm et ses deux diagonales.",
              "criteria": [
                "Les points et les longueurs sont définis dans un ordre réalisable.",
                "Les angles droits sont explicités.",
                "Le dessin obtenu permet de vérifier le programme."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-programme-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-symetrie",
          "title": "Construire un symétrique sur quadrillage",
          "notion": "Construire un symétrique sur quadrillage",
          "objective": "Je complète une figure par symétrie axiale.",
          "lesson": "Deux points symétriques sont de part et d’autre de l’axe, à la même distance perpendiculaire de celui-ci. Un point sur l’axe reste fixe. Sur quadrillage, on travaille avec des axes verticaux, horizontaux et diagonaux.",
          "example": "Si un point est à trois carreaux à gauche d’un axe vertical, son symétrique est à trois carreaux à droite, sur la même ligne.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un point est à 4 carreaux de l’axe vertical. À combien de carreaux de l’axe est son symétrique ?",
              "answer": 4,
              "hint": "Les distances à l’axe sont égales.",
              "explanation": "Le point image reste à 4 carreaux, de l’autre côté.",
              "id": "mathematiques-geometrie-symetrie-ex1"
            },
            {
              "type": "guided",
              "prompt": "Dessine sur quadrillage un triangle et un axe vertical ; construis son symétrique. Recommence avec un axe horizontal puis diagonal.",
              "criteria": [
                "Les sommets sont placés à distances égales de l’axe.",
                "Les points sur l’axe restent fixes.",
                "Le pliage ou un calque permet de contrôler les trois constructions."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-symetrie-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-solides",
          "title": "Nommer et décrire des solides",
          "notion": "Nommer et décrire des solides",
          "objective": "Je reconnais les solides et leurs faces.",
          "lesson": "Cube, pavé, pyramide et prisme droit ont des faces planes ; le cube a six faces carrées. Un prisme droit a deux bases polygonales identiques et des faces latérales rectangulaires. Cône, cylindre et boule possèdent des surfaces courbes. Sur une perspective, certaines arêtes sont cachées.",
          "example": "Un pavé a six faces rectangulaires, douze arêtes et huit sommets. Les arêtes cachées peuvent être représentées en pointillés.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Combien de faces possède un cube ?",
              "answer": 6,
              "hint": "Pense aux faces d’un dé.",
              "explanation": "Un cube possède 6 faces carrées.",
              "id": "mathematiques-geometrie-solides-ex1"
            },
            {
              "type": "choice",
              "prompt": "Quel solide a deux bases circulaires et une surface latérale courbe ?",
              "options": [
                "Un cylindre",
                "Une pyramide",
                "Un cube"
              ],
              "answer": "Un cylindre",
              "hint": "Compare les formes des bases.",
              "explanation": "Le cylindre a deux disques comme bases.",
              "id": "mathematiques-geometrie-solides-ex2"
            },
            {
              "type": "guided",
              "prompt": "Observe une boîte, un cône en papier et une balle. Classe-les puis décris un pavé et un prisme droit à base triangulaire.",
              "criteria": [
                "Je nomme correctement pavé, cône, boule et prisme.",
                "Je distingue faces, arêtes et sommets pour les polyèdres.",
                "Je peux reconnaître que des éléments restent cachés sur un dessin."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-solides-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-patrons",
          "title": "Reconnaître et construire un patron",
          "notion": "Reconnaître et construire un patron",
          "objective": "Je relie un patron à son solide.",
          "lesson": "Un patron est un assemblage de faces qui se replie pour former un solide sans trou ni chevauchement. Six carrés ne forment pas toujours un patron de cube : il faut pouvoir fermer les six faces.",
          "example": "Une rangée de quatre carrés avec un carré au-dessus et un au-dessous du deuxième carré est un patron possible de cube.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Six carrés alignés forment-ils un patron de cube ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Non",
              "hint": "Imagine les faces en les repliant : peut-on fermer le dessus et le dessous ?",
              "explanation": "Une simple bande ne permet pas de fermer les six faces du cube.",
              "id": "mathematiques-geometrie-patrons-ex1"
            },
            {
              "type": "guided",
              "prompt": "Sur papier quadrillé, construis le patron décrit dans l’exemple, découpe avec l’aide adaptée et vérifie le pliage. Puis observe le patron d’une boîte rectangulaire.",
              "criteria": [
                "Les six faces du cube se ferment sans chevauchement.",
                "Je distingue un patron de cube d’un patron de pavé à faces non toutes carrées.",
                "Je peux expliquer pourquoi un assemblage proposé ne convient pas."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-patrons-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        },
        {
          "id": "mathematiques-geometrie-deplacements",
          "title": "Coder un déplacement et compter des cubes",
          "notion": "Coder un déplacement et compter des cubes",
          "objective": "Je produis des instructions spatiales précises.",
          "lesson": "Sur un quadrillage, précise départ, orientation et unité de déplacement. Tourner change l’orientation, avancer change la position. Pour compter un assemblage de cubes, organise par couches et n’oublie pas les cubes cachés.",
          "example": "Départ vers le nord : avancer 2, tourner à droite, avancer 3 mène deux cases au nord et trois à l’est du départ.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Un pavé est formé de 3 couches de 2 rangées de 4 cubes. Combien de petits cubes contient-il ?",
              "answer": 24,
              "hint": "Compte une couche puis les trois couches.",
              "explanation": "2×4=8 cubes par couche ; 3×8=24.",
              "id": "mathematiques-geometrie-deplacements-ex1"
            },
            {
              "type": "choice",
              "prompt": "Un robot regarde vers le nord puis tourne à droite. Vers où regarde-t-il ?",
              "options": [
                "Est",
                "Ouest",
                "Sud"
              ],
              "answer": "Est",
              "hint": "Imagine-toi à la place du robot.",
              "explanation": "Un quart de tour à droite depuis le nord mène vers l’est.",
              "id": "mathematiques-geometrie-deplacements-ex2"
            },
            {
              "type": "guided",
              "prompt": "Sur un plan quadrillé, écris un trajet de cinq instructions jusqu’à un lieu choisi. Fais-le tester par un adulte.",
              "criteria": [
                "Départ, orientation et unité sont indiqués.",
                "Le trajet atteint le lieu prévu.",
                "Je corrige une instruction ambiguë après le test."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-geometrie-deplacements-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Espace et géométrie : La géométrie plane ; Les solides ; Déplacements dans l’espace ; Initiation à la pensée informatique."
        }
      ]
    },
    {
      "id": "mathematiques-donnees",
      "title": "Organiser et lire des données",
      "steps": [
        {
          "id": "mathematiques-donnees-tableau",
          "title": "Lire un tableau simple ou à double entrée",
          "notion": "Lire un tableau simple ou à double entrée",
          "objective": "Je repère une donnée en croisant ligne et colonne.",
          "lesson": "Lis le titre, les catégories et l’unité. Une donnée à double entrée se trouve au croisement d’une ligne et d’une colonne. Pour résoudre un problème, identifie d’abord les cases utiles.",
          "example": "Si la ligne « mardi » et la colonne « vélo » se croisent sur 8, huit élèves sont venus à vélo mardi : pas huit pendant toute la semaine.",
          "exercises": [
            {
              "type": "number",
              "prompt": "D’après le tableau, combien d’élèves sont venus à pied lundi ?",
              "answer": 12,
              "hint": "Croise la ligne lundi et la colonne à pied.",
              "explanation": "La case lundi/à pied indique 12.",
              "id": "mathematiques-donnees-tableau-ex1"
            },
            {
              "type": "number",
              "prompt": "Combien de venues à vélo sont comptées sur les deux jours ?",
              "answer": 14,
              "hint": "Additionne les deux cases de la colonne vélo.",
              "explanation": "Lundi 6 et mardi 8 : 6+8=14 venues, pas forcément 14 élèves différents.",
              "id": "mathematiques-donnees-tableau-ex2"
            }
          ],
          "visual": {
            "type": "table",
            "caption": "Déplacements d’une classe — données fictives pour l’exercice",
            "headers": [
              "Jour",
              "À pied",
              "À vélo",
              "Autre"
            ],
            "rows": [
              [
                "Lundi",
                "12",
                "6",
                "7"
              ],
              [
                "Mardi",
                "10",
                "8",
                "7"
              ]
            ]
          },
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Organisation et gestion de données."
        },
        {
          "id": "mathematiques-donnees-barres",
          "title": "Lire un diagramme en barres",
          "notion": "Lire un diagramme en barres",
          "objective": "Je lis une valeur en respectant l’échelle.",
          "lesson": "Dans un diagramme en barres, la longueur ou la hauteur représente une quantité selon une échelle commune. Des catégories différentes occupent des barres distinctes. Ne compte pas des symboles sans lire la légende.",
          "example": "Avec une graduation de 2 en 2, une barre qui atteint la quatrième graduation vaut 8 et non 4.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Sur le diagramme, combien de romans ont été empruntés ?",
              "answer": 10,
              "hint": "Repère la barre Romans et lis sa hauteur sur l’axe gradué.",
              "explanation": "La barre Romans atteint 10 sur l’axe du nombre de livres.",
              "id": "mathematiques-donnees-barres-ex1"
            },
            {
              "type": "number",
              "prompt": "Combien de livres de plus pour les romans que pour les documentaires ?",
              "answer": 4,
              "hint": "Lis les valeurs des deux barres avant de les soustraire.",
              "explanation": "Romans 10 ; documentaires 6 ; différence 4.",
              "id": "mathematiques-donnees-barres-ex2"
            }
          ],
          "visual": {
            "type": "chart",
            "kind": "bar",
            "caption": "Livres empruntés par genre — données pédagogiques fictives",
            "labels": [
              "Romans",
              "Documentaires",
              "Poésie"
            ],
            "values": [
              10,
              6,
              4
            ],
            "unit": "livres",
            "yLabel": "Nombre de livres"
          },
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Organisation et gestion de données."
        },
        {
          "id": "mathematiques-donnees-courbe",
          "title": "Lire une courbe et une évolution",
          "notion": "Lire une courbe et une évolution",
          "objective": "Je distingue une valeur et une variation.",
          "lesson": "Une courbe relie des mesures ordonnées, souvent dans le temps. Lis les axes et leur unité. Pour une variation, compare les valeurs de départ et d’arrivée ; une baisse n’indique pas toujours une quantité devenue négative.",
          "example": "Une plante passe de 8 cm à 11 cm : elle a grandi de 3 cm. Les valeurs intermédiaires ne sont connues que si elles ont été mesurées.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Les mesures d’une plante sont 4 cm lundi, 6 cm mercredi et 9 cm vendredi. De combien a-t-elle grandi du lundi au vendredi, en centimètres ?",
              "answer": 5,
              "hint": "Compare la première et la dernière mesure.",
              "explanation": "9−4=5 cm.",
              "id": "mathematiques-donnees-courbe-ex1",
              "unit": "cm"
            },
            {
              "type": "choice",
              "prompt": "Peut-on affirmer sa hauteur exacte mardi avec ces seules mesures ?",
              "options": [
                "Oui, forcément 5 cm",
                "Non, mardi n’a pas été mesuré"
              ],
              "answer": "Non, mardi n’a pas été mesuré",
              "hint": "Une ligne entre deux mesures n’est pas une mesure quotidienne.",
              "explanation": "Une interpolation serait une estimation, pas une observation exacte.",
              "id": "mathematiques-donnees-courbe-ex2"
            }
          ],
          "visual": {
            "type": "chart",
            "kind": "line",
            "caption": "Hauteur d’une plante — mesures pédagogiques fictives",
            "labels": [
              "Lundi",
              "Mercredi",
              "Vendredi"
            ],
            "values": [
              4,
              6,
              9
            ],
            "unit": "cm",
            "xLabel": "Jour de mesure",
            "yLabel": "Hauteur (cm)"
          },
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Organisation et gestion de données."
        },
        {
          "id": "mathematiques-donnees-circulaire",
          "title": "Interpréter un diagramme circulaire",
          "notion": "Interpréter un diagramme circulaire",
          "objective": "Je relie une part du disque à une quantité.",
          "lesson": "Un diagramme circulaire représente un tout partagé. Une moitié du disque représente la moitié du total ; un quart représente un quart. Vérifie la légende et le total ; l’apparence seule ne donne pas un effectif.",
          "example": "Si la moitié des 24 livres empruntés sont des romans, cela fait 12 romans. Un quart correspond à 6 livres.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une enquête porte sur 32 élèves. Un quart du disque correspond au vélo. Combien d’élèves ont choisi le vélo ?",
              "answer": 8,
              "hint": "Calcule un quart de 32.",
              "explanation": "32÷4=8 élèves.",
              "id": "mathematiques-donnees-circulaire-ex1"
            },
            {
              "type": "number",
              "prompt": "Sur les 32 élèves, la moitié vient à pied et un quart à vélo. Combien utilisent les autres moyens ?",
              "answer": 8,
              "hint": "La moitié fait 16 et le quart 8.",
              "explanation": "32−16−8=8 élèves.",
              "id": "mathematiques-donnees-circulaire-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Organisation et gestion de données.",
          "visual": {
            "type": "chart",
            "kind": "pie",
            "caption": "Déplacements de 32 élèves — enquête pédagogique fictive",
            "labels": [
              "À pied",
              "Vélo",
              "Autres"
            ],
            "values": [
              16,
              8,
              8
            ],
            "unit": "élèves",
            "total": 32
          }
        },
        {
          "id": "mathematiques-donnees-enquete",
          "title": "Recueillir et représenter des données",
          "notion": "Recueillir et représenter des données",
          "objective": "Je mène une petite enquête et je choisis une représentation.",
          "lesson": "Choisis une question claire et des catégories sans ambiguïté. Note chaque réponse une fois, compte les effectifs puis vérifie le total. Tu peux construire un tableau, un diagramme en barres ou placer des points dans un repère. Une petite enquête ne décrit pas toute la population.",
          "example": "Pour observer des oiseaux, précise le lieu et la durée ; pour des personnes, ne collecte pas de données personnelles sensibles.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Sur une enquête à 12 réponses, les effectifs sont 4, 5 et 3. Le total est-il cohérent ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Oui",
              "hint": "Additionne les effectifs.",
              "explanation": "4+5+3=12 : le total correspond aux réponses comptées.",
              "id": "mathematiques-donnees-enquete-ex1"
            },
            {
              "type": "guided",
              "prompt": "Relève pendant cinq jours la hauteur d’une plante ou le nombre d’oiseaux observés au même endroit pendant cinq minutes. Produis un tableau puis des points dans un repère ou un diagramme en barres.",
              "criteria": [
                "La méthode et les unités sont précisées.",
                "Chaque observation est enregistrée sans inventer les données manquantes.",
                "La représentation est titrée et lisible.",
                "Je formule une conclusion limitée à mes observations."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-donnees-enquete-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Organisation et gestion de données."
        }
      ]
    },
    {
      "id": "mathematiques-probabilites",
      "title": "Hasard, chances et expériences",
      "steps": [
        {
          "id": "mathematiques-probabilites-issues",
          "title": "Recenser les issues possibles",
          "notion": "Recenser les issues possibles",
          "objective": "Je trouve les résultats possibles d’une expérience aléatoire.",
          "lesson": "Une expérience est aléatoire si son résultat n’est pas connu avant de la réaliser. Une issue est un résultat possible. Un événement peut réunir plusieurs issues. On peut décrire certain, impossible ou possible sans encore mesurer les chances.",
          "example": "Avec un dé ordinaire, les issues sont 1,2,3,4,5,6. « Obtenir un nombre pair » rassemble 2,4,6.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Combien d’issues réalisent « obtenir un nombre supérieur à 4 » sur un dé à six faces numérotées de 1 à 6 ?",
              "answer": 2,
              "hint": "Liste les résultats possibles supérieurs à 4.",
              "explanation": "Les issues 5 et 6 conviennent : il y en a deux.",
              "id": "mathematiques-probabilites-issues-ex1"
            },
            {
              "type": "choice",
              "prompt": "Avec ce dé, obtenir 8 est…",
              "options": [
                "impossible",
                "certain",
                "aussi probable que 3"
              ],
              "answer": "impossible",
              "hint": "8 ne figure sur aucune face.",
              "explanation": "Aucune issue ne correspond à 8.",
              "id": "mathematiques-probabilites-issues-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Les probabilités."
        },
        {
          "id": "mathematiques-probabilites-chances",
          "title": "Exprimer « a chances sur b »",
          "notion": "Exprimer « a chances sur b »",
          "objective": "Je quantifie une probabilité quand les issues sont équiprobables.",
          "lesson": "Équiprobables signifie que toutes les issues ont la même chance. Compte les issues favorables puis toutes les issues. On écrit « a chances sur b ». Ne suppose pas des chances égales si le matériel n’est pas équilibré.",
          "example": "Sur un dé équilibré, obtenir un nombre pair a 3 chances sur 6 : les issues 2,4,6 sur six faces.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une boîte contient 3 jetons rouges et 5 bleus, identiques au toucher. Pour la chance de tirer rouge, quel nombre faut-il mettre dans « 3 chances sur … » ?",
              "answer": 8,
              "hint": "Compte tous les jetons.",
              "explanation": "Il y a 8 jetons équiprobables ; 3 sont rouges.",
              "id": "mathematiques-probabilites-chances-ex1"
            },
            {
              "type": "number",
              "prompt": "Pour un dé équilibré de 1 à 6, combien d’issues sont favorables à « obtenir moins de 3 » ?",
              "answer": 2,
              "hint": "Liste 1 et 2 ; 3 ne convient pas.",
              "explanation": "L’événement a 2 chances sur 6.",
              "id": "mathematiques-probabilites-chances-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Les probabilités."
        },
        {
          "id": "mathematiques-probabilites-comparer",
          "title": "Comparer des chances",
          "notion": "Comparer des chances",
          "objective": "Je compare des probabilités simples.",
          "lesson": "Avec le même nombre total d’issues équiprobables, plus d’issues favorables signifie plus de chances. Avec des totaux différents, compare des parts équivalentes. Une probabilité ne prédit pas le prochain résultat avec certitude.",
          "example": "3 chances sur 4 représentent plus que 1 chance sur 4. 1 chance sur 2 représente autant que 2 sur 4.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle situation donne le plus de chances de tirer rouge ?",
              "options": [
                "3 rouges sur 8 jetons",
                "5 rouges sur 8 jetons"
              ],
              "answer": "5 rouges sur 8 jetons",
              "hint": "Les deux boîtes ont huit jetons.",
              "explanation": "Cinq issues favorables sur huit donnent davantage de chances que trois sur huit.",
              "id": "mathematiques-probabilites-comparer-ex1"
            },
            {
              "type": "choice",
              "prompt": "1 chance sur 2 et 3 chances sur 6 représentent…",
              "options": [
                "la même probabilité",
                "des probabilités différentes"
              ],
              "answer": "la même probabilité",
              "hint": "Compare les deux moitiés.",
              "explanation": "1/2=3/6 : c’est la même proportion d’issues favorables.",
              "id": "mathematiques-probabilites-comparer-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Les probabilités."
        },
        {
          "id": "mathematiques-probabilites-independance",
          "title": "Comprendre que le hasard ne se souvient pas",
          "notion": "Comprendre que le hasard ne se souvient pas",
          "objective": "Je distingue répétition et certitude.",
          "lesson": "Après un lancer de dé équilibré, les chances du lancer suivant restent les mêmes : le dé ne se souvient pas. Une suite inhabituelle est possible. Pour un tirage de jeton, remettre ou ne pas remettre le jeton change la situation.",
          "example": "Même après trois 6 de suite, le prochain lancer garde 1 chance sur 6 de donner 6 si les lancers sont indépendants.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Une pièce équilibrée a donné pile quatre fois. Au prochain lancer, face est-il certain ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Non",
              "hint": "La pièce ne compense pas les lancers précédents.",
              "explanation": "Le lancer suivant conserve une chance sur deux pour chaque face.",
              "id": "mathematiques-probabilites-independance-ex1"
            },
            {
              "type": "guided",
              "prompt": "Lance vingt fois une pièce avec un adulte et note les résultats. Compare ce qui est observé aux issues possibles.",
              "criteria": [
                "Les vingt résultats sont enregistrés sans les modifier.",
                "Je ne prétends pas que dix piles et dix faces soient obligatoires.",
                "J’explique que le prochain lancer ne dépend pas des précédents."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-probabilites-independance-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Les probabilités."
        },
        {
          "id": "mathematiques-probabilites-deuxetapes",
          "title": "Organiser une expérience en deux étapes",
          "notion": "Organiser une expérience en deux étapes",
          "objective": "Je recense les issues avec un tableau ou un arbre.",
          "lesson": "Pour deux épreuves indépendantes, associe chaque issue de la première à toutes celles de la seconde. Le tableau à double entrée ou l’arbre aide à compter. Précise toujours l’ordre des résultats.",
          "example": "Deux lancers de pièce donnent PP, PF, FP, FF. PF et FP sont différents car l’ordre change.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Deux lancers successifs d’une pièce équilibrée donnent PP, PF, FP, FF. Combien d’issues donnent exactement une fois pile ?",
              "answer": 2,
              "hint": "Ne garde ni PP ni FF.",
              "explanation": "PF et FP conviennent, soit 2 chances sur 4.",
              "id": "mathematiques-probabilites-deuxetapes-ex1"
            },
            {
              "type": "number",
              "prompt": "On lance une pièce puis un dé équilibré de 1 à 6. Combien d’issues possibles au total ?",
              "answer": 12,
              "hint": "Pour pile, six résultats ; pour face, six aussi.",
              "explanation": "2×6=12 issues équiprobables.",
              "id": "mathematiques-probabilites-deuxetapes-ex2"
            },
            {
              "type": "guided",
              "prompt": "Dessine un arbre pour deux lancers de pièce et colorie les branches donnant au moins une fois face.",
              "criteria": [
                "Les quatre issues sont présentes une seule fois.",
                "PF, FP et FF sont retenues.",
                "J’en déduis 3 chances sur 4 pour au moins une face."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-probabilites-deuxetapes-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. Organisation et gestion de données et probabilités : Les probabilités."
        }
      ]
    },
    {
      "id": "mathematiques-proportionnalite",
      "title": "Proportionnalité dans les grandeurs",
      "steps": [
        {
          "id": "mathematiques-proportionnalite-reconnaitre",
          "title": "Identifier une relation proportionnelle",
          "notion": "Identifier une relation proportionnelle",
          "objective": "Je vérifie si multiplier une quantité multiplie l’autre de la même façon.",
          "lesson": "Une situation est proportionnelle lorsque des quantités multipliées par un même nombre entraînent des quantités correspondantes multipliées de la même façon. Le contexte compte. La croissance d’un enfant et son âge ne sont pas proportionnels. On raisonne en mots, sans produit en croix ni tableau de proportionnalité.",
          "example": "Si un ruban coûte 2 € le mètre sans frais fixes, trois fois plus de longueur coûte trois fois plus cher.",
          "exercises": [
            {
              "type": "choice",
              "prompt": "Quelle situation est proportionnelle ?",
              "options": [
                "Le prix de pommes à 3 € le kilogramme sans remise ni frais fixes",
                "La taille d’un enfant selon son âge",
                "Le prix d’un taxi avec un forfait de départ"
              ],
              "answer": "Le prix de pommes à 3 € le kilogramme sans remise ni frais fixes",
              "hint": "Cherche la situation où doubler la quantité double le prix.",
              "explanation": "Sans coût fixe ni remise, deux fois plus de pommes coûte deux fois plus.",
              "id": "mathematiques-proportionnalite-reconnaitre-ex1"
            },
            {
              "type": "choice",
              "prompt": "À 10 ans, une enfant mesure 140 cm. Peut-on déduire qu’elle mesurera 280 cm à 20 ans ?",
              "options": [
                "Oui",
                "Non"
              ],
              "answer": "Non",
              "hint": "L’âge et la taille ne se multiplient pas ensemble.",
              "explanation": "La taille d’une personne n’est pas proportionnelle à son âge.",
              "id": "mathematiques-proportionnalite-reconnaitre-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. La proportionnalité : Identifier une situation de proportionnalité ; Savoir résoudre un problème de proportionnalité."
        },
        {
          "id": "mathematiques-proportionnalite-multiplier",
          "title": "Raisonner avec « fois plus » ou « fois moins »",
          "notion": "Raisonner avec « fois plus » ou « fois moins »",
          "objective": "Je résous un problème par multiplication ou partage des quantités.",
          "lesson": "Si la relation est proportionnelle, multiplie ou partage les deux grandeurs de la même façon. Explique le lien à l’oral ou à l’écrit ; n’applique pas une technique sans comprendre.",
          "example": "Une recette pour 4 personnes utilise 300 g de farine. Pour 8 personnes, il y a deux fois plus de personnes, donc 600 g de farine.",
          "exercises": [
            {
              "type": "number",
              "prompt": "Une recette pour 6 personnes demande 450 g de riz. Combien de grammes pour 12 personnes avec les mêmes portions ?",
              "answer": 900,
              "hint": "Deux fois plus de personnes, donc deux fois plus de riz.",
              "explanation": "450×2=900 g.",
              "id": "mathematiques-proportionnalite-multiplier-ex1"
            },
            {
              "type": "number",
              "prompt": "4 m de tissu coûtent 28 €. Quel est le prix de 2 m, sans remise ni frais fixes ?",
              "answer": 14,
              "hint": "Deux mètres, c’est deux fois moins que quatre.",
              "explanation": "28÷2=14 €.",
              "id": "mathematiques-proportionnalite-multiplier-ex2"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. La proportionnalité : Identifier une situation de proportionnalité ; Savoir résoudre un problème de proportionnalité."
        },
        {
          "id": "mathematiques-proportionnalite-additionner",
          "title": "Combiner des quantités connues",
          "notion": "Combiner des quantités connues",
          "objective": "Je résous un problème de proportionnalité en plusieurs étapes.",
          "lesson": "On peut additionner des quantités correspondantes ou combiner partage et multiplication. Le retour à l’unité est un raisonnement possible quand il est simple, pas une recette obligatoire. Au CM2, on reste dans des situations de grandeurs.",
          "example": "Si 2 cahiers coûtent 5 € et 4 cahiers 10 €, alors 6 cahiers coûtent 15 € car on réunit les deux achats sans frais supplémentaires.",
          "exercises": [
            {
              "type": "number",
              "prompt": "3 m de ruban coûtent 6 €. Sans remise ni frais fixes, combien coûtent 9 m ?",
              "answer": 18,
              "hint": "Neuf mètres, c’est trois fois trois mètres.",
              "explanation": "6×3=18 €.",
              "id": "mathematiques-proportionnalite-additionner-ex1"
            },
            {
              "type": "number",
              "prompt": "Pour 4 personnes, une soupe demande 600 mL d’eau. Combien de millilitres pour 6 personnes avec les mêmes portions ?",
              "answer": 900,
              "hint": "Six personnes, c’est quatre personnes et encore la moitié de quatre.",
              "explanation": "600 mL pour 4 personnes ; 300 mL pour 2 ; total 900 mL pour 6.",
              "id": "mathematiques-proportionnalite-additionner-ex2"
            },
            {
              "type": "guided",
              "prompt": "Explique deux démarches pour 5 carnets coûtant au total 15 € : quel serait le prix de 15 carnets aux mêmes conditions ?",
              "criteria": [
                "Je relie explicitement nombres de carnets et prix.",
                "Je peux dire trois fois plus de carnets, donc trois fois le prix : 45 €.",
                "Je peux vérifier par carnet : 3 € chacun, donc 15×3=45 €."
              ],
              "hint": "Reprends les critères un à un avec ton accompagnateur.",
              "explanation": "L’adulte échange avec toi, vérifie les critères et note ce qui reste à travailler. Une activité réalisée ne prouve pas à elle seule la maîtrise.",
              "id": "mathematiques-proportionnalite-additionner-ex3"
            }
          ],
          "prerequisite": "Si nécessaire, dessine la situation ou reprends l’exemple avant de calculer. Les exercices précédents du chapitre servent de préparation.",
          "sourceStatus": "CM2 explicite — organisation des étapes proposée",
          "sourceRef": "Programme du cycle 3, arrêté du 10 avril 2025, BO du 17 avril 2025 ; CM2 : rentrée 2026-2027. La proportionnalité : Identifier une situation de proportionnalité ; Savoir résoudre un problème de proportionnalité."
        }
      ]
    }
  ]
});
