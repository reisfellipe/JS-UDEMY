// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Ledger', idade:28},
    {nome: 'Kenna', idade:26},
    {nome: 'Patrick', idade:66},
    {nome: 'Grace', idade:59},
    {nome: 'Diem', idade:5},
    {nome: 'Roman', idade:29},    
];

const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes); 

const idades = pessoas.map(obj => {
//  Uma forma de deletar a chave nome do objeto
    // delete obj.nome;
    // return obj;
//Outra forma de fazer isso, é simplesmente retornar um objeto literal contendo só os valores da chave idade. Veja;
    return {idade: obj.idade};
});
// console.log(idades);

// ou simplesmente fazer em uma linha
const onlyIdades = pessoas.map(obj => ({idade: obj.idade}));
// console.log(onlyIdades);

// ADICIONANDO ID NO OBJETO

const comIds = pessoas.map(obj => {
    // obj.id = (indice + 1) * 1000 ;
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
});
console.log(comIds);