/****************************************
 * Checker functions
 ***************************************/

const Checker = {};

Checker.lastname = function() {
  const lastname = document.querySelector("#lastname");
  return lastname.value.length >= 2;
};

const firstname = document.querySelector("#firstname");
Checker.firstname = function() {
  return firstname.value.length >= 2;
};

const pass =document.querySelector("#password");

Checker.password = function() {
  return pass.value.length >= 6;
};

const passConf =document.querySelector("#password-confirm");

Checker["password-confirm"] = function() {
  return passConf.value == pass.value;
};

const mail =document.querySelector("#mail");

Checker.mail = function() {
  const reg= new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/');
  return reg.value = mail.value
};



// const listeMois = ['Janvier','Mars', 'Mai', 'Juillet', 'Octobre', 'Décembre'];

// const listeMois2 = ['Février', 'Avril', 'Juin', 'Septembre', 'Novembre'];
const jour = document.querySelector("#jour")
Checker.jour = function() {

  if (jour.value == true){
    console.log(jour)
    return jour.value;
  }
  if (mois.value == true){
    console.log(mois)
    return mois.value
  }
  if (an.value == true){
    console.log(an)
    return an.value
  }
};


const mois = document.querySelector("#mois")
Checker.mois = function() {
  return mois.value;
};

Checker.an = function() {
  const year = document.querySelector("#an").value
  const res = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  console.log(year, res);
  return res.validity ;
};


Checker.month = Checker.jour;
Checker.year  = Checker.jour;