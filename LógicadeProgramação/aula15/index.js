// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);
console.log(rand);

// vai executar o laço até aparecer o número 10
// While checa a condição e se for true ela executa
while (rand !== 10) {
    rand = random(min, max);
    // console.log(rand);
}

// agora com Do and While
// o Do While executa o código depois checa a condição, até dar false
do {
    rand = random(min, max);
    console.log(rand);
}while (rand !== 10) ;