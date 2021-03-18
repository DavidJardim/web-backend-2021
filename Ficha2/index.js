// Alínea 1 ====================================================================================
function calculateIMC(weight, height) {
    var imc = weight / Math.pow(height, 2);
    return imc;
}

function logIMC(weight, height) {
    var imc = calculateIMC(weight, height);
    if (imc < 18.5) {
        console.log("IMC: " + imc + " - Está abaixo do peso!");
    }
    else if (imc >= 18.5 && imc < 25) {
        console.log("IMC: " + imc + " - Está no peso normal!");
    }
    else if (imc >= 25 && imc < 30) {
        console.log("IMC: " + imc + " - Está acima do peso!");
    }
    else {
        console.log("IMC: " + imc + " - Está obeso!");
    }
}

logIMC(200, 2);

// Alínea 2 ====================================================================================

function invertWord(str) {
    var inv = "";
    for (let index = str.length - 1; index >= 0; index--) {
        inv += str[index];
    }
    return inv;
}

function invertString(str, pattern) {
    var inv = "";
    var split = str.split(pattern);
    for (let index = 0; index < split.length; index++) {
        var word = invertWord(split[index]);
        inv += word + pattern;
    }
    return inv;
}

var invertedStr = invertString("Hoje,e,Domingo", ",");
console.log(invertedStr);

// Alínea 3 ====================================================================================

function countConsonants(str) {
    var count = 0;
    var vogals = ["a", "e", "i", "o", "u"];

    for (let index = 0; index < str.length; index++) {
        for (let j = 0; j < vogals.length; j++) {
            if (str[index] != vogals[j]) {
                count++;
            }
        }
    }   
    return count;
}

function countVogals(str) {
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == "a" || str[index] == "e" || str[index] == "i" || str[index] == "o" || str[index] == "u") {
            count++;
        }
    }
    return count;
}

var vogals = countVogals("Hello");
console.log(vogals);

// Alínea 4 ====================================================================================
function countLetter(str, letter){
    str = str.toLowerCase();
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        if (str[index] == letter){
            count++;
        }
    }
    return count;
}

var count = countLetter("HellE", "e");
console.log(count);