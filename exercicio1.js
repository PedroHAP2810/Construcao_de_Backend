const prompt = require("prompt-sync")(); 
function calcularMedia(notas) {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

function verificarAprovacao(media) {
    if (media >= 7.0) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


function main() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
    var nota4 = parseFloat(prompt("Digite a quarta nota:"));

    var notas = [nota1, nota2, nota3, nota4];
    var media = calcularMedia(notas);

    var situacao = verificarAprovacao(media);

    console.log("Média: " + media.toFixed(2));
    console.log("Situação: " + situacao);
}

main();
