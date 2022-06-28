//1- récupérer l'input
const inputAvis = document.querySelector('#avis');
//2- le lié à un événement qui permettera de récupérer 
//    les touches du clavier
/*
inputAvis.onKeyPress = (event => {
    if(event.charCode == 13){
        // ...
    }
})
*/
inputAvis.addEventListener('keypress', (event) => {
      //3- Sélection la touche entré (numéro 13)
    if(event.charCode == 13){
        //4- Quand la touche entré est utilisé, vous créer un objet avec la date,
        // ET le contenu
        const avis = {
            date: new Date(),
            contenu: inputAvis.value
        }
        //5- Afficher l'objet dans la console
        console.log(avis)
        //6- Vider le contenu de l'input
        inputAvis.value = ""
        //7- *Bonus* Faire en sorte d'afficher le contenu dans la page HTML
        document.querySelector("table > tbody").innerHTML += `
        <tr>
            <td><img class="avis_img " src="../img/avatar.png" alt="" height="75"></td>
                <td><b>Anas El khiat</b><br>
                <em>${avis.date}</em>
                <p>${avis.contenu}</p>
            </td>
        </tr>
      `
        
    }
  
})


