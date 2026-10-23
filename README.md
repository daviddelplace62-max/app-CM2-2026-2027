# Atelier CM2 2026-2027 — prototype technique

**Ce dépôt ne contient pas encore les cours du programme CM2.** La consultation préalable des sites officiels est bloquée (HTTP 403). Les activités visibles sont des essais informatiques, explicitement marqués. Ne pas utiliser cette version comme support complet d’apprentissage. Consulter [SOURCES.md](SOURCES.md), [COUVERTURE_PROGRAMME.md](COUVERTURE_PROGRAMME.md), [AVANCEMENT.md](AVANCEMENT.md) et le rapport des tests pour les limites précises.

[Télécharger le prototype technique en ZIP](https://github.com/daviddelplace62-max/app-CM2-2026-2027/archive/refs/heads/developpement/cm2-2026-2027.zip) — archive téléchargée et intégrité/contenu vérifiés le 23 octobre 2026. Il ne s’agit pas de la livraison du programme scolaire complet.

## Essayer le prototype sur ordinateur

1. Utiliser le lien ZIP ci-dessus, ou ouvrir la branche `developpement/cm2-2026-2027` sur GitHub et choisir **Code → Download ZIP**.
2. Décompresser toute l’archive dans un dossier. Conserver ensemble `index.html`, `styles.css`, `contents.js` et `app.js`.
3. Le dossier utilise des scripts classiques, sans chargement JSON ni module, pour permettre le double-clic sur `index.html`. Attention : le navigateur de cet environnement bloque les URL file:// par sa politique administrateur ; le fonctionnement par double-clic n’a donc pas été validé ici. La recette fonctionnelle est exécutée avec un serveur HTTP local. Aucun compte ou clé API n’est requis pour le prototype.
4. Créer un profil avec un surnom, puis un second. Essayer une activité de recette avec le premier et vérifier que le second conserve son propre état.
5. Changer le thème dans les réglages du profil ; la progression doit rester associée au profil.
6. Recharger la page puis choisir le même profil pour vérifier la sauvegarde.

Les données restent **dans ce navigateur** et ne sont pas synchronisées entre appareils. Le stockage des pages file:// varie selon les navigateurs : déplacer le dossier, changer de navigateur ou utiliser un onglet privé peut changer ou effacer la sauvegarde. Un avertissement apparaît si le navigateur refuse le stockage. Exporter régulièrement avant toute mise à jour.

## Sauvegarder et restaurer

Utiliser **Exporter** pour télécharger le fichier JSON. Le conserver dans un endroit sûr : il contient les surnoms et l’historique local. Utiliser **Importer**, choisir le fichier et vérifier les profils restaurés. Le format est contrôlé ; un fichier arbitraire ou invalide doit être refusé. Lire l’indication de remplacement affichée avant de restaurer. Ne pas publier les sauvegardes des enfants dans GitHub ou Netlify.

## Partager sur smartphone avec Netlify Drop

Ces étapes sont destinées au parent qui décide lui-même de publier. Aucun site n’a été déployé automatiquement.

1. Faire une copie d’un dossier ne contenant que les quatre fichiers de l’application. Ne pas y mettre `.git`, les sauvegardes JSON ou les outils de test.
2. Aller sur https://app.netlify.com/drop et se connecter si Netlify le demande.
3. Glisser ce dossier dans la zone de dépôt. Attendre la fin du déploiement.
4. Copier le lien HTTPS affiché par Netlify et l’envoyer au smartphone. Ce lien est un lien de site ; un chemin `/workspace/...` ne l’est pas.
5. Ouvrir le lien sur le téléphone, créer un profil local ou importer sa sauvegarde. Les données du PC ne sont pas transférées automatiquement.
6. Pour une mise à jour, ouvrir **le même site** dans le tableau de bord Netlify, puis son onglet de déploiements et déposer le dossier mis à jour. Ne pas créer un nouveau site si l’on veut conserver la même adresse.
7. Avant de remplacer les fichiers, exporter les données sur chaque appareil. Après la mise à jour, vérifier les profils et restaurer le JSON si nécessaire.

Le prototype n’a aucun appel de contenu réseau après chargement. Cela ne garantit pas sa réouverture hors connexion : aucun service worker de cache n’est livré. La variante locale conserve ses fichiers sur l’ordinateur.

## Développement et tests

Python 3 et Node.js 24 sont disponibles dans l’environnement préparé. L’application elle-même n’a pas de dépendance. Pour servir localement, exécuter depuis le dossier :

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Ce serveur sert seulement aux essais locaux ; il ne publie pas le site sur Internet. Le code statique ne dépend pas de ce serveur ; l’ouverture file:// reste à vérifier dans un navigateur personnel qui l’autorise.

Les tests utilisent Playwright et Chromium, réservés au développement. Consulter les commandes et les résultats dans `RAPPORT_TESTS.md` et `tests/`. Les tests du moteur ne certifient ni le programme officiel ni la pertinence des contenus pédagogiques futurs.
