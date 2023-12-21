function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
// p1.desconto(100); // 0
// p1.aumento(100);


// Nesse caso estamos atribuindo um objeto literal para p2, para instanciar o prototipo do objeto Produto
const p2 = {
    nome: 'Caneca',
    preco: 15
};

console.log(p1);
// Aqui é o exato momento que instanciamos o prototype do Object.Produto
Object.setPrototypeOf(p2, Produto.prototype);
// Object.setPrototypeOf(p2, p1);
p2.aumento(10);
console.log(p2);

// Usando Object.create(proto, {})
// criando objeto setando o proto, e depois criando chaves (preco, tamanho)
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
    tamanho: {        
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10);
console.log(p3);



// p3.preco = 113;
// p3.aumento(10);