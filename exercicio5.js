const prompt = require("prompt-sync")(); 

function calcularCustoAoConsumidor(custoFabrica) {
    var percentualDistribuidor = parseFloat(prompt("Digite o percentual do distribuidor:"));
    var impostos = parseFloat(prompt("Digite o percentual de impostos do veiculo:"));


    const valorDistribuidor = (custoFabrica * percentualDistribuidor/100);
    const valorImpostos = (custoFabrica * impostos/100);


    var custoFinal = (custoFabrica + valorDistribuidor + valorImpostos);

    return custoFinal;
}
var custoDeFabrica = parseFloat(prompt("Digite o valor do custo de fábrica do veiculo:"));
const custoFinal = calcularCustoAoConsumidor(custoDeFabrica);
console.log("O custo final ao consumidor é: R$" + custoFinal.toFixed(2));