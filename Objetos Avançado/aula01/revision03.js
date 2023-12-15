// Como apagar um valor da chave

const pessoa1 = new Object();
pessoa1.nome = 'Kenna';
pessoa1.sobrenome = 'Rower';

delete pessoa1.nome;
console.log(pessoa1); // {sobrenome: 'Rower'}