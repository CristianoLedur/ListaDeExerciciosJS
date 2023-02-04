let pintarArea = prompt("Informe o tamanho da area a ser pintada em metros: ");
let litros = parseInt(pintarArea) / 3;
let latas =  (Math.ceil(litros)) / 18;
let valorTotal = 80 * Math.ceil(latas);
alert(`Valor total: ${valorTotal}\nLatas: ${(Math.ceil(latas))}`);