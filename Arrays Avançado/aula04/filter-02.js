// Filter, Map, reduce

// Retorne os números maiores que 10
const numbers = [5, 13, 22, 8, 42, 2, 80, 11, 9, 58];

// Geralmente usam um função anonima dentro do proprio filter
// Ou uma arrow function

// const plusTen = numbers.filter(function(valor){ 
//     return valor > 10;
// });


const plusTen = numbers.filter((valor) => { 
    return valor > 10;
});
// Quando só tem um parâmetro na arrow function não precisa usar os ()

const plusTenNum = numbers.filter(valor => valor > 10);

console.log(plusTen);
console.log(plusTenNum);