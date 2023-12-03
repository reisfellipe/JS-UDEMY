
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
    console.log(cor);
}


// objetos não são iteráveis
// const materias = {
//     exatas: 'matemática',
//     humanas: 'Sociologia',
//     praticas: 'Educação física'
// };  

// for(let materia of materias) {
//     console.log(materia);
// }
