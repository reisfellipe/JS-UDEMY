// const falanome = require('./mod1').falaNome;//forma de pegar um elemento do arquivo
// const mod1 = require('./mod1'); // pegando o modulo inteiro
// const falaNome = mod1.falaNome; //Capturando um elemento individual dentro do mod1

// Desestruturação
// const {nome, sobrenome, falaNome} = require('./mod1');
// console.log(sobrenome,nome); //Reis Fellipe
// console.log(falaNome()); //Fellipe Reis

// const path = require('path');

//desestruturação tirando chave do objeto
const {Pessoa} = require('./mod2');
const p1 = new Pessoa('Fellipe');
const mod2 = require('./mod2');
console.log(mod2);