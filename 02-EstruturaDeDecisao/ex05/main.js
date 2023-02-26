// Autor: Cristiano Ledur

/*Fácil 5- Faça um programa para a leitura de duas notas parciais de um aluno.  

  A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
  A mensagem “Aprovado com Distinção”, se a média for igual a dez;
  A mensagem “Reprovado” se a média for menor de do que sete;
*/

var nota1 = parseFloat(prompt("Informe a primeira nota: "));
var nota2 = parseFloat(prompt("Informe a segunda nota: "));
var media = (nota1 + nota2) /2;

if (media == 10.0) {
  alert("Aprovado com Distinção");
} else if (media >= 7.0 && media < 10) {
  alert("Aprovado");
} else {
  alert("Reprovado");
}