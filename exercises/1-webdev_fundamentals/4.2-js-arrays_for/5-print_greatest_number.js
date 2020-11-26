// EXERCÍCIO:
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar o maior valor de numbers
let greatestNumber = 0;

// A cada loop compara se o elemento é maior que greatestNumber, caso verdadeiro, define seu valor como greatestNumber 
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > greatestNumber) {
        greatestNumber = numbers[index];
    }
}

console.log(greatestNumber);
