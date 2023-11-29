const nome = 'Fellipe';
const sobrenome = 'Reis';
const idade = 19;
const peso = 58;
const altura = 1.65;
let imc; //peso / (altura*altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

console.log(nome,sobrenome, 'pesa', peso, 'mede', altura,);
console.log('nasceu em', anoNascimento, 'seu IMC é', imc);