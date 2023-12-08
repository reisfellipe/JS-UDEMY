// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); //Vai fazer 
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala: function(assunto = 'Falando sobre nada'){
            return `${nome} ${sobrenome} está falando sobre ${assunto}, e pesa ${this.peso}Kg, sua altura é de ${this.altura}`;
        },

        altura: altura,
        peso: peso,
        
        get imc(){ //get faz com que imc se comporte como um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Fellipe', 'Reis', 1.64, 58);
// console.log(p1.nome + ' ' + p1.sobrenome); //Fellipe Reis
// console.log(p1.nomeCompleto()); // Fellipe Reis
// console.log(p1.nomeCompleto); //Fellipe Reis, get fez o método se comportar como atributo
const p2 = criaPessoa('Luiz', 'Reis', 1.77, 83);
console.log(p1.fala());
console.log(p2.fala('CARROS ESPORTIVOS'));