class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já está ligado!`);
            return;
        }
        this.ligado = true;
    }


    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já desligado!`);
            return;
        }
        this.ligado = false;
    }

}

//Criando uma classe que terá tudo que DispositivoEletronico tem
//A class Smartphone é filha da class DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,memoria){
        //Super ele chama todo o constructor da classe pai, nesse caso DispositivoEletronico
        super(nome);
        this.cor = cor;
        this.memoria = memoria;
    }

}

const s1 = new Smartphone('Iphone 14 Pro','Grafite', '256GB');
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico  {
    constructor(nome,temWifi){
        super(nome);
        this.temWifi = temWifi;
    }

    ligar(){
        console.log('Você alterou o método ligar');
    }
}

const t1 = new Tablet('iPad Pro', true);
t1.ligar();
console.log(t1);