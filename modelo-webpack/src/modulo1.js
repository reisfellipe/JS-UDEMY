export const nome = 'Fellipe'; //exportando e criando ao mesmo tempo
export const sobrenome = 'Reis';
export const idade = 19;

export function soma(x,y){
    return x + y;
}

// export default (x,y) => x * y;

export {nome, sobrenome, idade, soma};



// export function combinaNomes(nome1,nome2){
//     return String(nome1 + nome2);
// }

export default class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
