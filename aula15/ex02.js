const person = {
    nome: 'Fellipe',
    sobrenome: 'Reis',
    idade: 19,

    fala(){
        console.log(`me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`); 
    }, //SEMPRE que quiser referenciar algum valor do objeto numa string, use o prefixo THIS. 

    increaseAge(){
        ++this.idade;
    }
};

person.fala();
person.increaseAge();