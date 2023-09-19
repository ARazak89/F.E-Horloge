function bouge() {
     // Sélectionner les aiguilles de l'horloge par leur ID
    var aiguilleSecondes = document.querySelector("#secondes");
    var aiguilleMinutes = document.querySelector("#minutes");
    var aiguilleHeures = document.querySelector("#heures");
    
    // Obtenir la date et l'heure actuelles
    var maDate = new Date();
    var valeursec = maDate.getSeconds();
    var valeurmin = maDate.getMinutes();
    var valeurh = maDate.getHours();
   


    console.log(valeursec);
    console.log(valeurmin);
    console.log(valeurh);
    // Hassane Abdel-Razak
    // Mettre à jour les aiguilles de l'horloge en fonction de l'heure actuelle
    aiguilleSecondes.style.transform = "rotate(" + ((valeursec * 6) - 90) + "deg)";// 6 degrés par seconde soit 360° par minute
    aiguilleMinutes.style.transform = "rotate(" + ((valeurmin * 6) - 90) + "deg)";// 6 degrés par minute soit 360° par heure
    aiguilleHeures.style.transform = "rotate(" + ((valeurh * 30) - 90) + "deg)";  // 30 degrés par heure soit 360° par 12 heure
}
// Mettre à jour l'horloge chaque seconde
window.setInterval(bouge, 1000);

var maDate = new Date();
var date = document.querySelector(".date");
var day = maDate.getDate() /* Hassane Abdel-Razak */
const months = ["janv", "fév", "mars", "avril", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"];
console.log(months[maDate.getMonth()]);  
date.textContent = `${day} ${months[maDate.getMonth()]}`;
console.log(day);
