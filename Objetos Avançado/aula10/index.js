const falar = {
    falar(){
        console.log(`${this.nome} está falando...`);
    }
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo...`);
    }
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo...`);
    }
}

// const pessoaPrototype = {...falar, ...comer, ...beber};// ou a debaixo que funcionará da mesma forma
const pessoaPrototype = Object.assign({}, falar, comer, beber);

/*const pessoaPrototype = {
    falar(){
        console.log(`${this.nome} está falando...`);
    },
    comer(){
        console.log(`${this.nome} está comendo...`);
    },
    beber(){
        console.log(`${this.nome} está bebendo...`);
    }
};
*/

function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    });
}

const p1 = criaPessoa('Ledger', 'Ward');
const p2 = criaPessoa('Atlas', 'Corringan');
