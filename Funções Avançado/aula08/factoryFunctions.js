function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            // nome e sobrenome não precisam ser acessados com this porque está antes de 'fala:'
            return `${nome} ${sobrenome} está falando sobre ${assunto}, e pesa ${this.peso}Kg, sua altura é de ${this.altura}`;
        },
        altura: altura,
        peso: peso
        
    };
}

const p1 = criaPessoa('Fellipe', 'Reis', 1.64, 58);
const p2 = criaPessoa('Giovana', 'Gonzalles', 1.87, 83);
console.log(p1.fala('Javascript'));
console.log(p2.fala('Flores'));