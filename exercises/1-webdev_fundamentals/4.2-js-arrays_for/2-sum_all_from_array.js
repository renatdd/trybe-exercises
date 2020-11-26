// EXERCÍCIO:
// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar as somas de todos elementos de numbers
let numbersSum = 0;

// Soma a numbersSum cada elemento de numbers
for (let index = 0; index < numbers.length; index += 1) {
    numbersSum += numbers[index];
}

console.log(numbersSum);
