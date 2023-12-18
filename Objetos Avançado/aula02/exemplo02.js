const obj = {};

Object.defineProperties(obj, {
    keyUm: {
        value:true,
        Writable:true,
    },
    keyTwo: {
        value: 'Conteudo da chave dois',
        Writable:false,
    },
});

console.log(obj.keyUm);