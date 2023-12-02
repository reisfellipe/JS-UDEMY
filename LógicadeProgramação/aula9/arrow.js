// function subtracao(x,y){
//     return x - y;
// }

const subtracao = (a,b) => {
    return a - b;
}

// quando uma function tem somente uma instrução de retorno, pode tirar o return
// Quando a function tem somente UM PARÂMETRO, NÃO precisa usar os ()
// Senão tiver parametros, mantenha as () vazias 
function somaMais2(a) {
    return a + 2;
}
// fica assim usando arrowFunction =>
//Um parâmetro = sem parenteses ()
const soma = a => a + 2;

function diaDoMes(){
    return new Date().getDate();
}

const day = () => new Date().getDate();

console.log(soma(2));


