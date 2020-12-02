/* 
EXERCÍCIO:

2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.

*/

function getHighestNumIndex(inputArray) {
  // Returns index of the highest number in passed array
  
  let highest = {
    value: null,
    index: null
  }; // stores highest number value and index
  
  // Loops through array values and stores index and value whether it's the first 
  // loop or one is higher than the current highest number
  for (index in inputArray) {
    let thisNumber = inputArray[index];
    if (thisNumber > highest.value || index == 0) {
      highest.value = thisNumber;
      highest.index = index;
    }
  }
  return highest.index;
}

let testArray = [2, 3, 6, 7, 10, 1];
let highestNumIndex = getHighestNumIndex(testArray);
console.log(highestNumIndex);
