function retornaFuncao(nome){
    // const nome = 'Fellipe'; 
    return function(){
        return nome; //Closure = essa função consegue acessar variáveis do escopo léxico dela
    };
}

const funcao = retornaFuncao('Fellipe');
const funcao2 = retornaFuncao('Luiz');
console.dir(funcao());
console.dir(funcao2());

console.log(funcao());
console.log(funcao2());