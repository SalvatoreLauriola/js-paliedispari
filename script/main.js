// Esercizio 1

// 1 Chiedere all’utente di inserire una parola;

var parola = prompt('Inserisci una parola').toLowerCase();
// console.log(parola)

// // 2 Creare una funzione per capire se la parola inserita è palindroma

// // invocazione
var parolaReverse = reverseChar(parola);

console.log('Parola');
console.log(parola);
console.log(parolaReverse);

if (parola == parolaReverse) {
  console.log('La parola inserita è palindroma');

}else {
  console.log('La parola inserita non è palindroma');
}

function reverseChar (word) {

  var reverse = '';

  for (var i = word.length -1; i >= 0; i--) {
    reverse += word[i];
  }
  
  return reverse;
}


// Esercizio 2 

// L’utente sceglie pari o dispari e un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// var pariDispari = prompt('Inserisci pari o dispari');

// var numeroUtente = parseInt(prompt('Inserisci numero tra 1 e 5'))

// var pcNumber = getRandomNumber(1, 5);

// console.log(numeroUtente);

// console.log(pcNumber);

// var somma = numeroUtente + pcNumber;

// console.log(somma);

// function getRandomNumber (min, max) {

//   var rand = Math.floor(Math.random() * (max - min + 1) ) + min;

//   return rand;

// }
 
// function parDisp(numero) {
//     if (numero % 2 == 0){
      
//       return 'pari';
//     }

//     return 'dispari';
//   }

//   if (parDisp(somma) == pariDispari){
//   console.log('Hai vinto')


//   }else {
//     console.log('Hai perso');
//   }

  
