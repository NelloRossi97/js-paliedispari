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

function evenOdd(num1, num2){
    let evenOddSelected = evenOddSelect.value;
    let rangeSelected = parseInt(rangeSelect.value);
    // console.log(evenOddSelected, rangeSelected);
    let computerNum = getRndInteger(1,5);
    document.getElementById('computerNumber').innerHTML = `<p class="fs-1"> ${computerNum} </p>`;
    let sum = summary(rangeSelected,computerNum);
    console.log(sum);
    if ((evenOddSelected === "even") && (sum % 2 ===0)){
        console.log('hai vinto');
    } else {
        console.log('hai perso');
    }
}

function summary(num1, num2){
    return num1 + num2;
}
