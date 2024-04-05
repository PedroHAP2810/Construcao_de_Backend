const prompt = require("prompt-sync")();

function calcularSalarioFinal(carrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro) {

    const comissaoVendas = 0.05 * valorTotalVendas;
    
    const comissaoPorCarro = carrosVendidos * valorPorCarro;
    
    const salarioFinal = salarioFixo + comissaoVendas + comissaoPorCarro;
    
    return salarioFinal;
}

function lerInput(mensagem) {
    return parseFloat(prompt(mensagem));
}

const carrosVendidos = lerInput("Digite o número de carros vendidos:");
const valorTotalVendas = lerInput("Digite o valor total das vendas:");
const salarioFixo = lerInput("Digite o salário fixo:");
const valorPorCarro = lerInput("Digite o valor por carro vendido:");

const salarioFinal = calcularSalarioFinal(carrosVendidos, valorTotalVendas, salarioFixo, valorPorCarro);


console.log("O salário final do vendedor é: R$" + salarioFinal.toFixed(2));
