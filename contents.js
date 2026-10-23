/* Données de recette du moteur uniquement. Aucun contenu de programme validé.
   Le préfixe technique-v1 évite de confondre cette progression avec les futurs cours. */
window.CM2_CONTENT = [
 ['francais','Français','📖'], ['mathematiques','Mathématiques','🔢'],
 ['histoire','Histoire','⏳'], ['geographie','Géographie','🌍'],
 ['sciences','Sciences et technologie','🔬'], ['anglais','Anglais','💬'],
 ['emc','Enseignement moral et civique','🤝'], ['arts-plastiques','Arts plastiques','🎨'],
 ['musique','Éducation musicale','🎵'], ['histoire-arts','Histoire des arts','🏛️'],
 ['eps','Éducation physique et sportive','🏃']
].map(function (subject) {
 const prefix = subject[0] + '-technique-v1';
 return { id: subject[0], title: subject[1], icon: subject[2], status:'technical-fixture', chapters:[{
  id:prefix+'-recette', title:'Recette technique — aucun cours disciplinaire', steps:[{
   id:prefix+'-saisie',title:'Tester les réponses et les indices',
   objective:'Vérifier les commandes du prototype. Cette étape ne valide aucune compétence scolaire.',
   lesson:'Ces données servent uniquement aux essais informatiques. Les cours seront rédigés après consultation des textes officiels.',
   example:'Pour tester une réponse numérique, la valeur demandée est explicitement affichée.',
   exercises:[
    {id:prefix+'-choix',type:'choice',prompt:'Test du bouton : sélectionne « Continuer ».',options:['Continuer','Autre réponse de test'],answer:'Continuer',hint:'Clique sur le choix nommé Continuer.',explanation:'Le choix attendu était Continuer. Ceci est un test de commande.'},
    {id:prefix+'-nombre',type:'number',prompt:'Test de saisie : écris 1,5 (ou 1.5 ou 3/2).',answer:1.5,hint:'Essaie 1,5 ; le séparateur décimal peut être une virgule.',explanation:'Les écritures 1,5, 1.5 et 3/2 représentent la même valeur.'},
    {id:prefix+'-texte',type:'text',prompt:'Test du clavier : recopie exactement « été ».',answer:'été',hint:'Les deux accents aigus sont nécessaires dans ce test.',explanation:'Le moteur conserve les accents pour permettre de futurs exercices d’orthographe.'}
   ]
  },{
   id:prefix+'-accompagnement',title:'Tester une observation accompagnée',
   objective:'Distinguer une action déclarée d’une observation par un adulte.',
   lesson:'Ce formulaire est un essai informatique. Il ne constitue pas une activité scolaire.',
   example:'Un adulte teste la grille et confirme seulement ce qu’il a observé.',
   exercises:[{id:prefix+'-guide',type:'guided',prompt:'Avec un adulte, vérifiez que la grille est lisible et que les boutons répondent.',criteria:['La grille est lisible.','Les commandes fonctionnent.','L’adulte a observé l’essai.'],hint:'Demande à un adulte de vérifier les commandes avec toi.',explanation:'Cette confirmation enregistre une observation déclarée ; elle ne mesure pas une compétence du CM2.'}]
  }]
 }]};
});
