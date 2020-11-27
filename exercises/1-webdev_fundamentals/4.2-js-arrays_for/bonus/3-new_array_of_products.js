/* 

EXERCÍCIO:

Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. 
Cada valor do novo array deverá ser igual ao valor correspondente no array numbers 
multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, 
pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor 
do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), 
e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 
Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo: 

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lastIndex = numbers.length - 1;
// Definindo novo array
let newNumbers = [];

// Iteração até o último número
for (currentIndex = 0; currentIndex <= lastIndex; currentIndex += 1) {
    let thisNumber = numbers[currentIndex];
    let nextNumber = numbers[currentIndex + 1];
    // Confere se é o último número. Se sim, adiciona ao novo array o seu dobro.
    // Se não, adiciona o produto deste com o próximo
    if (currentIndex == lastIndex) {
        newNumbers.push(thisNumber * 2);
    } else {
        newNumbers.push(thisNumber * nextNumber);
    }
}

console.log(`${newNumbers}`);
