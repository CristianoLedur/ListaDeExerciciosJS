// Autor: Cristiano Ledur

// Fácil 4- Faça um programa que verifique (usando if e else) se uma letra é vogal ou consoante.

var letra = prompt("Informe uma letra: ");

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  alert("Vogal");
} else if (letra == " ") {
  alert("Nem vogal nem consoante");
} else {
  alert("Consoante")
}
