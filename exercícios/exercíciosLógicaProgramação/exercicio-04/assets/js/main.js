const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgroundColorBody = stylesBody.backgroundImage;
console.log(backgroundColorBody);


for(let p of ps) {
    p.style.backgroundImage = `${backgroundColorBody}`;
    p.style.color = 'white';
}
