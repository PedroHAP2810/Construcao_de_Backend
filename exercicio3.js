const prompt = require("prompt-sync")();

function calcularNovoSalario(salarioMensalAtual, percentualReajuste) {
    var aumento = salarioMensalAtual * (percentualReajuste / 100);
    var novoSalarioMensal = salarioMensalAtual + aumento;
    return novoSalarioMensal;
}

function main() {

    var salarioMensalAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário:"));
    var percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

    
    var novoSalarioMensal = calcularNovoSalario(salarioMensalAtual, percentualReajuste);

    
    console.log("O novo salário mensal do funcionário é: R$" + novoSalarioMensal.toFixed(2));
}

main();
