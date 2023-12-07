// IIFE  -> Immediately invoked function expression

(function(){
    const nome = 'Fellipe';
    console.log(nome);
})();

const nome = 'qualquer coisa';

(function(idade, peso, altura){
    const sobrenome = 'Reis';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Fellipe'));
    }

    falaNome();
    console.log(idade,peso,altura);

})(19, 58, 1.80);