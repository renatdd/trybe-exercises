/* 
EXERCÍCIO:

4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
  Valor esperado no retorno da função: Fernanda .

*/

function getLongestStr(inputArray) {
  // Returns the longest string among ones passed in array
  
  let longestStr = ""; // stores the longest string
  
  // Loops through array values and stores the string with highest length
  for (index in inputArray) {
    let thisString = inputArray[index];
    if (thisString.length > longestStr.length || index == 0) {
      longestStr = thisString;
    }
  }
  return longestStr;
}

let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let longestName = getLongestStr(testArray);
console.log(longestName);
