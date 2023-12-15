// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne u array com o obro dos valores (Map)
// Papel de reduce() é reduzir um array em um único elemento

const numeros = [5,50,80,1,2,3,5,8,7,1,15,22,77];
const total = numeros.reduce((acumulador, valor) => {
if(valor % 2 === 0) acumulador.push(valor);
return acumulador;
}, []);

// console.log(total);

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Ledger', idade: 28},
    {nome: 'Kenna', idade: 25},
    {nome: 'Diem', idade: 5},
    {nome: 'Scotty', idade: 21},
    {nome: 'Patrick', idade: 59},
    {nome: 'Grace', idade: 54},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);