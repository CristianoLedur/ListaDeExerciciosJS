// Autor: Cristiano Ledur

// Intermediário 7- Faça um programa que leia três números, verifique (usando if e else) e mostre o maior e o menor deles;  

let n1 = parseInt(prompt("Informe o primeiro número: "));
let n2 = parseInt(prompt("Informe o segundo número: "));
let n3 = parseInt(prompt("Informe o terceiro número: "));

if (n1 > n2 && n1 > n3 && n2 > n3) {
  alert(`O número ${n1} é o maior dos três e o ${n3} é o menor.`);
} else if (n1 > n2 && n1 > n3 && n3 > n2) {
  alert(`O número ${n1} é o maior dos três e o ${n2} é o menor.`);
} else if (n2 > n1 && n2 > n3 && n1> n3) {
  alert(`O número ${n2} é o maior dos três e o ${n3} é o menor.`);
} else if (n2 > n1 && n2 > n3 && n3> n1) {
  alert(`O número ${n2} é o maior dos três e o ${n1} é o menor.`);
} else if (n3 > n1 && n3 > n2 && n1 > n2) {
  alert(`O número ${n3} é o maior dos três e o ${n2} é o menor.`);
} else if (n3 > n1 && n3 > n2 && n2 > n1) {
  alert(`O número ${n3} é o maior dos três e o ${n1} é o menor`);
}