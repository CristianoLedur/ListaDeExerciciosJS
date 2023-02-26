// Autor: Cristiano Ledur

/*
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" 
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/

let resposta1 = prompt("Telefonou para a vítima?");
let resposta2 = prompt("Esteve no local do crime?");
let resposta3 = prompt("Mora perto da vítima");
let resposta4 = prompt("Devia para a vítima?");
let resposta5 = prompt("Já trabalhou com a vítima?");
let soma = 0;

if (resposta1 === "sim") {
  soma++;
}
if (resposta2 === "sim") {
  soma++;
}
if (resposta3 === "sim") {
  soma++;
}
if (resposta4 === "sim") {
  soma++;
}
if (resposta5 === "sim") {
  soma++;
}

if(soma === 2) {
  alert("Suspeita");
} else if (soma === 3 || soma === 4) {
  alert("Cúmplice");
} else if (soma === 5) {
  alert("Assassino");
} else {
  alert("Inocente");
}
