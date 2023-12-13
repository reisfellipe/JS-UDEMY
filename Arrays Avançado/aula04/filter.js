// Filter, Map, reduce

// Retorne os números maiores que 10
const numbers = [5, 13, 22, 8, 42, 2, 80, 11, 9, 58];

function callbackFilter(valor){ //indice, array
    return valor > 10; //ja retorna true ou false

    // if(valor > 10) {
    //     return true;
    // }else {
    //     return false;
    // }
}

const plusTen = numbers.filter(callbackFilter);
console.log(plusTen);






// tentativa
// function plusTen(){
//     for(let valor of numbers){
//         let i = 0;
//         while(i <= numbers.length){
//             if(valor <= 10) {
//                 i++;
//                 return valor;
//             }
//         }
//     }
// }