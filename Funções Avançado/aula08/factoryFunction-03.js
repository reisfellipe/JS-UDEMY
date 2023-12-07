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
        get imc(){ //get faz com que imc se comporte como um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Fellipe', 'Reis', 1.64, 58);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc); //Não precisa de parênteses porque imc está fingindo ser um atributo do objeto, por conta do prefixo 'get' = Getter