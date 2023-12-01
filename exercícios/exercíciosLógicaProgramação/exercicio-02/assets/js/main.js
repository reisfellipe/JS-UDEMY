const h1 = document.querySelector('.h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    let weekDay;
    switch (diaSemana) {
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

function getMonthName(numeroMes) {
    let monthName;
    switch (numeroMes) {
        case 0:
            monthName = 'Janeiro';
            return monthName;
        case 1:
            monthName = 'Fevereiro';
            return monthName;
        case 2:
            monthName = 'Março';
            return monthName;
        case 3:
            monthName = 'Abril';
            return monthName;
        case 4:
            monthName = 'Maio';
            return monthName;
        case 5:
            monthName = 'Junho';
            return monthName;
        case 6:
            monthName = 'Julho';
            return monthName;
        case 7:
            monthName = 'Agosto';
            return monthName;
        case 8:
            monthName = 'Setembro';
            return monthName;
        case 9:
            monthName = 'Outubro';
            return monthName;
        case 10:
            monthName = 'Novembro';
            return monthName;
        case 11:
            monthName = 'Dezembro';
            return monthName;
                
    }
}
function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getMonthName(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`);
}

h1.innerHTML = criaData(data);


// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


// h1.innerHTML = data.toLocaleDateString('pt-BR', {dataStyle: 'full', timeStyle: 'short'});
