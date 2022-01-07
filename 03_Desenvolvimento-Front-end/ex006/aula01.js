// TIPOS DE DADOS
let meuNome = "Wesley"; //string

let minhaIdade = 28; // inteiro ou float

let matriculado = true; //booleano

let contratado = null; //valor nulo

let obsevacoes = undefined; //variáveis que não foram definidos valores

let meuArray = []; // array

let meuObjeto = {}; // Objeto

let minhaFunc = function teste(){
  //função
};

const minhaCidade = "Porteirinha"; 

console.log (minhaCidade);

const values = [
  5,
  "JavaScript",
  function(){ console.log('Hello World')},
  'Front-end'
];

const newValues = values.map(function(item){
  return item * 2;
})

console.log(newValues);