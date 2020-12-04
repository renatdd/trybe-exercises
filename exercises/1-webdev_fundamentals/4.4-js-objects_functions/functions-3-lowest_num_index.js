/* 
EXERCÍCIO:

3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  Array de teste: [2, 4, 6, 7, 10, 0, -3];.
  Valor esperado no retorno da função: 6.

*/

function getLowestNumIndex(inputArray) {
  // Returns index of the lowest number in passed array
  
  let lowest = {
    value: null,
    index: null
  }; // stores lowest number value and index
  
  // Loops through array values and stores index and value whether it's the first 
  // loop or one is lower than the current lowest number.
  for (index in inputArray) {
    let thisNumber = inputArray[index];
    if (thisNumber < lowest.value || index == 0) {
      lowest.value = thisNumber;
      lowest.index = index;
    }
  }
  return lowest.index;
}

let testArray = [2, 4, 6, 7, 10, 0, -3];
let lowestNumIndex = getLowestNumIndex(testArray);
console.log(lowestNumIndex);
