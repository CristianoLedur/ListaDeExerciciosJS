// Autor: Cristiano Ledur

/*
Faça um Programa que peça uma data no formato dd/mm/aaaa e 
determine se a mesma é uma data válida.
*/

let data = prompt("informe uma datta no formato dd/mm/aaaa: ");
let dia = parseInt(data.slice(0,2));
let mes = parseInt(data.slice(3,5));
let ano = parseInt(data.slice(6,10));
let bissexto;
if((ano % 4 === 0 && ano % 100 != 0) || ano % 400 ===0) {
  bissexto = true;
}

if( ( (mes === 01 || mes === 03 || mes === 05 || mes === 07 || mes === 08 || mes === 10 || mes === 12) && (dia <= 31) ) || ( (mes === 04 || mes === 06 || mes === 09 || mes === 11) && (dia <= 30) ) || ( (mes === 02 && dia <= 28) || (mes === 02 && dia <= 29 && bissexto))) {
  alert("Data válida!");
} else {
  alert("Data inválida!");
}



