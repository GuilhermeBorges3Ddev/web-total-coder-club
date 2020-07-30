//Javascript possui um tipo pré-definido para divisão por zero: Infinity
console.log(7 / 0)
console.log("---------------------------------------------------")

//Divisão de um número colocado como string por um número puro não gera NaN
console.log("10" / 2)
console.log("---------------------------------------------------")

//A duplicação de uma string usando o sinal '*' não existe
console.log("Teste" * 2)
console.log("---------------------------------------------------")

//A precisão numérica de reais é ruim em JS, por isso usamos o toFixed()
const soma = 0.1 + 0.7
console.log(soma.toFixed(1))
console.log("---------------------------------------------------")

//Usar o toString() ou toFixed() sobre um número na forma literal geraria erro
//console.log(10.toString())

//Usar parêntesis em numeros na forma literal permite usar o toString() ou toFixed() por exemplo
console.log((10.345).toFixed(2)) 
console.log("---------------------------------------------------")