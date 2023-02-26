// Autor: Cristiano Ledur

/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool:
até 20 litros, desconto de 3% por litro
acima de 20 litros, desconto de 5% por litro
Gasolina:
até 20 litros, desconto de 4% por litro
acima de 20 litros, desconto de 6% por litro 
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.
*/

let precoGasolina = 2.50;
let precoAlcool = 1.90;
let quantidadeAlcool;
let quantidadeGasolina;
let desconto;
let total = 0;
let tipoCombiustivel = prompt("Informe o tipo de combustível: ");
if(tipoCombiustivel === "A-álcool") {
  quantidadeAlcool = parseFloat(prompt("Informe a quantidade em litros de álcool a ser abastecido: "));
  if(quantidadeAlcool <= 20) {
    precoAlcool = precoAlcool - (precoAlcool * 0.03);
    total = precoAlcool * quantidadeAlcool;
  } else {
    precoAlcool = precoAlcool - (precoAlcool * 0.05);
    total = precoAlcool * quantidadeAlcool;
  }
  alert(`${quantidadeAlcool} litros de álcool custam ${total.toFixed(2)} R$`);
} else if (tipoCombiustivel === "G-gasolina") {
  quantidadeGasolina = parseFloat(prompt("Informe a quantidade em litros de gasolina a ser abastecida: "));
  if(quantidadeGasolina <= 20) {
    precoGasolina = precoGasolina - (precoGasolina * 0.04);
    total = precoGasolina * quantidadeGasolina;
  } else {
    precoGasolina = precoGasolina - (precoGasolina * 0.06);
    total = precoGasolina * quantidadeGasolina;
  }
  alert(`${quantidadeGasolina} litros de gasolina custam ${total.toFixed(2)} R$`);
}





