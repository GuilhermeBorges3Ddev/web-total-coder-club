//Pegando o 4º caractere à partir da posição 0
const escola = "Cod3r"
console.log(escola.charAt(4))
console.log("---------------------------------------------------")

//Quando passamos uma posição que não está na cadeia de caracteres o JS retorna vazio ''
console.log(escola.charAt(5))
console.log("---------------------------------------------------")

//A função chamada charCodeAt() pega o valor na tabela ASCII
console.log(escola.charCodeAt(3))
console.log("---------------------------------------------------")

/*
    Pegando o índice do caractere:
        - Primeira ocorrência da busca caso encontrada 
        - Ou -1 caso não encontrada
        - Método oposto ao charAt()
*/
console.log(escola.indexOf('r')) 
console.log("---------------------------------------------------")

//Pega do índice referente ao parâmetro passado até o último
console.log(escola.substring(1))
console.log("---------------------------------------------------")

//Pegando a substring da posição 'a' até a posiçẫo 'b-1', onde (a,b) são os parâmetros
console.log(escola.substring(0,3))
console.log("---------------------------------------------------")

//Ao contrário de um number, as funções do tipo String podem ser chamadas sem usar variáveis ou literais
console.log("Escola de programação ".concat(escola).concat('!'))
console.log("---------------------------------------------------")

//Substituir o Nº índice de uma string por um outro caractere ou substring  
console.log(escola.replace(3, "e"))
console.log("---------------------------------------------------")

//Quebrando uma string em um array via split()
console.log('Ana,Maria,Pedro'.split(','))
console.log("---------------------------------------------------")