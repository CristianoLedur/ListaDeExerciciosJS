// Autor: Cristiano Ledur

/*
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/

// let n = parseInt(prompt("Informe o valor a ser sacado:"));
let n = 399;
if(n >= 10 && n <= 600) {
  let resto = n;
  let cem = Math.floor(resto / 100);
  resto = n% 100;
  let cinquenta = Math.floor(resto / 50);
  resto = n % 50;
  let dez = Math.floor(resto / 10);
  resto = n % 10;
  let cinco = Math.floor(resto / 5);
  resto = n % 5;
  let um = Math.floor(resto / 1);
  resto = n % 1;
  let result = `Para sacar a quantia de ${n} reais, o programa fornece`;

  if (cem > 1) {
    if(cem ===1) {
      result += ` uma nota`;
    } else if(cem ===2) {
      result += ` duas notas `;
    } else if(cem === 3) {
      result += ` três notas `;
    } else if(cem === 4) {
      result += ` quatro notas `;
    } else if(cem === 5) {
      result += ` cinco notas `;
    }
    result += `de 100`;
  }

  if((cinquenta > 0)) {
    if( dez > 0 || cinco > 0 || um > 0) {
      result += `,`;
    } else {
      result += ` e`;
    }
  }

  if (cinquenta > 0 ) {
    result += ` uma nota de 50`;
  }

  if(dez > 0) {
    if(cinco > 0 || um > 0) {
      result += `,`;
    } else {
      result += ` e`;
    }
  }
  

  if (dez > 0) {
    if(dez ===1) {
      result += ` uma nota `;
    } else if(dez ===2) {
      result += ` duas notas `;
    } else if(dez === 3) {
      result += ` três notas `;
    } else if(dez === 4) {
      result += ` quatro notas `;
    }
    result += `de 10`;
  }

  if(cinco > 0) {
    if( um > 0) {
      result += `,`;
    } else {
      result += ` e`;
    }
  }
  
  if (cinco > 0) {
    result += ` uma nota de 5`;
  }

  if (um > 0) {
    result += ` e `;
  }

  if (um > 0) {
    if(um ===1) {
      result += ` uma nota `;
    } else if(um ===2) {
      result += ` duas notas `;
    } else if(um === 3) {
      result += ` três notas `;
    } else if(um === 4) {
      result += ` quatro notas `;
    }
    result += `de 1`;
  }
  alert(`${result}`);
} else if (n < 10) {
  alert("Valor mínimo a ser sacado é 10 reais!");
} else if (n > 600) {
  alert("Valor máximo a ser sacado é 600 reais!");
}

