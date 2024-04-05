const prompt = require("prompt-sync")();

function calcularCustoAoConsumidor(custoFabrica) {
    const percentualDistribuidor = 0.28; 
    const impostos = 0.45; 


    const valorDistribuidor = custoFabrica * percentualDistribuidor;
    const valorImpostos = custoFabrica * impostos;


    var custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    return custoFinal;
}
var custoDeFabrica = parseFloat(prompt("Digite o valor do custo de fábrica do veiculo:"));
const custoFinal = calcularCustoAoConsumidor(custoDeFabrica);
console.log("O custo final ao consumidor é: R$" + custoFinal.toFixed(2));
