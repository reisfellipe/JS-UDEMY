// Função construtora -> retorna/constrói objetos
// Função fábrica -> Fabrica objetos
//Construtora -> Precisamos sempre iniciar o nome com letra maiúscula -> Pessoa (new)

function Pessoa(nome,sobrenome){
    //Variáveis privadas
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos privados
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Fellipe','Reis');
const p2 = new Pessoa('Augusto', 'Carvalho');
p2.metodo();

// console.log(p1.nome);
