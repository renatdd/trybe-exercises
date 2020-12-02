/* 
EXERCÍCIO:

7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

    Valor de teste: "trybe" e "be"
    Valor esperado no retorno da função: true
    verificaFimPalavra("trybe", "be") ;
    Retorno esperado: true
    verificaFimPalavra("joaofernando", "fernan") ;
    Retorno esperado: false

*/

function checkStrEnding(word, ending) {
    // Returns whether a word ending matches with a given string
    let wordEnding = ""; // Stores ending chars
    let wordLength = word.length;
    let endingLength = ending.length;
    let matchStartIndex = wordLength - endingLength;
    // Loops from matchStartIndex storing chars in wordEnding
    for (let currentChar = matchStartIndex; currentChar < wordLength; currentChar += 1) {
            wordEnding += word[currentChar];
    }
    return (wordEnding == ending);
}

let checkEnding = checkStrEnding('coding', 'ing');
console.log(checkEnding);
checkEnding = checkStrEnding('trybe', 'be');
console.log(checkEnding);
checkEnding = checkStrEnding('joaofernando', 'fernan');
console.log(checkEnding);
