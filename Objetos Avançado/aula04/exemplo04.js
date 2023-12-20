/*
Object.values (retorna os valores dentro das chaves)
Object.keys (retorna as chaves)                                               key     value      key  value
Object.entries (retorna ac chaves com os valores separados por listas) -> [[ 'nome','Produto'],['preco',1]]
Object.freeze (Congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty  (define uma propriedade)

*/

const produto = {nome: 'Produto', preco: 1.8};

// Fazendo desestruturação direto no for
for(let [chave,valor] of Object.entries(produto)){
    console.log(chave,valor);
}

// Iterando os objetos
// for(let entry of Object.entries(produto)){
//     console.log(entry);
// }

// console.log(Object.values(produto));
// console.log(Object.entries(produto));