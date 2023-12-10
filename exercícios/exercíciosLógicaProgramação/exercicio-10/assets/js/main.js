function Calculadora(){

    const display = document.querySelector('.display');

    const inicia = () => {
        cliqueBotoes();
        pressEnter();
    };

    const pressEnter = () => {
        display.addEventListener('keypress', e => {
            if(e.keyCode === 13){
                return realizaConta();
            }
        })
    };

    const realizaConta = () => {
        let conta = = display.value;

        try {
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida');
                return;
            }
            display.value = String(conta);
        }catch(e){
            alert('Conta inválida');
            return;
        }
    };

    const clearDisplay = () => {
        display.value = '';
    };

    const deleteOne = () => {
        display.value = display.value.slice(0, -1);
    };

    const btnParaDisplay = (valor) => {
        display.value += valor;
    };

    const cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
        })

        if(el.classList.contains('btn-num')){
            btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')){
            clearDisplay();
        }

        if(el.classList.contains('btn-del')){
            deleteOne();
        }

        if(e.classList.contains('btn-eq')){
            realizaConta();
        }
    };

}

const turnOn = new Calculadora.inicia();
turnOn();