const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');

const pessoas = [
    {nome: 'Peter'},
    {nome: 'Chris'},
    {nome: 'Ledger'},
    {nome: 'Marshall'},
    {nome: 'Atlas'},
];
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);