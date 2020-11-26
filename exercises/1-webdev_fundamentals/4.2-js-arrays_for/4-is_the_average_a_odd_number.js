// EXERCÍCIO:
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar as somas de todos elementos de numbers
let numbersSum = 0;

// Soma a numbersSum cada elemento de numbers
for (let index = 0; index < numbers.length; index += 1) {
    numbersSum += numbers[index];
}

// Calcula a média aritmética da soma de todos elementos de numbers
let numbersAverage = numbersSum / numbers.length;

if (numbersAverage > 20) {
    console.log("Valor maior que 20.");
} else if (numbersAverage == 20) {
    console.log("Valor igual a 20.");
} else {
    console.log("Valor menor que 20.");
}

