/*
PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const wordBox = document.getElementById('word');
const btnWord = document.querySelector('.btn-success');
const resultBox = document.querySelector('.resultWord');
const btnEvenOdd = document.querySelector('.btn-primary');
let evenOddSelect = document.getElementById('evenOdd');
let rangeSelect = document.getElementById('range');

btnWord.addEventListener('click', palindrome);
btnEvenOdd.addEventListener('click', game);
