/*
JA VIMOS
Object.keys (retorna as chaves)
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty  (define uma propriedade)
*/

// Basicamente o getOwnPropertyDescriptor(objeto, propriedade, {}) pega as propriedades descritoras do mesmo, como: writable, configurable, value e enumerable;
const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa33'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


produto.nome = 'Outra coisa';
delete produto.preco;
console.log(produto);