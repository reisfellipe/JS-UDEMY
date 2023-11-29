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
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>Nome: ${nome.value}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${sobrenome.value}</p>`;
        resultado.innerHTML += `<p>Peso: ${peso.value}Kg</p>`;
        resultado.innerHTML += `<p>Altura: ${altura.value}</p>`;
        
    }

    form.addEventListener('submit', recebeEventoForm);

};


meuEscopo();