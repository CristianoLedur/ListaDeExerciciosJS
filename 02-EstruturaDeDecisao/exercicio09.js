// Autor: Cristiano Ledur

//Intermediário 9- Faça um programa que leia três números e mostre-os em ordem decrescente.  

var n1 = 8;
var n2 = 4;
var n3 = 9;

if (n1 > n2 && n1 > n3 && n2 > n3) {
  console.log(`Ordem deecrescente: ${n1} ${n2} e ${n3}`)
} else if (n1 > n2 && n1 > n3 && n3 > n2) {
  console.log(`Ordem deecrescente: ${n1} ${n3} e ${n2}`)
} else if (n2 > n1 && n2 > n3 && n1 > n3) {
  console.log(`Ordem deecrescente: ${n2} ${n1} e ${n3}`)
} else if (n2 > n1 && n2 > n3 && n3 > n1) {
  console.log(`Ordem deecrescente: ${n2} ${n3} e ${n1}`)
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
  console.log(`Ordem deecrescente: ${n3} ${n1} e ${n2}`)
} else if (n3 > n1 && n3 > n2 && n2 > n1) {
  console.log(`Ordem deecrescente: ${n3} ${n2} e ${n1}`)
}