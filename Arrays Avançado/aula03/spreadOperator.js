// Concatenando usando rest operator
// ...rest -> ...spread

const a1 = [1,2,3];
const a2 = [4,5,6];
// Faz o mesmo que concat, porém usando ...rest para indicar que voce quer todo o conteudo da lista
// adicionando e espalhando um array literal aqui   
const a3 = [...a1, ...a2, 'Mais um', ...[7,8,9]];
console.log(a3); //[ 1, 2, 3, 4, 5, 6, 'Mais um', 7, 8, 9 ]

//se espalhar o a3 você verá somente os valores da lista
console.log(...a3); //1 2 3 4 5 6 Mais um 7 8 9