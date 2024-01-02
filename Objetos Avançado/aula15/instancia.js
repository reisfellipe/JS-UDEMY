class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    //Método estático
    static soma(x,y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('Samsung control');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
// controle1.soma();//is not a function

//Uma função que está dentro de uma Classe
console.log(ControleRemoto.soma(4,2));

console.log(controle1);