// Autor: Cristiano Ledur

// Fácil 10- Faça um programa que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-vespertino ou N-noturno. 
// Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

var turno = 'V';

if (turno == 'M') {
  console.log("Bom dia!")
} else  if (turno == "V") {
  console.log("Boa trade!");
} else if (turno == 'N') {
  console.log("Boa noite!");
} else {
  console.log("Valor Inválido!")
}