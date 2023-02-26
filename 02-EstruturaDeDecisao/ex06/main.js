// Autor: Cristiano Ledur

// Intermediário 6- Faça um programa que leia três números, verifique (usando if e else), e mostre o maior deles. 

var n1 = 9;
var n2 = 8;
var n3 = 6;

if (n1 > n2 && n1 > n3) {
  console.log(`O número ${n1} é o maior dos três`);
} else if (n2 > n1 && n2 > n3) {
  console.log(`O número ${n2} é o maior dos três`)
} else if (n3 > n1 && n3 > n2) {
  console.log(`O número ${n3} é o maior dos três`);
}