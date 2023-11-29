/*
Dados Primitivos - string, number, boolean, undefined, null,
(bigint, symbol) = VALORES COPIADOS
*/

//let a = 'A';
//let b = a; //cópia do valor de let a
//console.log(a, b);

//a = 'EXCHANGED';
//console.log(a, b); //mesmo alterando o valor de A não interfere no valor salvo na variável b

/*
Dados passados por Referência (mutável) -  Array, Object, Function - VALORES PASSADOS POR REFERÊNCIA
*/

let a = [1,2,3];
let b = a;
console.log(a,b)

a.push(4); // Nesse caso o valor mutável de array irá alterar os respectivos valores de A e B
console.log(b)

b.pop();// Nesse caso o valor mutável tbm irá alterar os valores de A e B
console.log(a,b);