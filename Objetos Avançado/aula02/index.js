// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    // Dessa forma configura-se somente a chave especificada = 'estoque'
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: true, // valor
        writable: true, // pode alterar
        configurable:true // configurável
    });


    //Dessa forma as configurações só serão aplicadas a chave especificada
    Object.defineProperties(this, {
        nome: {
        enumerable: nome, 
        value: function(){
            return estoque;
        }, 
        writable: true, 
        configurable: true 
        },
        preco: {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: true 
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}
 




// Dessa forma será configurado para todas as chaves da nossa função construtora de objetos
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: false, 
    //     value: function(){
    //         return estoque;
    //     }, 
    //     writable: false, 
    //     configurable: false 
    // });

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, // valor  
    //     writable: false, // pode alterar = true, vice-versa = false
    //     configurable: false // pode reconfigurar a chave = true, vice-versa = false
    