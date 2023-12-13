//                -6        -5        -4       -3      -2        -1
//                 0         1         2        3       4         5
const nomes = ['Ledger', 'Patrick', 'Grace', 'Diem', 'Kenna', 'Scotty'];

//nomes.splice(índice, delete, elem1, elem2, elem3)
// pop

// const removidos = nomes.splice(3, 2); ['Kenna','Scotty'];
// const removidos = nomes.splice(-1, 1); // ['Scotty'];
// const removidos = nomes.splice(-3, 2); // ['Diem', 'Kenna'];
// const removidos = nomes.splice(-3, Number.MAX_VALUE); // Tira até o valor fim da lista
//const removidos = nomes.splice(3, 0, 'Lady Diana'); //Adiciona Lady Diana no indice 3, e empurra o restante para frente

//const removidos = nomes.splice(5, 1, 'Fellipe'); //Remove o item do índice 5 e coloca Fellipe no lugar
// const removidos = nomes.splice(-3, 2, 'Fellipe', 'Reis');

// shift
// const removidos = nomes.splice(0, 1); //removendo o primeiro indice


// push
// nomes.push('adicionado); <-mesma coisa
// nomes.splice(nomes.length, 0,' adicionado','segundo adicionado')

// unshift
nomes.splice(0, 0, 'Adicionado no começo', 'simulando unshift')

console.log(nomes);
// console.log(`removidos: ${removidos}`);
