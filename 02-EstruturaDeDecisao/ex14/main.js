// Autor: Cristiano Ledur

/*
Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
  Média de Aproveitamento  Conceito
  Entre 9.0 e 10.0        A
  Entre 7.5 e 9.0         B
  Entre 6.0 e 7.5         C
  Entre 4.0 e 6.0         D
  Entre 4.0 e zero        E
O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.
*/

let nota1 = parseFloat(prompt("Informe a prrimeira nota: "));
let nota2 = parseFloat(prompt("Informe a prrimeira nota: "));
let media = (nota1 + nota2) / 2;
let conceito;
if (media >= 9.0) {
  conceito = "A";
  alert(`Nota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nConceito: ${conceito}\nAprovado!`);
} else if (media >= 7.5 && media < 9.0) {
  conceito = "B";
  alert(`Nota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nConceito: ${conceito}\nAprovado!`);
} else if (media >= 6.0 && media < 7.5) {
  conceito = "C";
  alert(`Nota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nConceito: ${conceito}\nAprovado!`);
} else if (media >= 4.0 && media < 6.0) {
  conceito = "D";
  alert(`Nota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nConceito: ${conceito}\Reprovado!`);
} else {
  conceito = "E";
  alert(`Nota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media}\nConceito: ${conceito}\Reprovado!`);
}