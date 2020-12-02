/* 
EXERCÍCIO:

6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function sumAllInRange(number) {
  let result = 0;
  let start;
  let end;
  // Checks whether number is positive or negative
  if (number >= 0) {
    start = 1;
    end = number;
  } else {
    start = number;
    end = 1;
  }
  for (let currentNumber = start; currentNumber <= end; currentNumber += 1) {
    result += currentNumber;
  }
  return result;
}

let sumResult = sumAllInRange(5);
console.log(sumResult);
sumResult = sumAllInRange(-5);
console.log(sumResult);
