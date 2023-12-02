const verdadeiro = true;

let nome = 'Reis'; //Variável global, porém let é variável de escopo de bloco
var nome1 = 'Silva'; 

if (verdadeiro) {
    let nome = 'Fellipe'; //Criando variável
    console.log(nome, nome1);

    if (verdadeiro) {
        let nome = 'John' //Criando outra variável
        console.log(nome, nome1);
    }
}