# L’Atelier CM2 — année scolaire 2026-2027

Application statique pour apprendre et réviser, sans compte en ligne, publicité, clé API ni abonnement. Les contenus sont organisés par matière, chapitre, notion et étape. Les textes officiels applicables au **CM2** ont été consultés ; [SOURCES.md](SOURCES.md) distingue leurs calendriers d’application et [COUVERTURE_PROGRAMME.md](COUVERTURE_PROGRAMME.md) relie les compétences aux activités.

Cette version contient **340 étapes et 820 exercices ou activités**, répartis entre les onze disciplines et les enseignements transversaux. Les validations automatiques et les observations accompagnées sont distinctes. Consulter [RAPPORT_TESTS.md](RAPPORT_TESTS.md) pour les vérifications réellement exécutées et leurs limites.

## Télécharger et ouvrir

1. Ouvrir la branche de travail sur GitHub : https://github.com/daviddelplace62-max/app-CM2-2026-2027/tree/developpement/cm2-2026-2027 . La branche principale n’est pas modifiée automatiquement.
2. Choisir **Code**, puis **Download ZIP**. Le lien de l’archive finale effectivement vérifiée figurera dans le bilan de livraison.
3. Faire **Extraire tout** sur l’archive. Ne pas ouvrir uniquement `index.html` à l’intérieur du ZIP.
4. Dans le dossier extrait, repérer `index.html`, `styles.css`, `app.js`, `contents.js`, le dossier `contenus` et le dossier `ressources`. Conserver toute cette organisation.
5. Le code est prévu pour l’ouverture de `index.html` par double-clic : scripts classiques, aucune requête JSON, aucun module ni CDN. **Le navigateur cloud bloque toutefois file:// par politique administrateur ; le double-clic n’a pas été validé ici.** Si votre navigateur refuse l’ouverture locale, utiliser la publication Netlify ci-dessous, qui ne demande aucune installation sur le PC.

Une fois les fichiers chargés dans l’onglet, les leçons et exercices n’ont pas besoin d’un service externe. Les extraits musicaux sont inclus localement dans une bibliothèque audio embarquée. Cela ne promet pas une réouverture du site hors connexion : aucun service worker n’est installé.

## Premiers essais avec deux profils

1. Saisir un prénom ou un surnom ; ne pas inscrire de nom complet, adresse ou date de naissance.
2. Choisir **Fille** pour présélectionner l’univers nuages et arc-en-ciel, ou **Garçon** pour l’atelier mécanique. Les deux univers ont exactement les mêmes contenus, difficultés et points.
3. Ouvrir une matière et sa première étape. Soumettre une mauvaise réponse : un indice doit apparaître et l’étape suivante rester fermée. Une saisie vide ou illisible ne compte pas comme erreur.
4. Corriger les exercices pour avancer. Certaines étapes nécessitent aussi une observation accompagnée.
5. Revenir au tableau de bord puis ouvrir **Mon profil et mon univers**. Modifier le surnom ou le thème, et désactiver les animations si souhaité.
6. Dans **Mes profils**, créer un second profil : il doit commencer sans la progression du premier. Chaque matière garde sa position de reprise.
7. Recharger la page et choisir le premier profil pour contrôler la sauvegarde. Les tests détaillés et leurs résultats figurent dans le rapport.

Les données restent **dans ce navigateur, sur cet appareil et pour cette adresse de site**. Elles ne sont pas synchronisées. Navigation privée, effacement des données, changement de navigateur, nouveau site Netlify ou déplacement d’un dossier local peuvent rendre la sauvegarde inaccessible. Un bandeau prévient si le stockage est indisponible ; exporter avant de quitter.

## Accompagner l’apprentissage

Toutes les matières sont accessibles dès le départ. Dans chaque chapitre, les étapes se valident dans l’ordre. Les exercices automatiques donnent un indice après une erreur et permettent de réessayer sans limite. **Mes révisions** permet de reprendre les erreurs et les notions déjà réussies.

L’écriture, l’oral, les arts, la musique, l’EPS et les expériences comportent des activités guidées. L’enfant peut déclarer une activité réalisée ; un adulte observe ensuite les critères et confirme séparément. Le logiciel ne reconnaît ni la qualité d’un dessin, ni la prononciation, ni une performance motrice. L’observation est déclarative : aucune identité d’adulte n’est authentifiée et aucune attestation scolaire n’est délivrée.

Le parcours propose des révisions et des expériences ; il ne remplace pas les séances quotidiennes, les échanges en classe ou les situations physiques réelles prévues à l’école. Pour l’EPS, les activités aquatiques et la circulation, suivre les conditions d’encadrement indiquées. Les séances d’EVAR sont accompagnées et ne demandent aucune confidence personnelle enregistrée. Les sept œuvres locales sont une sélection de formes courtes ; conserver aussi les lectures personnelles et la fréquentation d’une bibliothèque.

Pour l’anglais, le bouton d’écoute utilise une **voix anglaise locale** du navigateur si elle existe. Un message explique son absence éventuelle et invite à lire avec un adulte. Aucun score automatique de prononciation n’est calculé. Les chants et extraits instrumentaux originaux de musique sont fournis dans l’application.

## Comprendre les résultats

- **Progression** : étapes obligatoires validées / toutes les étapes obligatoires prévues, même verrouillées. Ce n’est pas une moyenne des pourcentages des matières.
- **Points** : 10 par étape validée, une seule fois. Réviser ne donne pas de points supplémentaires.
- **Taux de réussite** : réponses automatiques correctes / toutes les réponses automatiques interprétables soumises, révisions comprises. Les saisies vides ou illisibles et les activités accompagnées sont exclues.
- **Activités** : exercices auto-corrigés, activités déclarées réalisées et observations d’adulte sont affichés séparément. Avancement et taux de réussite mesurent des choses différentes.

Aucun classement entre enfants ni retrait de points après erreur. Les anciennes activités `technique-v1` du prototype restent distinctes : elles ne deviennent pas des compétences scolaires et ne comptent pas dans la progression du programme.

## Sauvegarder et restaurer la progression

1. Ouvrir **Mon profil et mon univers**, puis **Exporter les profils JSON**. L’export contient tous les profils.
2. Conserver ce fichier dans un endroit privé. Il contient les surnoms, les essais et les notes écrites éventuellement saisies dans les activités. Ne pas le déposer dans GitHub ou Netlify.
3. Pour restaurer, choisir **Importer une sauvegarde JSON**, sélectionner le fichier puis lire la confirmation. **L’import remplace les profils présents** : exporter d’abord leur état actuel si nécessaire.
4. Les fichiers malformés sont refusés avant remplacement. Une annulation conserve les profils existants.
5. Pour changer d’appareil, transférer soi-même le JSON sur l’autre appareil et l’importer dans l’application. Rien n’est envoyé automatiquement.
6. **Supprimer ce profil** demande une confirmation et supprime ses données locales. Exporter avant si l’on veut pouvoir revenir en arrière.

## Déposer sur Netlify Drop et partager au smartphone

Aucun site n’a été déployé automatiquement. Vous décidez de la publication ; aucun accès administrateur à votre PC n’est demandé.

1. Télécharger et extraire l’archive comme ci-dessus. Choisir le dossier contenant **directement `index.html`**, avec ses sous-dossiers et documents.
2. Aller sur https://app.netlify.com/drop . Se connecter si Netlify le demande.
3. Glisser le dossier dans la zone de dépôt et attendre la fin du déploiement. Ne pas y ajouter vos exports JSON ni des documents personnels.
4. Copier l’adresse **HTTPS** du site affichée par Netlify. Un chemin `/workspace/...` est un fichier de travail, pas un lien public.
5. Envoyer cette adresse au smartphone par le moyen de votre choix. L’ouvrir dans un navigateur récent, puis créer un profil local ou importer sa sauvegarde.
6. Faire un essai simple : ouvrir une matière, valider une réponse puis recharger. Vérifier que la progression revient.

Pour une mise à jour, exporter d’abord les profils sur chaque appareil. Dans le tableau de bord Netlify, ouvrir **le même site**, puis la rubrique de déploiements, et y déposer le nouveau dossier complet. Garder la même adresse de site : créer un autre site créerait un autre espace de stockage. Les identifiants pédagogiques restent stables pour préserver la progression. Vérifier les profils après mise à jour ; importer le JSON sauvegardé si nécessaire. Les libellés de l’interface Netlify peuvent évoluer.

## Développer et vérifier

L’application elle-même n’a aucune dépendance à installer. Node.js, Playwright et Chromium ne servent qu’aux tests de développement. Les instructions sont dans [tests/README.md](tests/README.md).

Pour un serveur local de recette, depuis le dossier :

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Ce serveur ne publie pas le site sur Internet. Dans un second terminal, lancer les contrôles documentés dans `tests/`. Ne pas présenter son adresse locale comme un lien de téléchargement.

Les textes sont dans `contenus/`, séparés par discipline ; `contenus/bibliotheque.js` complète le français. Les sources littéraires et musicales sont décrites dans leurs notices. Les sons et illustrations sont locaux. Aucun service d’intelligence artificielle n’est utilisé pendant l’apprentissage.
