// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000; // sec * 60 * horas * milisegundos(1000)
// const umDia = 60 * 60 * 24 * 1000; 
// const data = new Date(0 + umDia);

//Mes começa no 0 = Jan

//                     ano  mês dia hora min seg  ms
// const data = new Date(2019,  3, 20,  15, 14, 27, 500);
const data = new Date('2023-04-20 15:37:40'); //outra forma de exibir a data preferida

//Abaixo mais uma maneira de capturar os dados de tempo

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0 = Domingo, 6 = Sábado
console.log(data.toString());

// console.log(Date.now());

