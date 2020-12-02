/* 
EXERCÍCIO:

1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false

*/

function checkPalindrome(word) {
  // Returns whether a string is a palindrome or not
  word = word.toLowerCase(); // converts input str to lower case
  let checkString = ""; // sets reversed text
  // Loops backwards through word chars
  for (let index = word.length - 1; index >= 0; index -= 1) {
    checkString += word[index];
  }
  if (word === checkString) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('Renato'));
console.log(checkPalindrome('OVO'));
console.log(checkPalindrome('arara'));
