//Consegna: Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente per (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

        //DRITTE DI OTTAVIO
/*generiamo 16 numeri => creo funzione => while array.length < 16, 
perché di volta in volta pusho nell'array il numero generato, solo se non è già presente
--- 
    0. while listNum.length <= 16
    1.      genero un numero randomico
    2.      if num not in array then, lo pusho nell'array listNum

ora listNum contiene 16 numeri NON duplicati.

while userNums.length <= 84
    chiedi all'utente un numero 
    if num (quello inserito dall'utente) not in array userNums:
        if num in array listNum (numeri generati dal computer), then break. // il gioco è finito, si stoppa il ciclo.
        else push num to userNums => next step.

risultato, stampo lo score che è userNums.length.*/

//GENERO  16 NUMERI CASUALI TRA 1 e 100

function getRandomNumber(min, max){
    var result= Math.floor(Math.random() * max) + min;
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
document.getElementById("result1").innerHTML = " Questo è il tuo array : "  + listaNumRandom;//contiene 16 numeri NON duplicati.


var listaUserNum = []; //chiedi all'utente di inserire un numero e verifichi se il numero è già presente nell'array.
                       // se il numero è presente, scatta alert

while (listaUserNum.length < 5){ //qui è 84
    var userNumb = parseInt(prompt("Inserisci un numero da 1 a 100"));

    if (listaNumRandom.includes(userNumb)) {
        document.getElementById("result3").innerHTML = "Mi dispiace hai perso!";
        break;

    } else if(!listaUserNum.includes(userNumb)){ 
        listaUserNum.push(userNumb);

    } else{
        alert("inserisci un altro numero!");
    }  
   
}
document.getElementById("result2").innerHTML = "I tuoi numeri sono: " + listaUserNum + "</br>";