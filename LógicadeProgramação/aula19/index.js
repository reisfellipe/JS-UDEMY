function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//função anônima
const timer = setInterval(function(){ //essa função ela atualiza constantemente sem fim
    console.log(mostraHora());
},1000);

setTimeout(function(){
    clearInterval(timer); //essa função para a execução de uma função de mudança constante 
},5000);

setTimeout(function(){
    console.log('Transição');
}, 6000);

// setInterval(timeInLive, 1000);