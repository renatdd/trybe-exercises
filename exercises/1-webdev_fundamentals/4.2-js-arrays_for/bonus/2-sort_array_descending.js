// EXERCÍCIO:
// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

/* 
Algoritmo bubble sort:
Número inicial de passagens pela lista é definido como tamanho da lista
menos um, decrescendo em um a cada passagem. Isso porque a checagem se dá 
entre pares (número atual e o seguinte), sendo desnecessário conferir o 
último elemento do ciclo anterior por este ter sido definido como o menor
entre os restantes.
*/
for (cycles = numbers.length - 1; cycles > 0; cycles -= 1) {
    // Iteração vai até penúltimo porque são comparados com o próximo.
    for (currentIndex = 0; currentIndex < cycles; currentIndex += 1) {
        // Definindo posição do próximo.
        let nextIndex = currentIndex + 1;
        // Confere se atual é menor que próximo. Se não, posições são mantidas.
        if (numbers[currentIndex] < numbers[nextIndex]) {
            // Definindo valor do menor número
            greatestNumber = numbers[nextIndex];
            // Trocando as posições
            numbers[nextIndex] = numbers[currentIndex];
            numbers[currentIndex] = greatestNumber;
        }
    }
}

console.log(`${numbers}`);
