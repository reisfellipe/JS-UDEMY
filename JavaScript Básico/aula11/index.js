let num1 = 0.7 //Number
let num2 = 0.1; //Number

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1

num1 = Number(num1.toFixed(2)); //parseFloat(), ou Number()

console.log(num1);
console.log(Number.isInteger(num1));





//console.log(num1.toString() + num2.toString()); //tranformando Number em String para Concatenação

//num1 = num1.toString(); //Tranformando em String permanente

//console.log(num1.toFixed(2)) //mostra somente 2 casas decimais

//console.log(Number.isInteger(num1)); //Descobrir se o numero é Inteiro

//let temp = num1 * '4';
//console.log(Number.isNaN(temp)); //Descobrindo se TEMP é uma conta que é Not a Number NaN