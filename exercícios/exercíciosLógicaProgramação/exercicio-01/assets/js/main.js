function calculaImc() {
    const form = window.document.querySelector('#form');
    const resultado = document.querySelector('.resultado');

    function calculando(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('#peso'));
        const altura = Number(form.querySelector('#altura'));
        const imc = peso / altura * altura;

        if(imc < 18.4) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso saudável)</p>`;
        } else if (imc >= 18.5 && imc <= 24,9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Peso normal saudável)</p>`;
        } else if (imc >= 25 && imc <= 29,9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Sobre pese)</p>`;
        } else if (imc >= 30 && imc <= 34,9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39,9) {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else {
            resultado.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3: GRAVE)</p>`;  
        } 
        return `${imc}`;
    }
    form.addEventListener('submit', calculando())
}

calculaImc();
