function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

// VAMOS DELEGAR A TAREFA DO GERADOR 3 PARA O GERADOR 4
function* geradora4(){
    yield* geradora3(); // 1  2  3
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4){
    console.log(valor);
}