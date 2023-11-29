//NÃO PODEMOS CRIAR VARIÁVEIS COM PALAVRAS RESERVADAS
//VARIÁVEIS PRECISAM TER NOMES SIGNIFICATIVOS
//NÃO PODEMOS COMEÇAR O NOME DE UMA VARIÁVEL COM NÚMERO
//NÃO UTILIZE VAR, UTILIZE LET
// Não pode modificar o valor de uma CONST
// Utilizamos camelCase
// Não podemos redeclarar o valor de uma CONST
// Precisa atribuir o valor no momento da Declaração da CONST


const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado =  resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5; 
console.log(resultadoTriplicado);

console.log(typeof(primeiroNumero));