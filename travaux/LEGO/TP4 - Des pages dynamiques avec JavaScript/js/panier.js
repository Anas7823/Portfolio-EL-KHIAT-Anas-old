const prixPanier = document.querySelector("#prix-panier");
const prixTva = document.querySelector("#prix-tva");
const prixTotal = document.querySelector("#prix-total");


const articles = document.querySelectorAll("#list-articles > li");

// créer la fonction pour pouvoir l'utiliser quand on veut !
const reloadDesPrix = () => {
    prixPanier.innerText=0;
articles.forEach((article) => {
    const quantity = article.querySelector(".article-quantity").innerText;
    const price = article.querySelector(".article-price").innerText;
    prixPanier.innerText = parseFloat(prixPanier.innerText) + parseFloat(quantity) * parseFloat(price);
})
prixTva.innerText = parseFloat(prixPanier.innerText) * 0.15;
prixTotal.innerText = parseFloat(prixPanier.innerText) + parseFloat(prixTva.innerText);
}
reloadDesPrix()

//exo 5
articles.forEach((article) => {
    const boutonDelete = article.querySelector(".delete");
    boutonDelete.onclick = () => effacer(article);
})

const effacer = (article) => {
    // Récupérer la quantité
    let quantitee = parseInt(article.querySelector(".article-quantity").innerText)
    // La soustraire de 1
    quantitee--
    // Afficher la quantite
    article.querySelector(".article-quantity").innerText = quantitee
    // Gérer la disparition des quantité <=0
    if (quantitee <= 0){
        article.remove()
    }
    // Mettre à jour le panier !
    reloadDesPrix()
}