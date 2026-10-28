// =====================================================
// PALAVRAS-CHAVE DO JAVASCRIPT (comentadas)
// Palavras-chave são reservadas pela linguagem: não podem
// ser usadas como nome de variável ou função.
// =====================================================


// ---------- 1. DECLARAÇÃO DE VARIÁVEIS ----------

// let: cria uma variável cujo valor pode mudar. Vale só dentro do bloco { }
let idade = 18;
idade = 19; // pode ser reatribuída

// const: cria uma constante, que não pode ser reatribuída
const PI = 3.14;
// PI = 3; // ERRO: não se pode reatribuir uma const

// var: forma antiga de declarar variáveis (escopo de função).
// Hoje se prefere let e const.
var nome = "Rafael";


// ---------- 2. FUNÇÕES ----------

// function: declara uma função (bloco de código reutilizável)
// return: devolve um valor e encerra a função
function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3)); // 5

// Arrow function: forma curta de escrever funções (usa =>)
const dobro = (n) => n * 2;

// async / await: trabalham com código assíncrono (que demora, como buscar dados)
// async: marca a função como assíncrona (ela devolve uma Promise)
// await: espera uma Promise terminar antes de seguir
async function buscarDados() {
  const resposta = await fetch("https://api.exemplo.com/dados");
  return await resposta.json();
}

// yield: pausa e devolve um valor dentro de um gerador (function*)
function* contador() {
  yield 1;
  yield 2;
  yield 3;
}


// ---------- 3. CONDICIONAIS ----------

// if / else if / else: executa blocos conforme uma condição
if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 16) {
  console.log("Pode votar");
} else {
  console.log("Menor de idade");
}

// switch / case / default / break: escolhe entre vários valores
// case: cada valor possível
// break: sai do switch (sem ele, a execução "cai" no próximo case)
// default: executado se nenhum case combinar
const dia = 3;
switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  default:
    console.log("Outro dia");
}


// ---------- 4. LAÇOS (REPETIÇÕES) ----------

// for: repete com contador (início; condição; passo)
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while: repete enquanto a condição for verdadeira
let x = 0;
while (x < 3) {
  x++;
}

// do ... while: executa pelo menos 1 vez e depois testa a condição
do {
  x--;
} while (x > 0);

// for...of: percorre os VALORES de um array (ou string)
const frutas = ["maçã", "banana", "uva"];
for (const fruta of frutas) {
  console.log(fruta);
}

// for...in: percorre as CHAVES (propriedades) de um objeto
const pessoa = { nome: "Ana", idade: 20 };
for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// break: interrompe o laço
// continue: pula para a próxima repetição
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // pula o 2
  if (i === 5) break;    // para no 5
  console.log(i);
}


// ---------- 5. TRATAMENTO DE ERROS ----------

// try: bloco onde pode acontecer um erro
// catch: executado se houver erro
// finally: executado sempre, com erro ou sem
// throw: lança (cria) um erro manualmente
try {
  throw new Error("Algo deu errado!");
} catch (erro) {
  console.log(erro.message);
} finally {
  console.log("Isso sempre executa");
}


// ---------- 6. CLASSES E OBJETOS ----------

// class: molde para criar objetos
// constructor: método executado ao criar o objeto
// this: se refere ao próprio objeto
// static: método que pertence à classe, não ao objeto
class Animal {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(this.nome + " faz um som");
  }
  static tipo() {
    return "Animal";
  }
}

// extends: cria uma classe que herda de outra
// super: chama o construtor/métodos da classe pai
class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }
  falar() {
    console.log(this.nome + " late");
  }
}

// new: cria uma instância (objeto) a partir de uma classe
const rex = new Cachorro("Rex");
rex.falar();

// get / set: métodos que funcionam como propriedades (ler e gravar)
class Pessoa {
  constructor(nome) { this._nome = nome; }
  get nome() { return this._nome; }
  set nome(valor) { this._nome = valor; }
}


// ---------- 7. OPERADORES EM FORMA DE PALAVRA ----------

// typeof: retorna o tipo de um valor
console.log(typeof "texto"); // "string"
console.log(typeof 10);      // "number"

// instanceof: verifica se um objeto foi criado por uma classe
console.log(rex instanceof Animal); // true

// in: verifica se uma propriedade existe no objeto
console.log("nome" in pessoa); // true

// delete: remove uma propriedade de um objeto
delete pessoa.idade;

// void: avalia uma expressão e devolve undefined
void 0;


// ---------- 8. VALORES LITERAIS ----------

// true / false: valores booleanos (verdadeiro / falso)
const ligado = true;
const desligado = false;

// null: ausência intencional de valor
const vazio = null;

// undefined: variável declarada sem valor (não é palavra-chave oficial,
// mas é um valor global especial)
let semValor;
console.log(semValor); // undefined


// ---------- 9. MÓDULOS ----------

// export: disponibiliza algo para outros arquivos
// import: traz algo de outro arquivo
// (exigem <script type="module"> no HTML)
// export function ola() { return "Olá"; }
// import { ola } from "./modulo.js";
// export default: exportação principal do arquivo


// ---------- 10. OUTRAS ----------

// debugger: pausa a execução quando as ferramentas do navegador estão abertas
// debugger;

// with: (evite!) amplia o escopo de um objeto; proibido em strict mode
// enum, interface, package, private, protected, public:
// reservadas para uso futuro (usadas no TypeScript)