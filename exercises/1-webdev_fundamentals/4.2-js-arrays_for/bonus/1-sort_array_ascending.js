// EXERCÍCIO:
// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 
Algoritmo bubble sort:
Número inicial de passagens pela lista é definido como tamanho da lista
menos um, decrescendo em um a cada passagem. Isso porque a checagem se dá 
entre pares (número atual e o seguinte), sendo desnecessário conferir o 
último elemento do ciclo anterior por este ter sido definido como o maior
entre os restantes.
*/
for (cycles = numbers.length - 1; cycles > 0; cycles -= 1) {
    // Iteração vai até penúltimo porque são comparados com o próximo.
    for (currentIndex = 0; currentIndex < cycles; currentIndex += 1) {
        // Definindo posição do próximo.
        let nextIndex = currentIndex + 1;
        // Confere se atual é maior que próximo. Se não, posições são mantidas.
        if (numbers[currentIndex] > numbers[nextIndex]) {
            // Definindo valor do menor número
            smallestNumber =  numbers[nextIndex];
            // Trocando as posições
            numbers[nextIndex] = numbers[currentIndex];
            numbers[currentIndex] = smallestNumber;
        }
    }
}

console.log(`${numbers}`);
