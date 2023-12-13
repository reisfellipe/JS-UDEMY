// Retorne os números maiores que 10
const numbers = [5, 13, 22, 8, 42, 2, 80, 11, 9, 58];

const plusTen = numbers.filter((valor, indice, array) => {
    console.log(valor, indice);
    return valor > 10;
});
console.log(plusTen);

/*
5 0
13 1
22 2
8 3
42 4
2 5
80 6
11 7
9 8
58 9
[ 13, 22, 42, 80, 11, 58 ]

*/