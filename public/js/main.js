// Exo1
let nombre = Number(prompt("Met un nombre"));
switch (nombre%2 ==0) {
    case true:
        alert("Nombre pair");
        break;
    case false:
        alert("Nombre impair");
    default:
        break;
}
// Exo 2
let mois = Number(prompt("Donne moi un chiffre entre 1 a 12"));
switch (mois) {
    case 1:
        console.log("Janvier");
        break;
    case 2:
        console.log("Fèvrier");
        break;
    case 3:
        console.log("Mars");
        break; 
    case 4:
        console.log("Avril");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6:
        console.log("Juin");
        break;
    case 7:
        console.log("Juillet");
        break;
    case 8:
        console.log("Août");
        break;
    case 9:
        console.log("Septembre");
        break;
    case 10:
        console.log("Octobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Décembre");
        break; 
    default:
        break;
}