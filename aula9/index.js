let varA = 'A';
let varB = 'B';
let varC = 'C';

const AValue = varA;

varA = varB;
varB = varC;
varC = AValue;
console.log(varA, varB, varC)