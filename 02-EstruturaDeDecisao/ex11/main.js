// Autor: Cristiano Ledur

/*
Difícil 11- As organizações CSM resolveram dar um aumento de salário aos seus colaboradores
e lhe contrataram para desenvolver o programa que calculará os reajustes.  

  a. Faça um programa que recebe o salário de um colaborador 
  e o reajuste segundo o seguinte critério, baseado no salário atual;
  b. Salários até R$ 280,00 (incluindo): aumento de 20%;
  c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
  d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
  e. Salários de R$ 1500,00 em diante: aumento de 5%

Após o aumento ser realizado; informe na tela;
  a. O salário antes do reajuste;
  b. O percentual de aumento aplicado;
  c. O valor do aumento;
  d. O novo salário, após o aumento.
  */

let salario = parseInt(promt("Informe seu salário: "));
let reajuste = 0;
let aumento = 0;
let novoSalario = 0;

if (salario <= 280) {
  aumento = 0.20;
  reajuste = salario * aumento;
  novoSalario = salario + reajuste;
} else if (salario > 280 && salario <= 700){
  aumento = 0.15;
  reajuste = salario * aumento;
  novoSalario = salario + reajuste;
} else if (salario > 700 && salario <= 1500){
  aumento = 0.10;
  reajuste = salario * aumento;
  novoSalario = salario + reajuste;
} else {
  aumento = 0.05;
  reajuste = salario * aumento;
  novoSalario = salario + reajuste;
}

alert(`Salário antes do reajuste: ${salario}`);
alert(`percentual de aumento aplicado: ${aumento}`);
alert(`Valor do aumento: ${reajuste}`);
alert(`Novo salário, após o aumento: ${novoSalario}`);
