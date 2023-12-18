// const pessoa = {
//     _nome: 'Ledger',
    
//     get nome(){
//         console.log('Obtendo o valor do nome');
//         return this._nome;
//     }
// };

// console.log(pessoa.nome);

const pessoa = {
    _nome: 'Ledger',
    set nome(novoNome){
        console.log('Definindo novo valor para nome');
        this._nome = novoNome;
    }
};

pessoa.nome = 'Diem Rowan';
console.log(pessoa._nome);