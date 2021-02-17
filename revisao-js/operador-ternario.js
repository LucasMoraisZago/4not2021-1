let nota = 7.2
let situação 

/*if(nota >= 6){
    situação = 'Aprovado'
}
else{
    situação ='Reprovado'
}*/
nota = 5.3

/*if(nota >= 6) situação = 'Aprovado'
else situação ='Reprovado'*/

// As três partes do operado ternário 
//1ª parte: condição ()que iria depois do if)
// Entre a 1ª e a 2ª partes -> ?
//2ª parte: o resultado, caso a condição VERDADEIRA
// Entre a 2ª e a 3ª partes -> :
//3ª parte: o resultado, caso a condição seja FALSA
situação = nota >=6 ? 'APROVADO' : 'REPROVADO'

console.log(situação)

let user ='zemane'
let userType

userType = user ==='admin'|| user ==='root' ? 'Superuser' : 'Ordinary user'

console.log(userType)