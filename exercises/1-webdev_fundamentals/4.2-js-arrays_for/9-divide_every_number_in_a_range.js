// EXERCÍCIO:
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 

let numbers = [];
let divider = 2;

// Acrescenta ao array numbers todos os números de 1 a 25.
for (let index = 1; index <= 25; index += 1) {
    numbers.push(index);
}

// Imprime o resulta da divisão por 2 de cada número do array.
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / divider);
}
