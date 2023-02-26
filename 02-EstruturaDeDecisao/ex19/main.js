// Autor: Cristiano Ledur

/*
Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
326 = 3 centenas, 2 dezenas e 6 unidades
12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16
*/

let n = parseInt(prompt("Informe um número menor que 1000:"));
let resto = n;
let centenas = Math.floor(resto / 100);
resto = n% 100;
let dezenas = Math.floor(resto / 10);
resto = n % 10;
let unidades = Math.floor(resto / 1);
let result = `${n} = `;

if(centenas > 1) {
  result += `${centenas} centenas`;
} else if ( centenas === 1) {
  result += `${centenas} centena`;
}
if (centenas > 0) {
  if (unidades === 0 || dezenas === 0) {
    result += ` e `;
  } else {
    result += `, `;
  }
}

if(dezenas > 1) {
  result += `${dezenas} dezenas`;
}
else if (dezenas === 1) {
  result += `${dezenas} dezena`;
}

if (dezenas > 0) {
  if (unidades > 0) {
    result += ` e `;
  }
}

if(unidades > 1) {
  result += `${unidades} unidades`;
}
else if (unidades === 1) {
  result += `${unidades} unidade`;
}

alert(`${result}`);