// Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        
        //Getter
        get nomeCompleto(){
            return `${nome} ${sobrenome}`;
        },
        
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' '); //Vai fazer 
            console.log(valor);
        },

        fala: function(assunto){
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
p1.nomeCompleto = 'Fellipe Reis da Silva';