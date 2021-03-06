//Consegna: Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


//GENERO  16 NUMERI CASUALI TRA 1 e 100

function getRandomNumber(min, max){
    var result= Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

// CREO ARRAY VUOTO
var listaNumRandom = [];

// I NUMERI NON POSSONO ESSERE DUPLICATI
// RIPETO LA FUNZIONE FINCHè L'ARRAY DEI NMR DEL PC HA 16 ELEMENTI
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
