// Como criar métodos dentro de um objeto

const pessoa1 = new Object();
pessoa1.nome = 'Kenna';
pessoa1.sobrenome = 'Rower';
pessoa1.idade = 26;
pessoa1.falarNome = function(){
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
};
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; 
};

console.log(pessoa1.getDataNascimento());
pessoa1.falarNome();