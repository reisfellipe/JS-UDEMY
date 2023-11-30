function getWeekDays(){
    let diaSemanaNome;

    switch (diaSemana) {
        case 0:
            return diaSemanaNome = 'Domingo';
        case 1:
            return diaSemanaNome = 'Segunda';
        case 2:
            return diaSemanaNome = 'Terça';
        case 3:
            return diaSemanaNome = 'Quarta';
        case 4:
            return diaSemanaNome = 'Quinta';
        case 5:
            return diaSemanaNome = 'Sexta';
        case 6:
            return  diaSemanaNome = 'Sábado';
        default:
            diaSemanaNome = '';
    }
}

//new Date(); vazio retorna o tempo atual
const data = new Date('2004-09-07 00:00:00');
const diaSemana = data.getDay();
const diaSemanaNome = getWeekDays();
console.log(diaSemanaNome);



// if(diaSemana === 0){
//     diaSemanaNome = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaNome = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaNome = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaNome = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaNome = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaNome = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaNome = 'Sábado';
// } else {
//     diaSemanaNome = '';
// }
