let vetor =[10,20,30]

let obj = {
    nome:'Maria',
    idade:34,
    naturalidade: 'Franca/SP'
}

//Desestruturação de vetor: as variaveis do let podem ter qualquer nome
let [x, y, z] = vetor
console.log(x)
console.log(y)
console.log(z)

//Desestruturação de objetos: as variaveis do let DEVEM ter os mesmos nomes
//da propriedades, não importa a ordem  
let {naturalidade, nome, idade} = obj

console.log(nome)
console.log(idade)
console.log(naturalidade)

let obj2 ={
    marca:'Volskwagen',
    modelo:'Fusca',
    ano: 1969,
    cor: 'preto'
}

//Desestruturação parcial de um objeto 
let {modelo, ano}= obj2

console.log(modelo)
console.log(ano)

let vet2=['laranja', 'maça', 'pera']
/* não dá certo: desestruturação parcial de vetor
let[undefinde, fruta2,undefinede]= vet2
console.log(fruta2)*/

//Ignorando o ultimo elemento
let[fruta1, fruta2,]= vet2
console.log(fruta1)
console.log(fruta2)

//Ignorando o primeiro elemento
let [,f2,f3] = vet2
console.log(f2)
console.log(f3)

//ignora os 2 primeiros elementos
let [,,f4] = vet2
console.log(f4)
