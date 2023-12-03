// For clássico = Geralmente com iteráveis (arrays ou strings)
// For in = Retorna índice ou chave (string, array ou objeto)
// For of = Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Fellipe Reis';

// iterando as letras com os tipos de for
for (let i = 0; i < nome.length; i++){
    // console.log(nome[i]);  //for clássica
}

for (let index in nome ){
    // console.log(nome[index]); //for in
}

//usando for of
for(let valor of nome) {
    // console.log(valor); //ao invés dele retornar o índice, ele retorna o valor dos índices
}

// com array
const cores = ['Branco', 'Laranja', 'Roxo', 'Marrom', 'Cinza'];

for(let cor of cores){
    // console.log(cor);
}

//forEach = função do javascript que faz um For com função

cores.forEach(function(valor, indice){
    console.log(valor, indice);
});














// objetos não são iteráveis
// const materias = {
//     exatas: 'matemática',
//     humanas: 'Sociologia',
//     praticas: 'Educação física'
// };  

// for(let materia of materias) {
//     console.log(materia);
// }
