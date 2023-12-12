//FUNÇÕES RECURSIVAS
// Simplismente uma função que se chama de volta
// A unica coisa importante é saber onde ela deve parar de se auto-executar

function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);   
}
recursiva(0);
