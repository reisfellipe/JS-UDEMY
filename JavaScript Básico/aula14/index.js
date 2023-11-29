function soma(x = 1, y = 1){  //caso os dois parâmetros nãos sejam passados assumirão o valor 1, caso contrário será substituídos
    const res = x + y;
    return res; // Se alum código for passado após RETURN não será executado
}

console.log(soma(2,5));


const raiz = function(n) {
    return n ** 0.5;
};

//ou podemos fazer uma função usando ArrowFunction =>

const raizQ = n => n ** 0.5;

console.log(raizQ(100))
console.log(raiz(25));