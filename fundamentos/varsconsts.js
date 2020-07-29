//Duas formas de criar uma variável
var a  = 2
let b = 8.34553

//Var não é recomendado porque permite redeclaração no mesmo escopo (mesmo lugar que criou pode-se redefinir)
var msg = "Ola"
var msg = "Olá 2"
console.log(msg)

//Já no Let, a manipulação de varíaveis não permite redeclaracao
let num = 1980
num = num + 20
console.log(num) 