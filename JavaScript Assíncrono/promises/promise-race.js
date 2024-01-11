function random(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random * (max - min) + min);
}

function esperaAi(msg,tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string') {
               reject('CODE FAILED');
               return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
        },tempo);
    });
}

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500), //Essa leva menos tempo, portanto é retornada
    esperaAi('Promise 3', 1000),
    esperaAi(1000, 300),
    // 'Another value'
];

//Promise.race = sempre vai entregar o primeiro valor

Promise.race(promises)
.then((valor)=>{
    console.log({valor});
})
.catch((error)=>{
    console.log({error});
})