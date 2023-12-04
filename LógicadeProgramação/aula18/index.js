try{
    // É executada quando não há erros
}catch(e){
    // Executada quando há erros
} finally {
    // Sempre será executado independente do erro ou não, é possível omitir esse bloco se não for necessário
}


// try {
//     console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei arquivo');
// }catch(e){
//     console.log('Deu erro');
// } finally {
//     console.log('FINALLY: eu sempre serei executado');
//}

const getHour = (data) => {
    if (data && !(data instanceof Date)){
        throw new ErrorEvent('Esperando instância de Date.')
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try {
    const data = new Date('01=02-1970 12:34:12');
    const hora = getHour(11);
    console.log(hora);
}catch (e){
    //tratar erro
    console.log(e)
} finally{
    console.log('Tenha um bom dia.')
}


