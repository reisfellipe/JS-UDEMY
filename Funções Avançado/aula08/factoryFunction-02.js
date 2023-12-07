// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} ${sobrenome} está falando sobre ${assunto}, e pesa ${this.peso}Kg, sua altura é de ${this.altura}`;
        },
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Fellipe', 'Reis', 1.64, 58);
const p2 = criaPessoa('Giovana', 'Gonzalles', 1.87, 83);
console.log(p1.fala('Javascript'));
console.log(p2.fala('Flores'));
console.log(p1.imc());