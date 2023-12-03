// For clássico for(let i = 0; i < seila.length; i++){}
// For in, lê índices ou chave de objetos
const frutas = ['Melancia', 'Manga', 'Uva', 'Banana', 'Abacaxi'];

for(let index in frutas){
    // console.log(frutas[index]);
};

//com objetos agora

const pessoa = {
    nome: 'Fellipe',
    sobrenome: 'Reis',
    idade: 19
};

for(let chave in pessoa) {
    console.log(pessoa[chave]);
};

