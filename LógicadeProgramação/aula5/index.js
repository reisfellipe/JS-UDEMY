// (Condição) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'; //é a mesma coisa que o IF abaixo
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário comum');
// }


const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);