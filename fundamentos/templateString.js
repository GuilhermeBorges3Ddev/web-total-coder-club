//Percebe-se que as template strings consideram identações e variáveis, além de quebras de linha
const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!' 
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
console.log("---------------------------------------------------")

//Template strings também aceitam expressôes
console.log(`1 + 1 = ${1 + 1}`)
console.log("---------------------------------------------------")

//Template strings também aceitam funções, além das operações, constantes e variáveis
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)