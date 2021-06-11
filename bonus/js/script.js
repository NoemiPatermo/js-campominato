//BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: 
//con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50
function getRandomNumber(min, max){
    var result= Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

var difficoltà = parseInt(prompt("scegli un livello di difficoltà fra 0 e 2"));
switch (difficoltà) {

    case 0:
    var diff = 100-16;
        break;

    case 1:
     var diff = 80 - 16;
        break;

    case 2:
    var diff = 50-15;
        break;

}

var listaNumRandom = [];


while (listaNumRandom.length < 16){
    var result = getRandomNumber(1, 100);
    if (!listaNumRandom.includes(result)) {
        listaNumRandom.push(result);
    } 
   
}
console.log(listaNumRandom);//contiene 16 numeri NON duplicati.

var score = 0;
var listaUserNum = []; // è il nostro score
var flag = false;                     
function play() {
    while (listaUserNum.length < 5){ //qui è 84
        var userNumb = parseInt(prompt("Inserisci un numero da 1 a 100"));

        if (!listaUserNum.includes(userNumb)) { // SE IL NUMERO UTENTE è PRESENTE NELL'ARRAY UTENTE, HAI PERSO
            
            if(listaNumRandom.includes(userNumb)){ //SE IL NUMERO UTENTE è PRESENTE DENTRO L'ARRAY PC, FINISCE IL GIOCO
                    
                    flag = true;
                    break;
            }else  {
                listaUserNum.push(userNumb); // SE IL NUMERO UTENTE NON è PRESENTE NELL' ARRAY USER, PUSHALO
                score += 1;
            }   
            
            

        } else{
            alert("inserisci un altro numero!");
        
        }  
    }
    if (!flag) {
        document.getElementById("result3").innerHTML = "Complimenti, hai vinto!";
    } else {
        document.getElementById("result3").innerHTML = "Mi dispiace, hai perso!";
    }
    document.getElementById("result2").innerHTML = "I tuoi numeri sono: " + listaUserNum + "</br>" + "Il tuo punteggio è: " + score;

}
/*
*/
