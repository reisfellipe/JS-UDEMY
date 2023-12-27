const destino = {};
const origem1 = {
    a: 1
}
const origem2 = {
    b: 2,
    c: 3
}

Object.assign(destino, origem1, origem2);
console.log(destino);