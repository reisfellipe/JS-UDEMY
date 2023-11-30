//Capturar evento de submit de formulário
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const showLevelImc = levelImc(imc);
    const msg = `Seu IMC é ${imc} (${showLevelImc})`;
    setResultado(msg, true);
});

function levelImc(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9) return level[5];
    if(imc >= 34.9) return level[4];
    if(imc >= 29.9) return level[3];
    if(imc >= 24.9) return level[2];
    if(imc >= 18.5) return level[1];
    if(imc < 18.5) return level[0]  
}

function getImc(peso,altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ``;
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }
}