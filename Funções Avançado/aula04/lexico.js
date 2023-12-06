const nome = 'Fellipe';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = 'Reis'; //Nesse caso, a funçao falaNome() exibirá fellipe, porque ela sabe onde foi criada.
    falaNome();
}
usaFalaNome()