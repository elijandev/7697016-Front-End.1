// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// for (let i=0; i<pieces.length; i++){
//   const piecesElement =document.createElement("article")
// const article = pieces[i];
// const imageElement = document.createElement("img");
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
// const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie ?? "(aucune categorie)";

// const sectionFiches = document.querySelector(".fiches");
// const pElement = document.createElement("p");
// pElement.innerText = article.description ?? "(Pas de description pour le moment.” en cas d’absence de description )";
// const pTelement =document.createElement("p");
// pTelement.innerText = `${article.disponibilite===true ? "En stock" : "Rupture de stock"}`;

// // pTelement.innerText = article.disponibilite ? "ok" : "non"


// sectionFiches.appendChild(piecesElement);

// piecesElement.appendChild(imageElement);
// piecesElement.appendChild(nomElement);
// piecesElement.appendChild(prixElement);
// piecesElement.appendChild(categorieElement);

// piecesElement.appendChild(pElement);
// piecesElement.appendChild(pTelement);
// }
function generation(pieces){
    for(let i=0; i<pieces.length; i++){

      const article = pieces[i]
      const sectionFiches = document.querySelector('.fiches');
      const pieceElement = document.createElement('article');
      const imageElement = document.createElement("img");
       imageElement.src = article.image;
       const nomElement = document.createElement("h2");
       nomElement.innerText = article.nom;
       const prixElement = document.createElement("p");
      prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`
      const categorieElement = document.createElement("p");
      categorieElement.innerText=article.categorie ?? ("aucune categorie");
      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = article.description ??("pas de description");
      const stockElement = document.createElement("p");
      stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
      
      // On rattache la balise article a la section Fiches
      sectionFiches.appendChild(pieceElement);
      // On rattache l’image à pieceElement (la balise article)
      pieceElement.appendChild(imageElement);
      pieceElement.appendChild(nomElement);
      pieceElement.appendChild(prixElement);
      pieceElement.appendChild(categorieElement);
      //Ajout des éléments au DOM pour l'exercice
      pieceElement.appendChild(descriptionElement);
      pieceElement.appendChild(stockElement);



          }
}
generation(pieces)
/*trier les articles */ 
const btnTrier = document.querySelector(".btn-trier");
btnTrier.addEventListener("click",()=>{
  pieces.sort(function(a,b){
    return a.prix - b.prix;
  });
 
  document.querySelector(".fiches").innerHTML = "";
  generation(pieces)
});
/*décroissant*/
const btndecro = document.querySelector(".btn-trier-d");
btndecro.addEventListener("click",function () {
  pieces.sort(function(a,b){
    return b.prix - a.prix;
  });
  document.querySelector(".fiches").innerHTML = "";
  generation(pieces)
})

/*filtrer les article*/
const btnFiltrer = document.querySelector(".btn-filtrer");
btnFiltrer.addEventListener("click",()=>{
  const piecesFiltres = pieces.filter(function(piece){
    return piece.prix<=35;
  });
  document.querySelector(".fiches").innerHTML = "";
  generation(piecesFiltres)
});
/* afficher les discription*/
const discription = document.querySelector(".discription");
discription.addEventListener("click",()=>{

  const piecesDiscription = pieces.filter(function(piece){
    return piece.description
  });
  document.querySelector(".fiches").innerHTML = "";
  generation(piecesDiscription)
  
} );
const noms =pieces.map(piece =>piece.nom);
for (let i=pieces.length-1 ;i>=0 ; i--){
  if(pieces[i].prix>35){
    noms.splice(i,1)
  }
}
console.log(noms);
const pElement = document.createElement("p");
pElement.innerText="piéces abordables:";
const abordableElement =document.createElement('ul');

for(let i=0 ; i<noms.length ; i++){
  const nomElement = document.createElement('li');
  nomElement.innerText= noms[i];
  abordableElement.appendChild(nomElement)
}

document.querySelector('.abordables')
.appendChild(pElement)
.appendChild(abordableElement)

const pieces_dispo=pieces.map(piece=>piece.nom);
const pieces_dispo_prix=pieces.map(piece=>piece.prix);


for (let i=pieces.length-1; i>=0; i--){
  if(pieces[i].disponibilite===false){
    pieces_dispo.splice(i,1)
    pieces_dispo_prix.splice(i,1)
  }
}


const pieces_dispo_list=document.createElement('ul');
for (let i=0; i<pieces_dispo.length;i++){
  const dispo_li = document.createElement('li');
  dispo_li.innerText=pieces_dispo[i]+' -'+pieces_dispo_prix[i]+'€';
  // dispo_li.innerText=`${pieces_dispo[i]}-${pieces_dispo_prix[i]}`;
  pieces_dispo_list.appendChild(dispo_li);
}
const pElementDispobible =document.createElement("p");
pElementDispobible.innerText = "piéces disponible :"
document.querySelector('.pieces-dispo')
.appendChild(pElementDispobible)
.appendChild(pieces_dispo_list)

const inputMax = document.querySelector('#prix-max');
inputMax.addEventListener("input",function(){
  const piecesFiltres = pieces.filter(function(piece){
  return piece.prix <=inputMax.value ;   
  });
  document.querySelector(".fiches").innerHTML = "";
  generation(piecesFiltres);
} );