function temporizador(){
    function showHour(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function startTime() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = showHour(segundos);
        }, 1000);
    }
    
    //segunda maneira de fazer o timer
    document.addEventListener('click', function (e) {
        // console.log(e.target); //mostra no console qual elemento está sendo clicado
    
        const el = e.target;
        if (el.classList.contains('iniciar')) {
            console.log('Você iniciou o Timer!');
            relogio.classList.remove('pausar');
            clearInterval(timer);
            startTime();
            relogio.style.color = 'lightgreen';
        }
        if (el.classList.contains('pausar')) {
            console.log('Você pausou o Timer!');
            clearInterval(timer);
            relogio.classList.add('pausar')
        }
        if (el.classList.contains('zerar')) {
            console.log('Você zerou o Timer');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.style.color = 'white';
            segundos = 0;
        }
    });
}

temporizador();




















// primeira forma de fazer o timer

// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausar');
//     clearInterval(timer);
//     startTime();
//     relogio.style.color = 'lightgreen';
// });

// pausar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.classList.add('pausar')
// });

// zerar.addEventListener('click', function (event) {
//     clearInterval(timer);
//     relogio.innerHTML = '00:00:00';
//     relogio.style.color = 'white';
//     segundos = 0;
// });