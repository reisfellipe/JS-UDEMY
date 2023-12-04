const getNumber = (n) => {
    if (typeof n !==  'number') return NaN;
    if(n % 3 === 0) return 'Fizz';
    if(n % 5 === 0) return 'Buzz';
    if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if(n % 3 !== 0 || n % 5 !== 0) return n;
    return n;
};

for (let i = 0; i <= 100; i++){
    console.log(i, getNumber(i));
}