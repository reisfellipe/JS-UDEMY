// console.log('linha 1');
// console.log('linha 2');
// console.log('linha 3');
// console.log('linha 4');
// console.log('linha 5');

//i - index   expressão  
for (let i = 0; i <= 5; i++) {
//     console.log(`linha ${i}`);
}

// //ordem decrescente de 10 em 10
for (let i = 500; i >= 400; i -= 10) {
//     console.log(`linha ${i}`);
}

//ordem crescente de 50 em 50
for (let i = 0; i <= 300; i += 50) {
    // console.log(`Linha ${i}`);
}

//Verificando se é par ou não
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    // console.log(i, par);
}

// Percorrendo um array
const frutas = ['Maçã', 'Melão', 'Melancia', 'Tangerina', 'Abacate', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`índice ${i} =`, frutas[i]);
}

