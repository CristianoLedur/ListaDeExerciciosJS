// Autor: Cristiano Ledur

/*
Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
Dicas:
Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
Triângulo Equilátero: três lados iguais;
Triângulo Isósceles: quaisquer dois lados iguais;
Triângulo Escaleno: três lados diferentes;
*/

let lado1 = parseFloat(prompt("Informe o primeiro lado do triangulo: "));
let lado2 = parseFloat(prompt("Informe o segundo lado do triangulo: "));
let lado3 = parseFloat(prompt("Informe o terceiro lado do triangulo: "));

if (((lado1 + lado2) > lado3 ) && ((lado1 + lado3) > lado2 ) && ((lado3 + lado2) > lado1 ) ) {
  if (lado1 === lado2 && lado1 === lado3) {
    alert("Triângulo Equilátero!");
  } else if (((lado1 === lado2) && (lado1 != lado3)) || ((lado1 === lado3) && (lado2 != lado3)) || ((lado2 === lado3) && (lado1 != lado3)) ) {
    alert("Triângulo Isósceles");
  } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
    alert("Triângulo Escaleno");
  }
} else {
  alert("Não é triângulo!")
}
