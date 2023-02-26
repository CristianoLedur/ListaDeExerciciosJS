// Autor: Cristiano Ledur

/*
Faça um Programa que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.
*/

let n = parseFloat(prompt("Informe um numero inteiro ou decimal: "));
if (Number.isInteger(n)) {
  alert(`${n} é inteiro!`);
} else {
  alert(`${n} é decimal!`);
}
