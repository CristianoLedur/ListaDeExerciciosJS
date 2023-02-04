let raio = prompt("Informe o raio de um círculo: ");
let pi = 3.1415;
let resultado = (pi * Math.pow(raio, 2)) * 2;
alert(`A área do círculo é ${resultado.toFixed(2)} m²`);