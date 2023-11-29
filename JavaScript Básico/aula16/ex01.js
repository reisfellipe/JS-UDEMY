/*
Dados Primitivos - string, number, boolean, undefined, null,
(bigint, symbol) = VALORES COPIADOS

Dados passados por Referência (mutável) -  Array, Object, Function - VALORES PASSADOS POR REFERÊNCIA
*/

const a = {
    nome: 'Fellipe',
    sobrenome: 'Reis'
};

const b = {...a};  //copiando o valor de A tornando b independente
a.nome = 'João'; // Nesse caso irá alterar tbm o valor de B
console.log(a); //valor índice um alterado
console.log(b);

// Caso não queira alterar o valor de B, é só copiar o valor literal de A com o SPREAD =>  {...VARIAVEL}