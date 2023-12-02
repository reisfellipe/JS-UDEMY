// array de objetos
/*
1 passo = Desestruturar array de objetos, e pegar os objetos
2 passo = Desestruturar cada objeto com uma função e pegar os valores das chaves
3 passo = Adicionar os valores  da chave tag para uma appendChild dentro do container de html
4 passo = Adicionar os valores da chave texto para uma variável que será usada no innerHTML
*/

// let containerHTML = document.querySelector('.container');

const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag:'section', texto: 'Frase 4'} // 3
];

//1 passo...
const [firstLine, secondLine, thirdLine, fourthLine] = elementos;

const {tag: p, texto: text1} = firstLine;
const {tag: div, texto: text2} = secondLine;
const {tag: footer, texto: text3} = thirdLine;
const {tag: section, texto:  text4} = fourthLine;

containerHTML.appendChild('p')
p.inn