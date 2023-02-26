// Autor: Cristiano Ledur

//Intermediário 9- Faça um programa que leia três números e mostre-os em ordem decrescente.  

var n1 = parseInt(prompt("Informe o primeiro número: "));
var n2 = parseInt(prompt("Informe o segundo número: "));
var n3 = parseInt(prompt("Informe o terceiro número: "));

if (n1 > n2 && n1 > n3 && n2 > n3) {
  alert(`Ordem deecrescente: ${n1} ${n2} e ${n3}`);
} else if (n1 > n2 && n1 > n3 && n3 > n2) {
  alert(`Ordem deecrescente: ${n1} ${n3} e ${n2}`);
} else if (n2 > n1 && n2 > n3 && n1 > n3) {
  alert(`Ordem deecrescente: ${n2} ${n1} e ${n3}`);
} else if (n2 > n1 && n2 > n3 && n3 > n1) {
  alert(`Ordem deecrescente: ${n2} ${n3} e ${n1}`);
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
  alert(`Ordem deecrescente: ${n3} ${n1} e ${n2}`);
} else if (n3 > n1 && n3 > n2 && n2 > n1) {
  alert(`Ordem deecrescente: ${n3} ${n2} e ${n1}`);
}