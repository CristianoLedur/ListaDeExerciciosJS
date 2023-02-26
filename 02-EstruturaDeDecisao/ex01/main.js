// Autor: Cristiano Ledur

// Fácil 1- Faça um programa que verifique dois números
// (usando if e else) e imprima o maior deles

var a = parseInt(prompt("Informe um número: "));
var b = parseInt(prompt("Informe outro número: "));

if (a > b) {
  alert(`O valor de a (${a}) é maior que o valor de b (${b})`);
} else if (a < b) {
  alert(`O valor de b (${b}) é maior que o valor de a (${a})`);
} else {
  alert(`O valor de a e b são iguais`);
}