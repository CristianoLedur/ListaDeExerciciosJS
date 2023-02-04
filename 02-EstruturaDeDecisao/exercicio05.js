// Autor: Cristiano Ledur

/*Fácil 5- Faça um programa para a leitura de duas notas parciais de um aluno.  

  A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete;
  A mensagem “Aprovado com Distinção”, se a média for igual a dez;
  A mensagem “Reprovado” se a média for menor de do que sete;
*/

var nota1 = 0.0;
var nota2 = 6.0;
var media = (nota1 + nota2) /2;

if (media == 10.0) {
  console.log("Aprovado com Distinção");
} else if (media >= 7.0 && media < 10) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}