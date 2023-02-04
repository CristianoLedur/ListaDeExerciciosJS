let n1 = prompt("Informe a primeira nota: ");
let n2 = prompt("Informe a segunda nota: ");
let n3 = prompt("Informe a terceira nota: ");
let n4 = prompt("Informe a quarta nota: ");
let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4;
alert("A média das notas informadas é " + media.toFixed(2));