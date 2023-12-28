//Symbol = retorna sempre um id aleatório, nunca igual ao outro
const _velocidade = Symbol('velocidade');

//Class com get e setters
class Carro {
    constructor(name){
        this.name = name;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const car1 = new Carro('Fiesta');

for(let i = 0; i < 200; i++){
    car1.acelerar();
}

car1.velocidade = 550; //No sinal de atribuição ja se usa o SET
console.log(car1.velocidade); //Chamando o valor do método ja usamos o GET

//MAIS UM EXEMPLO
class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Atlas', 'Corringan');
p1.nomeCompleto = 'Atlas Dylan Corringan';
console.timeLog(p1.nome);
console.log(p1.sobrenome);