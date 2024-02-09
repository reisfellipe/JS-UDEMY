const nome = 'Fellipe';
const sobrenome = 'Reis';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;
// console.log(module.exports);

// Atalho para não ter que digitar 'module.exports.blablabla' só digitando exports direto

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
// this se refere ao exports
this.qualquerCoisa = 'O que eu quise exportar';
