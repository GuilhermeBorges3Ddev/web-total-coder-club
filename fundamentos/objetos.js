//Criando 2 propriedades dinamicamente para um objeto inicialmente vazio
const prod1 = {}
prod1.nome = "Celular Hiper Mega"
prod1.preco = 4998.90
console.log(prod1)
console.log("---------------------------------------------------")

//Existe uma forma de criar atribuitos com espaço, como se fosse uma notação de array
prod1['Desconto Adicional'] = 0.40 //Evitar esse dipo de atributo espaçado
console.log(prod1)
console.log("---------------------------------------------------")

//Criando o objeto passando os atribuitos logo na criação e aninhando objetos
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.99,
    tipo: {
        categoria: "Camisa",
        observações: {
            tipo: "reclamação",
            conteudo: "As camisas que vieram para a loja estavam rasgadas"
        }
    }
}
console.log(prod2)
console.log("---------------------------------------------------")

//JSON não é um objeto... mas sim, um tipo textual em que as chaves são strings, exemplo:
//'{"nome": "Elisângela", "idade": 52 }'
