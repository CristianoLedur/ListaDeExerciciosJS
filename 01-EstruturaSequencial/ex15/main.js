let valorHora = prompt("Quanto você ganha por hora?");
let horasTrabalhadas = prompt("Quantas horas você trabalhou?");
let salarioBruto = valorHora * horasTrabalhadas;
let impostoDeRenda = salarioBruto * 0.11;
let INSS = salarioBruto * 0.08;
let Sindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - (impostoDeRenda + INSS + Sindicato);
alert(`A) Salário Bruto: ${salarioBruto} R$`);
alert(`B) INSS: ${INSS} R$`);
alert(`C) Sindicato: ${Sindicato} R$`);
alert(`D) Salário Liquído: ${salarioLiquido} R$`);
alert(`E) + Salário Bruto: ${salarioBruto}\n - IR (11%) : R$ ${impostoDeRenda}\n - INSS (8%) : R$ ${INSS}\n - Sindicato (5%) : R$ ${Sindicato}\n = Salário Liquído : R$ ${salarioLiquido}`);
