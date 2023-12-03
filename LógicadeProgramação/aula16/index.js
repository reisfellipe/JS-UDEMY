// Break e Continue

const numeros = [1,2,3,4,5,6,7,8,9];

for(numero of numeros){
    
    if(numero === 2){ //quando o a condição continue encontrar o numero 2 irá pular e continuar a iteração  
        console.log('pulei o numero 2')
        continue;
    }
    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    
    console.log(numero);
}

// com For in
for(let numero in numeros){
       
    if(numero === 2){ 
        console.log('pulei o numero 2')
        continue;
    }
    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    
    console.log(numeros[numero]);
}

// com For clássico

for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i];

    if(numero === 2){ 
        console.log('pulei o numero 2')
        continue;
    }
    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
    
    console.log(numero);
}

// com while
//quando está no while tem qe atualizar a variavel de controle antes das palavras continue e break
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if(numero === 2){ 
        console.log('pulei o numero 2')
        i++; 
        continue;
    }
    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }
    i++;
    
}