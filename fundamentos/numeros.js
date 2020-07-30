//Declarando um número de duas formas diferentes: literalmente e pela função Number(string)
const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log("---------------------------------------------------")

//Verificando se uma constante é inteira via função isInteger() do objeto Number
console.log(Number.isInteger(peso2))
console.log("---------------------------------------------------")

//Média aritmética de duas avaliações com arredondamento de 2 casas decimais
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
console.log("---------------------------------------------------")

//Verificando o tipo da média antes de convertê-la
console.log(typeof media)
console.log("---------------------------------------------------")

//Convertendo o valor da média aritmética obtida para string e depois para binário e hexadecimal
console.log(media.toString(2))
console.log(media.toString(16))
console.log("---------------------------------------------------")
