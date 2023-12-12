// Valor por referência
/*
pop() = EXCLUI ULTIMO ITEM DA LISTA
shift() = EXCLUI PRIMEIRO ITEM DA LISTA
push() = ADICIONA NOVO ITEM AO FIM DA LISTA
unshift() = ADICIONA NOVO ITEM NO INÍCIO DA LISTA
length = ATRIBUTO PRA EXPOR MEDIDA DA LISTA

*/

const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] ='João';
delete nomes[2]; //EXCLUI SEM ALTERAR OS DEMAIS INDICES
// console.log(nomes); 

const nomes2 = ['Fellpe', 'Luana', 'Louiz'];
const novo = [...nomes2]; //AQUI ESTAMOS COPIANDO TODA A LISTA DE NOMES2 PARA O ARRAY LITERAL DE NOVO
const removido = novo.pop();  //APAGA O ULTIMO ITEM DA LISTA
nomes2.unshift('Liza'); //ADICIONA NOVO ITEM NO COMEÇO DA LISTA
nomes2.unshift('Carter');

console.log(nomes2)