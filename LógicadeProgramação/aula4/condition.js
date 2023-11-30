/*
if Pode ser usado sozinho
Posso ter vários else if´s na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if
*/


const hora = 8;

if(hora < 12) {
    console.log('Good Morning, Seja bem vindo');
} else if (hora >= 12 && hora <= 17) {
    console.log('Good Afternoon, Seja bem vindo');
} else if (hora >= 18 && hora <= 23){
    console.log('Good Evening, Seja bem vindo');
} else{
    console.log('Seja bem vindo')
}

