// try {
//     console.log(naoExisto);
// }catch(err){
//     console.log('naoExisto não existe.');
// }

const soma = (x,y) => {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
    }
    return x + y;
};

// Se ocorrer um erro dentro do bloco try o catch será executado

try{
    console.log(soma(2,'2'));
    console.log(soma(1,2));
}catch(error){
    console.log('Tente novamente');
}