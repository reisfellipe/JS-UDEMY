// Só funciona com function declaradas em function dessa forma abaixo
//Não funciona com arrowFunctions nem outras

function funcao(a, b, c){
    let total = 0;
    for(argumento of arguments){
        total += argumento;
    }
    // console.log(total, a,b,c);
}
//     a b c arguments 
funcao(1,2,3,4,5,6);

function funcaoParametros(a, b, c, d, e, f){
    // Os parâmetros que não recebe valor é undefined
    // console.log(a,b,c,d,e,f);
}
funcaoParametros(1,2,3); //d,e,f = undefined

function testando(a, b = 0, c = 5){
    // console.log(a + b + c);
}
testando(2, '',10);// 210 porque se tiver uma string ele vai concatenar invés de somar

function somando(a,b = 2,c){
    // console.log(a + b + c);
}
//        valor padrão b = a unica forma de trazer o valor padrão é pondo undefined
somando(2, undefined, 6);

function soma(a, b = 5, c){
    // console.log(a + b + c);
}
//Nesse caso, ele tá transformando o valor padrão de b em 0, dessa forma soma só o a + c = 15
soma(5, null, 10);

function atribuicaoPorDesestruturacao({nome, sobrenome, idade}){
    // console.log(nome, sobrenome,idade);
}
// colocando um objeto literal como argumento
atribuicaoPorDesestruturacao({nome:'Fellipe', sobrenome:'Reis', idade:19}); 
//ou poe um objeto literal diretamente....ou
let obj = {nome:'Fellipe', sobrenome:'Reis', idade:19};
// atribuicaoPorDesestruturacao(obj); 
// da o mesmo resultado

// AGORA COM ARRAY
function atribuindoComArray([valor1, valor2, valor3]){
    console.log(valor1,valor2,valor3);
}
//atribuindoComArray(['Fellipe', 'Reis', 19]); //Fellipe Reis 19
// Ou coloque uma variável que tenha uma array
let myself = ['Meu nome', 'Sobrenome', 18]; //da o mesmo resultado
//atribuindoComArray(myself);

function conta(operador, acumulador, ...numeros){ //"..." indica que vai capturar o resto dos argumentos
    
    for(let numero of numeros){
        // console.log(numero); // 10 20 30, porém queremos somar esses numeros
        // acumulador += numero; //aqui ele vai somar de um em um

        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*' || operador === 'x') acumulador *= numero;
    }
    // console.log(acumulador);
}
// conta('+', 0, [10,20,30]); Ao invés de usar array para determinar os números, faça
conta('+', 1, 10,20,30);

const makingPlus = (operador, acumulador, ...numeros) => { 
    console.log(operador, acumulador, numeros);
}
makingPlus('+', 1, 10,20,30); //+ 1 [ 10, 20, 30 ]

// COM os "..." ele captura todos os argumentos e transforma num array de índices
//mas SEM os "..." ele só captura o valor 'primeiro resto' 
const getArgs = (...args) => console.log(args);
getArgs('primeiro resto', 2,3,4,5, 'Ultimo argumento resto')