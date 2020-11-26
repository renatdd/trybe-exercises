// EXERCÍCIO:
// Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Variável destinada a armazenar a contagem dos valores ímpares de numbers
let oddCount = 0;

// A cada loop compara se o elemento é ímpar. Caso verdadeiro, acresce o valor de oddCount em 1.
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        oddCount += 1;
    }
}

if (oddCount == 0) {
    console.log("Nenhum valor ímpar encontrado.");
} else {
    console.log(`Foram encontrados ${oddCount} valor(es) ímpar(es).`);
}
