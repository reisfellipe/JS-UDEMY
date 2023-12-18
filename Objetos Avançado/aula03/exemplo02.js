const pessoa = {
    _nome: 'Ledger',
    
    get nome(){
        console.log('Obtendo o valor do nome');
        return this._nome;
    }
};

console.log(pessoa.nome);