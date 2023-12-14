// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne u array com o obro dos valores (Map)
// Papel de reduce() é reduzir um array em um único elemento

const numeros = [5,50,80,1,2,3,5,8,7,1,15,22,77];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
}, 0);

console.log(total);