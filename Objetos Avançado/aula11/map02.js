//Criando um objeto Map
let meuMapa = new Map();

//Adicionando elementos ao Map
meuMapa.set('chave1', 'Valor1');
meuMapa.set('chave2', 'Valor2');
meuMapa.set('chave3', 'Valor3');

//Obtendo valores do Map
console.log(meuMapa.get('chave1')); //Saída: valor1

//Verificando se uma chave existe no Map
console.log(meuMapa.has('chave2')); //Saída: true

//Removendo um elemento do Map
meuMapa.delete('chave3');

//Iterando sobre as chaves e valores do Map
meuMapa.forEach((valor,chave)=>{
    console.log(`${chave} : ${valor}`);    
});

//Obtendo o número de elementos no Map
console.log(meuMapa.size); // Saída: 2

/*
=== EXPLICAÇÃO ===

Se você estiver interessado no objeto Map em JavaScript, ele é uma estrutura de dados que permite associar chaves a valores, sem as limitações de um objeto regular. Diferentemente dos objetos comuns, as chaves em um Map podem ser de qualquer tipo, incluindo objetos e funções.

O objeto Map é útil quando você precisa associar informações específicas a determinadas chaves e precisa manter uma ordem de inserção. Ele também fornece métodos convenientes para manipulação de dados, como set, get, has, delete, e forEach.

Lembre-se de que, ao contrário de objetos regulares, as chaves em um Map podem ser de qualquer tipo, proporcionando mais flexibilidade em determinadas situações.
*/