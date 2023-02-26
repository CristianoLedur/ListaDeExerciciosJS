// Autor: Cristiano Ledur

// Fácil 10- Faça um programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-vespertino ou N-noturno. 
// Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

let turno = prompt("Em que turno você estuda? \nM-matutino ou \nV-vespertino ou \nN-noturno");

if (turno == 'M') {
  alert("Bom dia!");
} else  if (turno == "V") {
  alert("Boa trade!");
} else if (turno == 'N') {
  alert("Boa noite!");
} else {
  alert("Valor Inválido!");
}