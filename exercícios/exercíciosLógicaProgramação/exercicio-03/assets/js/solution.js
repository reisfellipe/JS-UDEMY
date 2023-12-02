const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' }, // 1
    { tag: 'footer', texto: 'Frase 3' }, // 2
    { tag: 'section', texto: 'Frase 4' } // 3
];


const container = document.querySelector('.container');

const div = document.createElement('div'); //adicionando novo elemento no html

for(let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div); //incluindo elemento div dentro da tag container

// for (let i = 0; i < elementos.length; i++) {
//     let {tag, texto} = elementos[i];
//     let tagCriada = document.createElement(tag);
//     tagCriada.innerText = texto;
//     div.appendChild(tagCriada);
    
//     console.log(tag);
// }




