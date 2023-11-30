const numero = 8;

if(numero >= 0 && numero <= 5) {
    console.log('Sim, o número está entre 0 e 5.');
} else if (1 === 1) { //se houver uma condição verdadeira, o restante deixará de ser executado mesmo se outras expressões posteriores forem TRUE
    console.log('LITERAL')
}else if (numero >= 6 && numero <= 10) {
    console.log('o numero está entre 6 e 10')    
}else {
    console.log('Não, o número não está entre 0 e 5.');
}  

