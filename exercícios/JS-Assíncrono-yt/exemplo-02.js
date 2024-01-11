function asyncFunction(){
    setTimeout(()=>{
        console.log('asyncfuntion');        
    },300);
}

console.log('inicio');

asyncFunction();

console.log('fim');