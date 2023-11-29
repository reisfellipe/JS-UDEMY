let num1 = 9.638339;
console.log(Math.floor(num1) ** (1/2)); //para obter a raíz quadrado 

let num2 = Math.floor(num1); // floor() arredonda o numero decimal para baixo - 9

let num3 = Math.ceil(num1); // ceil() Arredonda o numero decimal para cima - 10

let num4 = Math.round(num1);// round() Arredonda pra cima ou pra baixo dependendo de qual tiver mais perto 

console.log(Math.max(1,2,3,4,5,6,-3,-50,-239,1500,8,22)); // max() devolve o maior numero da sequência

console.log(Math.min(1,2,3,5,6,-10,-3221,189,-89)) // min() devolve o menor número da sequência

console.log(Math.random()); //random() Gera um numero aleatório com várias casas decimais

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //dessa forma só irá gerar números aleatórios entre 10 e 5, dentro do round() irá arredondar pra cima
console.log(aleatorio); 


console.log(100 / 0) //erro do JavaScript, >> Infinity >>True