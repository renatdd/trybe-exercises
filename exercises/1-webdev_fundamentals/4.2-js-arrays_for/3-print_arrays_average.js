// EXERCÍCIO:
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar as somas de todos elementos de numbers
let numbersSum = 0;

// Soma a numbersSum cada elemento de numbers
for (let index = 0; index < numbers.length; index += 1) {
    numbersSum += numbers[index];
}

// Calcula a média aritmética da soma de todos elementos de numbers
let numbersAverage = numbersSum / numbers.length;

console.log(numbersAverage);
