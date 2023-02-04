// Autor: Cristiano Ledur

// Fácil 3- Faça um programa que verifique (usando if e else) se a letra é “F” ou “M”. 
// Conforme a letra escrever: F – Feminino, M- Masculino, Sexo inválido.  

var letra = "M";

if (letra.toLowerCase() == "m" || letra.toUpperCase() == "M") {
  console.log(`Masculino`);
} else if (letra.toLowerCase() == "f" || letra.toUpperCase() == "F") {
  console.log(`Feminino`);
} else {
  console.log("Sexo Indefinido");
} 