// Autor: Cristiano Ledur

//Fácil13 – Faça um Programa que leia um número e exiba o dia correspondente da semana. 
// (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido)

 var n = parseInt(prompt("Informe um número: "));

 if (n === 1) {
  alert("Domingo");
 } else if (n === 2) {
  alert("Segunda");
 } else if (n === 3) {
  alert("Terça");
 } else if (n === 4) {
  alert("Quarta");
 } else if (n === 5) {
  alert("Quinta");
 } else if (n === 6) {
  alert("Sexta");
 } else if (n === 7) {
  alert("Sabado");
 } else {
  alert("Valor inválido!");
 }