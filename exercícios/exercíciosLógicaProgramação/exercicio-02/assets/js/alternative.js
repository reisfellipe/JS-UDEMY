const h1 = document.querySelector('.h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) { //Apesar de podermos usar SWITCH, Podemos fazer assim tbm
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return diasSemana[diaSemana];
}

function getMonthName(numeroMes) { //Apesar de podermos usar SWITCH, Podemos fazer assim tbm
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];       
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