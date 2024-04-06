const prompt = require("prompt-sync")();

function calcularVolumeCilindro(raio, altura) {
    const pi = Math.PI;
    const volume = pi * Math.pow(raio, 2) * altura;
    return volume;
}

function main() {

    const raio = parseFloat(prompt("Digite o raio da caixa d'água (em metros):"));
    const altura = parseFloat(prompt("Digite a altura da caixa d'água (em metros):"));


    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        console.log("Por favor, digite valores numéricos positivos válidos para o raio e a altura.");
        return;
    }

   
    const volume = calcularVolumeCilindro(raio, altura);

    console.log("O volume da caixa d'água é: " + volume.toFixed(2) + " metros cúbicos.");
}

main();
