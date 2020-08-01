//Declarando um array homogênio, pegando as posições 0 e 3 
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log("---------------------------------------------------")

//Acessando a 500ª posição do array 'valores' (inexistente)
console.log(valores[500])
console.log("---------------------------------------------------")

//Atribuindo um valor para valores[500], que antes era um elemento 'undefined'
valores[500] = "terere"
console.log(valores[500])
console.log("---------------------------------------------------")

//Imprimir todo o array
console.log(valores)
console.log("---------------------------------------------------")

//Pegar o tamanho do array, pela quantidade de elementos
console.log(valores.length)
console.log("---------------------------------------------------")

//Adicionando no topo(último índice) do array um objeto e um booleano via push()
valores.push({id: 3}, false)
console.log(valores)
console.log("---------------------------------------------------")

//Retirando o último elemento de um array com o pop() e deletando um elemento qualquer com 'delete' 
valores.pop()
delete valores[500]
console.log(valores)
console.log("---------------------------------------------------")