const prompt = require("prompt-sync")();

function calcularMedia(nota1, nota2) {
    const pesoNota1 = 4;
    const pesoNota2 = 6;

    const media = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

    return media;
}
function main() {
 
    const nota1 = parseFloat(prompt("Digite a primeira nota:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota:"));

    if (isNaN(nota1) || isNaN(nota2)) {
        console.log("Por favor, digite valores numéricos válidos para as notas.");
        return;
    }

    const mediaFinal = calcularMedia(nota1, nota2);

    console.log("A média final do aluno é: " + mediaFinal.toFixed(2));
}

main();
