const pessoa1 = {
    nome: 'Juliana',
    sobrenome:  'Rocha',
    idade: 25
};

console.log(pessoa1); 
// AO INVÉS DE CRIAR MIL OBJETOS QUE DESCREVA MIL PESSOAS, É RECOMENDADO CRIAR UMA FUNÇÃO QUE CRIE PESSOAS
function criaPessoa(nome,sobrenome,idade){
    return {nome, sobrenome,idade};  //maneira mais legível e simples de criar objetos
}

const pessoa2 = criaPessoa('Fellipe', 'Reis', 19);
const pessoa3 = criaPessoa('Leonardo', 'Rui', 33);
const pessoa4 = criaPessoa('Izabela', 'Novais', 16);


console.log(pessoa2.nome, pessoa3.nome)