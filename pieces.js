// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune categorie)";

const sectionFiches = document.querySelector(".fiches");
const pElement = document.createElement("p");
pElement.innerText = article.description ?? "(Pas de description pour le moment.” en cas d’absence de description )";
const pTelement =document.createElement("p");
pTelement.innerText = `${article.disponibilite===true ? "En stock" : "Rupture de stock"}`;
// pTelement.innerText = article.disponibilite ? "ok" : "non"
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

sectionFiches.appendChild(pElement);
sectionFiches.appendChild(pTelement);
