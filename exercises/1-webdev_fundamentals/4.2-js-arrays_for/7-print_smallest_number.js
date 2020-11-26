// EXERCÍCIO:
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar o menor valor de numbers
let smallestNumber;

// A cada loop compara se o elemento é maior que smallestNumber.
// Caso verdadeiro, define seu valor como smallestNumber 
for (let index = 0; index < numbers.length; index += 1) {
    if (index == 0) {
        smallestNumber = numbers[index];
    } else {
        if (numbers[index] < smallestNumber) {
            smallestNumber = numbers[index];
        }
    }
}

console.log(smallestNumber);
