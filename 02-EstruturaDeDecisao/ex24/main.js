// Autor: Cristiano Ledur

/*
Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
par ou ímpar;
positivo ou negativo;
inteiro ou decimal.
*/

let n1 = parseFloat(prompt("Informe um número?"));
let n2 = parseFloat(prompt("Informe outro número?"));
let operacao = parseInt(prompt(`1-par ou ímpar;\n2-positivo ou negativo;\n3-inteiro ou decimal.`));
let result = ``;

if(operacao === 1) {
  if(n1 % 2 === 0) {
    result += `${n1} é par`;
  } else {
    result += `${n1} é ímpar`;
  }
  if(n2 % 2 === 0) {
    result += `\n${n2} é par`;
  } else {
    result += `\n${n2} é ímpar`;
  }
  alert(result);
} else if (operacao === 2) {
  if(n1 >= 0) {
    result += `${n1} é positivo`;
  } else {
    result += `${n1} é negativo`;
  }
  if(n2 >= 0) {
    result += `\n${n2} é positivo`;
  } else {
    result += `\n${n2} é negativo`;
  }
  alert(result);
} else if(operacao === 3) {
  if(Number.isInteger(n1)) {
    result += `${n1} é inteiro`;
  } else {
    result += `${n1} é decimal`;
  }
  if(Number.isInteger(n2)) {
    result += `\n${n2} é inteiro`;
  } else {
    result += `\n${n2} é decimal`;
  }
  alert(result);
} else {
  alert("Valor inválido");
}

