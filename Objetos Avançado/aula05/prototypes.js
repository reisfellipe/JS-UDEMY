/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__), que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => "ORIGINAL: " + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

};

// Instância
const pessoa1 = new Pessoa('Ledger', 'Ward'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Ryle', 'Kincaid'); // <- Pessoa = Função Construtora

const data = new Date(); // <- Date = Função construtora

console.log(Pessoa);
// console.log(pessoa1);
// console.log(pessoa2);
console.log(data); 