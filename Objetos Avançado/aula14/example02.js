class Iphone{
    constructor(modelo, memoria){
        this.modelo = modelo;
        this.memoria = memoria;
    }

}

const apple1 = new Iphone('Iphone 13', '128GB');
console.log(apple1);

class Apps extends Iphone {
    
}