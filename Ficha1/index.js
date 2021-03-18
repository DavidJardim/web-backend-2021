

var a = 10;
var b = 5;
var c = a + b;

//console.log(c);

// 5.	Implemente uma função que calcule a nota final da disciplina dada a 
//sua nota prática e teórica e imprima se o aluno está aprovado ou reprovado.

var miniProj = 16;
var freq = 10;
var projFinal = 12;

var notaFinal = miniProj * 0.3 + freq * 0.3 + projFinal * 0.4;

// concatenar uma string
//console.log("A avaliação final é :" +  Math.round(notaFinal) + " valores");


// 6.Implemente uma função que receba como argumento o número do mês e imprima o nome por extenso

var month = -2;

switch (month) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
        break;
}
//              0           1           2           3      4
var months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

if (months[month - 1] == undefined) {
    console.log("Mês Inválido");
}
else {
    console.log(months[month - 1]);
}

if (month - 1 > 12 || month - 1 < 1) {
    console.log("Mês Inválido");
}
else {
    console.log(months[month - 1]);
}

// 7.	Implemente uma função que receba dois números e uma operação 
//( + , - , * , / ou ^) e imprima o resultado da operação sobre os números.

var operador1 = 2;
var operador2 = 4;
var operando = "-";
var resultado = 0;

if (operando == "+") {
    resultado = operador1 + operador2;
    console.log("SOMA");
}
else if (operando == "-") {
    resultado = operador1 - operador2;
}
else if (operando == "*") {
    resultado = operador1 * operador2;
}
else if (operando == "/") {
    resultado = operador1 / operador2;
}
else if (operando == "^") {
    resultado = Math.pow(operador1, operador2);
    console.log("EXPOENTE");
}

//console.log(resultado);

// 8.Implemente uma função que imprima todos os múltiplos de 5 menores que 20.



// inicialização
/*var i = 0;

// guarda ou condição
while (i <= 20) {
    // execução
    if (i % 5 == 0) {
        console.log(i);
    }
    // incrementação
    i++;
}

while (i <= 20) {
    console.log(i);
    i += 5;
}

for (let j = 0; j <= 20; j++) {
    if (j % 5 == 0) {
        console.log(j);
    }
}

for (let j = 0; j <= 20; j+=5) {   
        console.log(j);    
}*/

// 9.	Implemente uma função que imprima a soma dos primeiros 100 números inteiros.


var sum = 0;

for (let j = 0; j <= 100; j++) {
    sum += j;
}

//console.log(sum);

// 10.	Implemente uma função que calcule e devolva o fatorial de um número.

//3! = 3 x 2 x 1 x 0

var fact = 1;

for (let j = 1; j <= 3; j++) {
    fact *= j;
//  1 * 1 = 1
//  1 * 2 = 2
//  2 * 3 = 6
}

//console.log(fact);

// 11.	Implemente várias funções para calcular o máximo, o mínimo e a média de uma sequência de números positivos.


var array = [1, 4, 5, 7, 0, 12];


var max = array[0];
for (let i =1; i < array.length; i++) {
    if(array[i] > max){
        max = array[i];        
    }    
}
console.log(max);

var min = array[0];
for (let i =1; i < array.length; i++) {
    if(array[i] < min){
        min = array[i];
    }    
}
console.log(min);

var sum = 0;
var average = 0;
for (let i =0; i < array.length; i++) {    
    sum += array[i];
}
average = sum / array.length;
console.log(average);







