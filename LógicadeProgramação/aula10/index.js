//Desestruturação de Arrays
// .. rest, ... spread
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//cada nome por ordem de índice
const [firstIndex, secondIndex, thirdIndex, ...resto] = numeros;
// console.log(firstIndex, secondIndex, thirdIndex);
// console.log(resto);

//modo de selecionar somente os valores dos indices desejáveis
//               0    1    2    3    4    5    6
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//        0   1    2    3      4        5,6....
const [letraA, , letraC, , ,letraF, ...restante] = letras; 
// console.log(letraA, letraC, letraF);


//índiceListas        0          1          2
//índiceCadaLista  0  1  2    0  1  2    0  1  2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//três maneiras de pegar o numero 6

console.log(numbers[1][2]); //6 

let [,[,,seis]] = numbers;
console.log(seis); //6

const [lista1, lista2, lista3] = numbers;
console.log(lista2[2]); //6







// let a = 'A';  //B
// let b = 'B';  //C
// let c = 'C';  //A

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);