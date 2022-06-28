/*
 1- récupérer l'input
 2- utilisé le keypress
 3- récupérer la valeur utilisé
 4- mettre en minuscule la valeur récupéré (toLowerCase())
 5- Récupérer la Liste des langages/outils de dev
 6- Récupérer Uniquement les valeurs de ces listes
 7- Comparer votre valeur de l'input avec les valeurs de la liste
 8- Si c'est compatible, laisser afficher
 9- Si c'est non compatible, cacher le résultat
*/
//1-
const inputSearch = document.querySelector('#searchInput')
//2-
inputSearch.onkeyup = ( event =>{
    //3- et 4-
    let Search = event.target.value.toLowerCase()
    //5-
    let collectionLangage = document.querySelectorAll(".name")
    console.log(collectionLangage)
    //6-
    // ou un for 
    collectionLangage.forEach(langage => {
        langage.textContent.toLowerCase()
        //7- et 8-
        if(langage.textContent.toLowerCase().includes(Search)){
            langage.style.display= "block";
        }
        // 9-
        else{
            langage.style.display="none";
        }
    })
    
})