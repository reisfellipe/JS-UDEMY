/*
Operadores Lógicos
&& -> AND = Todas as expressões precisam ser verdadeiras para retornar True
|| -> OR  = Pelo menos uma das expressões precisam ser verdadeiras para retornar True
!  -> NOT = 
*/
const expAnd = true && true && true;
console.log(expAnd);

const expOr =  true || false || false;  //só retorna False se todas expressões forem falsas
console.log(expOr);

//exemplo

const usuario = 'Fellipe'; //form usuário digitou
const senha = '12345';     //form usuário digitou

//                             True                 False
const loginUp = usuario === 'Fellipe' && senha === '123456';
console.log(loginUp);
