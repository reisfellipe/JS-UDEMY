//Desestruturando objetos

const nomeGlobal = 'Global';
const pessoa = {
    // nome: 'Fellipe',
    sobrenome: 'Reis',
    idade: 19,
    endereco: {
        rua: 'Rua Professor Nelson de Senna',
        numero: 303
    }
};

//Atribuição via desestruturação 
//é possível alterar os nomes das chaves usando -> nomechave: novonome
//é possível reatribuir um valor para alguma chave caso necessário  -> nomechave = valornovo 

//o valor novo pode ser o que você quiser, '${valor}', ou literais, ou strings
//      chave = 'atribuiçãoNova' chave = será isso,  chave
const { nome = `${nomeGlobal}`, sobrenome: lastName, idade } = pessoa;
console.log(nome, lastName);

//Novo objeto
const techCar = 'Sistema de inteligência';
const carro = {
    marca: 'FIAT',
    ano: 2023,
    modelo: 'Turbo',
    pecas: {
        interior: 'Ar-condicionado',
        exterior: 'Retrovisor Elétrico'
    }
};

const { 
    marca, //selecionando pela chave
     ano: geracao, //transferindo valor da chave ano para a variável geração
      pecas: {interior = item1}  //pegando valor do objeto/chave pecas e passando valor de interior para variável item1
     } = carro;
console.log(marca, geracao, item1);

//Mais um objeto

const organismo = {
    respiratorio: 'Pulmões',
    neurotransmissor: 'Cérebro',
    regioes: {
        tronco: 'Tórax',
        membros: {
            superiores: 'Braços',
            inferiores: 'Pernas'
        }
    }
}

const {
    respiratorio,
    neurotransmissor,
    regioes: {
        tronco,
        ...resto
    }
} = organismo;

console.log(respiratorio, neurotransmissor, tronco, `este é o resto '${resto}'`);