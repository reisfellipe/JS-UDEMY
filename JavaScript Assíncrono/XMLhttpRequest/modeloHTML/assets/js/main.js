// const request = obj => {
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
    
//         xhr.addEventListener('load', ()=>{
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.responseText);
//             }else {
//                 reject (xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        
        if(response.status !== 200) throw new Error('ERROR 404 CREATED FROM JS');
    
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.log(e);
    }

    // fetch(href)
    //     .then(response => {
    //         if(response.status !== 200) throw new Error('ERROR 404 CREATED FROM JS');
    //         return response.text();
    //     })
    //     .then(html => carregaResultado(html))
    //     .catch(e => console.log(e));
        
    // const objConfig = {
    //     method: 'GET',
    //     url: href,
    //     success(response){
    //         carregaResultado(response);
    //     },
    //     error(errorText){
    //         console.log(errorText);
    //     }
    // };

}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};

//FETCH API 

// fetch('pagina-6.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('ERROR 404 NOSSO');
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.warn(e));