// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortAscendig = inputArray => inputArray.sort((a, b) => a - b);
// Seu código aqui.

console.log(sortAscendig(oddsAndEvens));