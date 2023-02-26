// Autor: Cristiano Ledur

/*
Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e presentar:
A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
A mensagem "Aprovado com Distinção", se a média for igual a 10.
*/

let nota1 = parseFloat(prompt("Informe sua primeira nota: "));
let nota2 = parseFloat(prompt("Informe sua segunda nota: "));
let nota3 = parseFloat(prompt("Informe sua terceira nota: "));
let media = (nota1 + nota2 + nota3) / 3;

if(media === 10) {
  alert("Aprovado com Distinção!");
} else if(media >= 7) {
  alert("Aprovado!");
} else if( media < 7) {
  alert("Reprovado");
}
