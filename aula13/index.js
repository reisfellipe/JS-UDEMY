//                 0       1         2
const alunos = ['Luiz', 'Pedro', 'Dafine'];
alunos[0] = 'Fellipe'; //editando o índice 0
alunos[3] = 'Pablo'; // Alterando e criando mais um índice
alunos[alunos.length] = 'Luana'; //adicionando mais um elemento
alunos.push('Roberta'); //A forma CORRETA DE ADICIONAR no fim, usando método push()
alunos.unshift('add com UNSHIFT') // Caso seja necessário ADICIONAR NO COMEÇO use o método unshift()
const removido = alunos.pop(); //REMOVE o ÚLTIMO item, e pode salvar o item removido numa variável
const deleted = alunos.shift(); //REMOVE O PRIMEIRO item do array, e salva.
delete alunos[1]; //Deleta da lista sem alterar os demais índices


console.log(`O item >> ${deleted} << foi removido da lista`)
console.log(`O item >> ${removido} << foi removido da lista`);
console.log(alunos); 