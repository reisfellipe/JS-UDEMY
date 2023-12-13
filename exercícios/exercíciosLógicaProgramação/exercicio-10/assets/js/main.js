function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressEnter();
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 'Enter') return;
            this.realizaConta();
        })
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.deleteOne(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {         
        try {
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta inválida');
            return;
        }
    };

    this.clearDisplay = () => this.display.value = '';
    
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };


}

const calculadora = new Calculadora();
calculadora.inicia();