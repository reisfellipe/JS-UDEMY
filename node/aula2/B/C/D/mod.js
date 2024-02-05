// module.exports = function(x,y){
//     return x * y;
// };

// module.exports(2,2);

module.exports = class Cachorro {
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} está latindo AU AU`);
    }
};