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
var min= 1;
var max = 100;
var listaNumRandom = [];
function getRandomNumber(min, max){
    while(listaNumRandom.length <= 16){
        var result = Math.floor(Math.random() * max) + min;
        return result;
    }
    if(listaNumRandom.includes(randomNumPc)){ //come vedo se il numero random è nell'array?
        listaNumRandom.push(randomNumPc);
        console.log(listaNumRandom);
    }
}
var randomNumPc = getRandomNumber(1,100);
document.getElementById("result").innerText += "Il numero random del pc è: " + randomNumPc;


// CREA ARRAY DI 16 NUMERI RANDOM
/*var listaNumRandom = [""];
// I NUMERI NON POSSONO ESSERE DUPLICATI
// RIPETO LA FUNZIONE FINCHè L'ARRAY DEI NMR DEL PC HA 16 ELEMENTI
while(listaNumRandom.length <= 16){
    var randomNumPc;
    listaNumRandom.push();
}*/