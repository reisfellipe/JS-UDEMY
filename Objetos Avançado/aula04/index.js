/*
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

JA VIMOS
Object.keys (retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty  (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8};
const caneca = {
    ...produto, //Espalhamos o objeto produto
    material: 'Porcelana' // Adicionamos uma nova chave
};
// produto.nome = 'Ledger Ward';
caneca.nome = 'Ryle Kincaid';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);