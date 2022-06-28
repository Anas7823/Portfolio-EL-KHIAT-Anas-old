function ajouter () {
    const btnQuantity = document.querySelector("#btn-quantity");
    btnQuantity.innerText = parseInt(btnQuantity.innerText) + 1;
} 

function reduire () {
    const btnQuantity = document.querySelector("#btn-quantity");
    
    if (btnQuantity.innerText > 0) {
        btnQuantity.innerText = parseInt(btnQuantity.innerText) - 1;
    }
}

function changerImgPrincipale (newSrc) {
    const imgPrincipale = document.querySelector("#img-principale");
    imgPrincipale.src = newSrc
}

const btnPlus = document.querySelector("#btn-plus"); 
/* btnPlus.onclick = () => {

} */
btnPlus.onclick = ajouter;

const btnMoins = document.querySelector("#btn-moins");
btnMoins.onclick = reduire;

const miniatures = document.querySelectorAll(".miniature > img");
 
miniatures.forEach((miniature) => {
    miniature.onclick = () => changerImgPrincipale (miniature.src);
})

/*
 miniature.addEventListener('click', () =>{
    console.log("coucou")
})
*/