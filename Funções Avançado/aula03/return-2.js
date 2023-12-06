// function duplica(n){
//     return n * 2;
// }

// function triplica(n){
//     return n * 3;
// }

// function quadriplica(n){
//     return n * 4;
// }
// AO INVÉS DE REPETIR OS CÓDIGOS ACIMA, PODERÍAMOS FAZER

// function criaMultiplicador(multiplicador){
//     // multiplicador
//     // function multiplicacao(n){
//     //     return n * multiplicador;
//     // }
//     //return multiplicacao; 
//     //OU PODEMOS RETORNAR DIRETO A PRÓPRIA FUNÇÃO

    
// }

// OUU...
function criaMultiplicador(multiplicador){
    //multiplicador nesse escopo
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));     //4
console.log(triplica(2));    //6
console.log(quadriplica(10)); //8
