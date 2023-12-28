//Symbol = retorna sempre um id aleatório, nunca igual ao outro
const _velocidade = Symbol('velocidade');

//Class com get e setters
class Carro {
    constructor(name){
        this.name = name;
        this[_velocidade] = 0;
    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){
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

car1.velocidade = 550;
console.log(car1.velocidade);