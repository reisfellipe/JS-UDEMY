// return = Retorna um valor, e função é encerrada

// function soma(a,b){
//     return a + b;
// }

// function soma2(a, b){
//     console.log(a + b);
// }
// soma2(5, 2);

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'black';
// });

function criaPessoa(nome,sobrenome){
    return {
        nome: nome, sobrenome: sobrenome};
}
const p1 = criaPessoa('Fellipe', 'Reis');
const p2 = {
    nome: 'Luana',
    sobrenome: 'Vieira'
};

//console.log(typeof p1);//object
//console.log(typeof p2);//object

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

// EXPLICAÇÃO = variáveis abaixo também viram funções, por isso é aplicável string dentro delas
const fala = falaFrase('Olá');
const resto = fala('Mundo');

console.log(fala); //[Function: falaResto]
console.log(resto);// Olá Mundo!