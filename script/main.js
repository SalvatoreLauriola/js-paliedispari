// 1 Chiedere all’utente di inserire una parola;

var parola = prompt('Inserisci una parola');
// console.log(parola)

// 2 Creare una funzione per capire se la parola inserita è palindroma

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