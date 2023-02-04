// Autor: Cristiano Ledur

// Fácil 8- Faça um programa que pergunte o preço de três produtos e 
// informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.  

var nescau = 9.00;
var todynho = 8.99;
var achocolatado = 9.98;

if (nescau < todynho && nescau < achocolatado) {
  console.log("Nescau está mais barato.");
} else if (todynho < nescau && todynho < achocolatado) {
  console.log("Todynho está mais barato.");
} else if (achocolatado < nescau && achocolatado < todynho) {
  console.log("Achocolatado está mais barato.")
}