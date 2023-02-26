// Autor: Cristiano Ledur

/*
Difícil 12- Faça um programa para o cálculo de uma folha de pagamento,
 sabendo que os descontos são do imposto de Renda, que depende do salário bruto 
 (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto,
 mas não é descontado (é a empresa que deposita.)

O salário líquido corresponde ao salário bruto menos os descontos 
O programa deverá pedir ao usuário o valor da sua hora e
a quantidade de horas trabalhadas no mês.

a. Desconto do IR;
b. Salário Bruto ate R$900,00 (inclusive) – Isento;
c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
e. Salário bruto acima de 2500 – Desconto de 20%.
Imprima na tela as informações, dispostas conforme o exemplo abaixo,
no exemplo valor da hora é 5 e a quantidade de horas é 220.  

Salário bruto (5 * 220)           : R$   1100,00

( – ) IR (5%)                     : R$     55,00

( – ) INSS ( 10% )                 : R$     110,00

FGTS ( 11%)                       : R$     121,00

Total de descontos                 : R$     165,00

Salário Líquido                   : R$     935,00    
*/

var valorHora = parseFloat(prompt("Valor hora: "));
var horasTrabalhadas = parseFloat(prompt("Horas trabalhadas: "));
var salarioBruto = valorHora * horasTrabalhadas;
var IR = 0.05;
var INSS = 0.10;
var Sindicato = 0.03;
var totalDescontos = 0;
var salarioLiquido = 0;
var porcentagemIR = 0;

if (salarioBruto <= 900) {
  porcentagemIR = 0;
  totalDescontos = ((salarioBruto * INSS) + (salarioBruto * Sindicato));
  salarioLiquido = (salarioBruto - totalDescontos);
} else if ( salarioBruto > 900 && salarioBruto <= 1500) {
  porcentagemIR = 5;
  IR = 0.05;
  totalDescontos = ((salarioBruto * INSS) + (salarioBruto * IR));
  salarioLiquido = (salarioBruto - totalDescontos);
} else if (salarioBruto > 1500 && salarioBruto <= 2500) {
  porcentagemIR = 10;
  IR = 0.10;
  totalDescontos = ((salarioBruto * INSS) + (salarioBruto * IR));
  salarioLiquido = (salarioBruto - totalDescontos);
} else if (salarioBruto > 2500) {
  porcentagemIR = 20;
  IR = 0.20;
  totalDescontos = ((salarioBruto * INSS) + (salarioBruto * IR));
  salarioLiquido = (salarioBruto - totalDescontos);
}

alert(`Salário bruto (${valorHora} * ${horasTrabalhadas})       :R$ ${salarioBruto}`);
alert(`(-) IR (${porcentagemIR}%)                   :R$ ${salarioBruto * IR}`);
alert(`(-) INSS (10%)                :R$ ${salarioBruto * INSS}`);
alert(`FGTS (11%)                    :R$ ${salarioBruto * 0.11}`);
alert(`Total de descontos            :R$ ${totalDescontos}`);
alert(`Salário liquido               :R$ ${salarioLiquido}`);