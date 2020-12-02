/* 
EXERCÍCIO:

5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.

*/

function countElements(inputArray) {
  // Returns an object with counts of elements in a given array

  let valuesCounts = {}; // Stores the values of the elements as keys and their counts as values

  // Loops through array values and stores their counts in valuesCounts
  for (index in inputArray) {
    let thisValue = inputArray[index];
    // Sets count as 1 if the element isn't already in valuesCounts's properties
    if (!(thisValue in valuesCounts)) {
      valuesCounts[thisValue] = 1;
    } 
    // Otherwise, increase its count by one
    else {
      valuesCounts[thisValue] += 1;
    }
  }
  return valuesCounts;
}

function getMostRepeated(inputArray) {
  // Returns the most repeated element in array
  
  let valuesCounts = countElements(inputArray); // An object with elements counts
  let mostRepeated = {
    value: '',
    count: 0
  }; // This will store properties of the most repeated one
  
  // Loops through valuesCounts properties and stores it in mostRepeated
  // whether it's the first one or its count is greater than the current
  // most repeated one
  for (elementValue in valuesCounts) {
    let elementCount = valuesCounts[elementValue];
    if ((mostRepeated.value === "") || (elementCount > mostRepeated.count)) {
      mostRepeated.value = elementValue;
      mostRepeated.count = elementCount;
    }
  }
  return mostRepeated.value;
}

let testArray = [2, 3, 2, 5, 8, 2, 3];
let mostRepeatedNumber = getMostRepeated(testArray);
console.log(mostRepeatedNumber);
