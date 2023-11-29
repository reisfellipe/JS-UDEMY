function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault(); //impede que o navegador atualize e restarte os dados
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        const info = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(info)
        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm);

    resultado.innerHTML += `<p>Nome ${pessoas.nome.value}</p>`;
    resultado.innerHTML += `<p>${pessoas.value}</p>`;
    resultado.innerHTML += `<p>${pessoas.value}</p>`;
};


meuEscopo();