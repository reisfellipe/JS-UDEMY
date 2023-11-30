/*
Operadores de comparação
> maior que
< menor que
>= maior que ou igual a
<= menor que ou igual a
== igualdade (valor)  NÃO RECOMENDADO
=== igualdade estrita (valor e tipo)
!= diferente (valor)  NÃO RECOMENDADO
!== diferente estrito (valor e tipo)
*/

const comp = 10 != '10';
// console.log(comp);

function compare(x, y) {
    return x === y;
}

console.log(compare(10,10));