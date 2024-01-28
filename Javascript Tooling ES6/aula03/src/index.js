// import {nome as nome2, sobrenome, idade, soma, Pessoa as classePessoa} from './modulo1';
// const p1 = new classePessoa('Jimmy', 'Carter');
// console.log(p1);
// const nome = 'Jimmy';

// console.log(nome, sobrenome, idade);
// console.log(`esse é o nome2 ${nome2}`);
// console.log(soma(5,2));

// Podemos importar os dados de outro modulo da maneira tradicional acima, ou todos de uma vez se for mais interessante, a real é que não existe uma maneira melhor, é possível Criar Exportando ao mesmo tempo, mas é bom saber as possibilidades dentro desse cenário,

// Podemos exportar todas de uma vez usando '*' dessa forma;
// import * as MeuModulo from './modulo1';

// console.log(MeuModulo); //Vai retornar um OBJETO contendo todos os dados juntos de uma só vez...

//Nesse caso estamos exportando um dado DEFAULT que é o padrão, então nomeamos como bem quisermos, e virá somente ele, esse recurso só pode ser usado uma vez por arquivo...
import qualquerNome from './modulo1';
console.log(qualquerNome(5,4));