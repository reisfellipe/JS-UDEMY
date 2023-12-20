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

const produto = {nome: 'Produto', preco: 1.8};
// const caneca = Object.assign({}, produto, { material: 'vidro'}); // o ...spread é mais intuitivo que assign
Object.freeze(produto);
produto.nome = 'John';
const caneca = {produto: produto.nome, preco: produto.preco};  // Maneira mais manual e minuciosa

console.log(produto);