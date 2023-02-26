// Autor: Cristiano Ledur

/*
Faça um Programa que peça um número correspondente a um determinado ano e 
em seguida informe se este ano é ou não bissexto.
*/

let ano = parseInt(prompt("Informe um ano: "));

if(( ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0)) {
  alert("É bissexto!");
} else {
  alert("Não é bissexto!");
}