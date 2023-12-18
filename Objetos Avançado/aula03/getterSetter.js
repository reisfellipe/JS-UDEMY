// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        // value: estoque,
        // writable: true,
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Só aceitamos valores numéricos');
            }

            estoquePrivado = valor;
        }
    }); 
}

function criaProduto(nome){
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa',  '');
            nome = valor;
        }
    };
}

const p1 = new Produto('Sapato', 699, 3);

// p1.estoque = 'jdo';
// // console.log(p1);
// console.log(p1.estoque);


const p2 = criaProduto('Camiseta');
p2.nome = 'alguma coisa';
console.log(p2.nome);
