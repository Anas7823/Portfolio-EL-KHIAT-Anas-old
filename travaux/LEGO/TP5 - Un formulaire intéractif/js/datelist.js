// select jour
const date1 = document.querySelector("#jour")

for (let index = 1; index <= 31; index++) {
    const option = document.createElement("option");
    option.setAttribute("value", index);
    option.innerText = index;
    date1.append(option);
}
// select mois

const listeMois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const date2 = document.querySelector("#mois")

listeMois.forEach((mois, index)=> {
    const option = document.createElement("option"); // <option> </option>
    option.setAttribute("value", index+1);// <option value=(index+1)</option>
    option.innerText = mois;// <option value=(index+1)> Janvier </option>
    date2.append(option) // on ajoute l'option dans le select
});


// select année

let d = new Date().getFullYear(); //On récupère l'année courante
const date3 = document.querySelector("#an")

for (let index = d; index >= 1900; index--) {
    const option = document.createElement("option")
    option.setAttribute("value" , index)
    option.innerText = index;
    date3.append(option)
}