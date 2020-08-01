//Exibição de string usando aspas duplas
console.log("Sentença de código")
console.log("---------------------------------------------------")

//Exibição de string usando aspas simples
console.log('Sou uma nova sentença...');
console.log("---------------------------------------------------")

//Backtip ou template-string
let dataHoje = new Date();
console.log(`Hoje estamos em ----> ${dataHoje}` + " <-----");
console.log("---------------------------------------------------")

//Verificando o tipo de uma data - 'Date'
console.log(typeof dataHoje)
console.log("---------------------------------------------------")

//Bloco de código (agrupa sentenças) 
{
    {
        console.log(`Aspas dentro das aspas: ""`)
    }
}
