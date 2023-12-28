//CLASSES = funciona da mesma forma que uma função construtora, é apenas uma forma diferente de declarar.. veja mais abaixo uma classe, e em seguida uma comparação com um função construtora

//Criando um classe
class Pessoa {
    //Para receber parâmetros, caso necessário, use o método especial constructor
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome;
    }
//Criando métodos (ações do objeto)
    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

//Instanciando um objeto partir da class
const p1 = new Pessoa('Ledger', 'Ward');
console.log(p1);

//Agora a mesma coisa porém utilizando uma função construtora
function Pessoa2(name,lastname){
    this.name = name;
    this.lastname = lastname;
}
//Criando um 'método' dentro do prototype
Pessoa2.prototype.speak = function(){
    console.log(`${this.name} is speaking...`);
};

const p2 = new Pessoa2('Atlas', 'Corringan');
console.log(p2);