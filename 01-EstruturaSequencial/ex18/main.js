// Autor: Cristiano Ledur

/*
Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), 
calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).
*/

let megaBytes = parseFloat(prompt("Informe o peso do arquivo que pretende baixar em MB: "));
let megaBytesPorSegundo = parseFloat(prompt("Informe a velocidade da sua internet: ") / 8);
let tempo = (megaBytes / megaBytesPorSegundo) / 60;
alert(`Tempo de download: ${tempo.toFixed(2)} minutos`);