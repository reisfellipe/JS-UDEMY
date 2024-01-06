function random(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random * (max - min) + min);
}

function esperaAi(msg,tempo,cb){
    setTimeout(()=>{
        console.log(msg);
        if(cb) cb();
    },tempo);
}

esperaAi('Frase 1', random(1,9), function(){
    esperaAi('Frase 2', random(1,4), function(){
        esperaAi('Frase 3', random(1,5));
    });
});

// esperaAi('Frase 1', random(1,3));
// esperaAi('Frase 2', random(1,3));
// esperaAi('Frase 3', random(1,3));