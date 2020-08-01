//Trocando uma variável de falsa para verdadeira de maneira literal
let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)
console.log("---------------------------------------------------")

//Testando se uma variável é verdadeira de maneira numérica, usando dupla negação
isAtivo = 1
console.log(!!isAtivo)
console.log("---------------------------------------------------")

/* 
    Tipos que sempre dão verdadeiro:
        - Números inteiros e reais
        - String com um espaço em branco, com um caractere ou com texto
        - Arrays e objetos
        - Infinito e atribuições verdadeiras
*/
console.log("Exemplos verdadeiros:")
console.log(!!3)
console.log(!!-1.75)
console.log(!! " ")
console.log(!! "abcdefg")
console.log(!! [])
console.log(!! {})
console.log(!! Infinity)
console.log(!! (isAtivo = !false))
console.log("---------------------------------------------------")

/*
    Tipos que sempre dão falso:
        - O zero
        - A string vazia, ou seja, sem nem um espaço preenchido ou em branco
        - O null e o NaN
        - O undefined
        - Atribuições falsas
*/
console.log('Exemplos que dão falso:')
console.log(!! 0)
console.log(!! '')
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!! (isAtivo = !true))
console.log("---------------------------------------------------")

//Pegando o primeiro valor verdadeiro em uma sequência
console.log(0 || false || undefined ||123 || "abacaxi")
console.log("---------------------------------------------------")

//Pegando o primeiro valor verdadeiro entre uma variável vazia e uma string preenchida
let nome = ""
console.log(nome || 'Desconhecido')
console.log(nome)
console.log("---------------------------------------------------")