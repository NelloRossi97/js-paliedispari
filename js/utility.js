function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function palindrome(){
    let wordValue = wordBox.value.toLowerCase();
    let str = "";
    str = wordValue.split("").reverse().join(''); 
    if (str === wordValue){
        resultBox.innerHTML = `<h1 class="text-white fw-bold">La parola "${wordValue}" è un palindromo </h1>`
    }else{
        resultBox.innerHTML = `<h1 class="text-white fw-bold">La parola "${wordValue}" non è un palindromo </h1>`
    }
    
}