const resultado = document.querySelector('.info');
let data;
const day = data.getDay();
const month = data.getMonth() + 1;
const year = data.getFullYear();

function showTime(day) {
    switch (timeNow) {
        case 0:  
            return `Domingo`;
        case 1:
            return `Segunda-feira`;
        case 2:
            return `Terça-feira`;
        case 3:
            return `Quarta-feira`;
        case 4:
            return `Quinta-feira`;
        case 5:
            return `Sexta-feira`;
        case 6:
            return `Sábado`;
        default:
            return '';
    }
}


 resultado.innerHTML = `Hoje é ${showTime(day)}, ${}`;