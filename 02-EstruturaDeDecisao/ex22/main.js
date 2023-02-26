// Autor: Cristiano Ledur

/*
Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).
*/

let n = parseInt(prompt("Informe um número: "));

if(n % 2 == 0) {
  alert(`${n} é par!`);
} else {
  alert(`${n} é ímpar!`);
}