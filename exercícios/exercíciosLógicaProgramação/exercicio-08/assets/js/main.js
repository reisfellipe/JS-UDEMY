const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function showHour(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timerInLive = setInterval(function(){
    return console.log(showHour());
},1000);

const pauseTime = setTimeout(function(){
    return (timerInLive);
},1000);

const clearTime = setTimeout(function(){
    return clearInterval(timerInLive);
},1000);

iniciar.addEventListener('click', function(){
    return relogio.innerHTML = `${timerInLive}`;
});

pausar.addEventListener('click', function(){
    return relogio.innerHTML = `${pauseTime}`
});

zerar.addEventListener('click', function(){
    return relogio.innerHTML = `${clearTime}`;
});