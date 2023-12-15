// Se um objeto precisar ser criado muitas vezes, como dados de clientes, e etc.. É ideal e mais recomendado que se crie um objeto construtor, new Object()
//Simplesmente porque ficar criando objetos literais sempre pode não ser um trabalho prazeroso, sem contar que vez ou outra você pode acabar esquecendo de incluir uma chave ou método importante.

//Crie moldes de objetos, Factory functions / Constructor functions  / Classes

// Factory Function
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;            
        }
    };
}

const p1 = criaPessoa('Ledger', 'Ward');
console.log(p1.nomeCompleto());

//Constructor Function
function Person(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(); //Se caso esse comando estiver em vigor o valor atribuído às chaves ficarão travados, sem ficar sujeitos à futuras alterações, nem Delete, nem reatribuição p1.nome = 'novo valor'
}

const p2 = new Person('Kenna', 'Rowan');
console.log(p2);

// O prefixo new cria um objeto vazio {} <- this