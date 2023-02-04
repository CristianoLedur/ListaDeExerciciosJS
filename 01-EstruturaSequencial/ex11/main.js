let n1 = prompt("Informe um número inteiro: ");
let n2 = prompt("Informe outro número inteiro: ");
let n3 = prompt("Informe um número real: ");

let A = (parseInt(n1) * 2) * (parseInt(n1) * 2) + (parseInt(n2) /2);
let B = (parseInt(n1)*3) + parseFloat(n3);
let C = Math.pow((parseFloat(n3)), 3);
alert(`A: ${A.toFixed(1)}`);
alert(`B: ${B.toFixed(1)}`);
alert(`C: ${C.toFixed(1)}`);