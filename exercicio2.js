const prompt = require("prompt-sync")();

function calcularPercentual(valor, total) {
    return (valor / total) * 100;
}


function main() {
    
    var totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
    var votosBrancos = parseInt(prompt("Digite o número de votos em branco:"));
    var votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
    var votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

    var percentualBrancos = calcularPercentual(votosBrancos, totalEleitores);
    var percentualNulos = calcularPercentual(votosNulos, totalEleitores);
    var percentualValidos = calcularPercentual(votosValidos, totalEleitores);

    console.log("Percentual de votos em branco: " + percentualBrancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
}

main();
