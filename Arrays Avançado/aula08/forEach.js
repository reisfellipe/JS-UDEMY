// iterando a lista com forEach()
// é semelhante ao forOf()

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
a1.forEach((valor) => console.log(valor));

let total = 0;
a1.forEach(valor => total += valor); //Vai somar todos valores da lista enquanto itera
console.log(total);


// for(let valor of a1) {
//     console.log(valor);
// }