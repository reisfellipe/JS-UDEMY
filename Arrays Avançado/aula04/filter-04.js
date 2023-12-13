// Filter -> Sempre retornar um array com a mesma quantidade de elementos ou menos.

const numeros = [12, 4, 56, 2, 23, 11, 87, 6, 143];
const numerosFiltrados = numeros.filter(valor => valor > 50);
// console.log(numerosFiltrados);

// outro exemplo de array de objetos
// Retorna as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Grace', idade:57},
    {nome: 'Patrick', idade: 55},
    {nome: 'Scotty', idade:24},
    {nome: 'Ledger', idade: 26},
    {nome: 'Kenna', idade: 26},
    {nome: 'Diem', idade: 4},
    {nome: 'Diana', idade: 16},
];

const pessoasComNmeGrande = pessoas.filter(function(obj){
    return obj.nome.length >= 5;
});
// console.log(pessoasComNmeGrande);

const pessoasMaisDe50 = pessoas.filter(obj => obj.idade >= 50);
// console.log(pessoasMaisDe50)

const ultimaLetraNomeA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
});
    console.log(ultimaLetraNomeA);