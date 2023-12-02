const verdadeiro = true;

// let nome = 'Reis'; //Variável global, porém let é variável de escopo de bloco
// var nome1 = 'Silva'; 

// if (verdadeiro) {
//     let nome = 'Fellipe'; //Criando variável
//     console.log(nome, nome1);

//     if (verdadeiro) {
//         let nome = 'John' //Criando outra variável
//         console.log(nome, nome1);
//     }
// }


//Testando micro escopo 

// function say() {
//     let nome = 'Primeiro escopo'
//     var sobrenome = 'Reis';

//     if (verdadeiro) {
//         let nome = 'Fellipe';
//         console.log(nome,sobrenome) //as variaveis globais podem ser utilizadas dentro de qualquer micro bloco dentro da função, porem nenhuma variavel dos micro bloco podem ser usadas fora do escopo da função,  como exemplo vimos a Let nome = 'Fellipe'; que não pode ser usada fora do escopo do if()
//     }

//     console.log(nome,sobrenome)
// }

// say();

