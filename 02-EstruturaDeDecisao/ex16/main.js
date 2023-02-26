// Autor: Cristiano Ledur

/*
Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;
*/

let condicao = true;
let A = parseInt(prompt("Informe o valor de A: "));
if (A === 0 ) {
  alert("A equação não é de segundo grau!");
} else {
  let B = parseInt(prompt("Informe o valor de B: "));
  let C = parseInt(prompt("Informe o valor de C: "));
  let delta = (Math.pow(B,2) + ((4*A*C) * -1));
  if (delta < 0) {
    alert("A equação não posui raizes reais.");
  } else if ( delta === 0 ) {
    let raiz = ( (-B + (Math.sqrt(delta))) / (2*A) );
    alert(`A equação possui apenas uma raiz real. x= ${raiz}`);
  } else {
    let raiz1 = ( ((B * -1) + (Math.sqrt(delta))) / (2*A) );
    let raiz2 = ( ((B * -1) - (Math.sqrt(delta))) / (2*A) );
    alert(`A equação pussui duas raizes reais. x'= ${raiz1.toFixed(2)} e x"= ${raiz2.toFixed(2)}`);
  }
}


