/*
&& -> false && true  -> false "o valor mesmo"
|| -> false || false -> retorna "o valor verdadeiro"

Valores avaliados em falso no JavaScript

false
0
'' ""  ``
null / undefined
NaN

*/

//console.log('reisfellipe.ofc' && true && '');

function sayHi(){
    return 'Oi'
}
let vaiExecutar = true;
console.log(vaiExecutar && sayHi());


console.log(0 || false || null || 'Sonic'); //Ele retorna o primeiro valor verdadeiro

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); // 'preto' enquanto corUsuario for null

const a = 0;
const b = null;
const c = 'false'; //essa é um valor True, pois não é false literal
const d = false;
const e = undefined;
const f = NaN;

console.log(a || b || c || d || e || f);
