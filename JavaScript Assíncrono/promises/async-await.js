function random(min=0,max=3){
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

async function executa(){
    try {
        const fase1 = await esperaAi('Fase 1', random());
        console.log(fase1);

        setTimeout(function(){
            console.log('Essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi('Fase 2', random());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', random());
        console.log(fase3);
        console.log('Terminamos na fase: ', fase3);
    }catch(e){
        console.log(e);
    }
}

// executa();

/*ESTADOS DAS PROMISES

- Pending = Pendente
- Fullfilled = Resolvida
- Rejected = Rejeitada

*/

const teste2 = esperaAi('qlq', 5000);
console.log(teste2);

esperaAi('Fase 1', random())
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', random());
    })
    .then(fase => {
        console.log(fase);
        return esperaAi('Fase 3', random());
    })
    .then(fase => {
        console.log(fase);
        return fase;
    })
    .then(fase => {
        console.log('Terminamos na fase:', fase);
    })
    .catch(error => console.log(error));

