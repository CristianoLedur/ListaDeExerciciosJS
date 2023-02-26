// Autor: Cristiano Ledur

// Fácil 8- Faça um programa que pergunte o preço de três produtos e 
// informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.  

let nescau = parseFloat(prompt("Informe o valor do Nescau: "));
let todynho = parseFloat(prompt("Informe o valor do Todynho: "));
let achocolatado = parseFloat(prompt("Informe o valor do Achocolatado: "));

if (nescau < todynho && nescau < achocolatado) {
  alert("Nescau está mais barato.");
} else if (todynho < nescau && todynho < achocolatado) {
  alert("Todynho está mais barato.");
} else if (achocolatado < nescau && achocolatado < todynho) {
  alert("Achocolatado está mais barato.")
}