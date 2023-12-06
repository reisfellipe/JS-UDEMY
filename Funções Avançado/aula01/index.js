// Declaração de função (Function Hoisting)
// É possível chamar a função em qualquer lugar do código
falaOi();
function falaOi(){
    console.log('oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado');
};
souUmDado(); //a variável que recebe uma função, passa a ser uma função!

// Função pode ser executada por outra função!
function fazFuncao(funcao){
    funcao();
}
fazFuncao(souUmDado)

//  Arrow function
const funcaoArrow = () => {
    console.log('Sou uma Arrow Function');
};
funcaoArrow();

setInterval()