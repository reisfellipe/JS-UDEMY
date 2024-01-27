function geraNomes(nome){

    if(nome === 'Fellipe'){
        console.log(`Este computador pertence à ${nome}`);
    }else if (nome === 'Bernardo'){
        console.log(`${nome} é sobrinho do Fellipe`);
    }else{
        console.log('Este usuário não foi reconhecido');
    }
    return nome;
}
geraNomes('Fellipe');