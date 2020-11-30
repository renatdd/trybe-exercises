/* 

EXERCÍCIO:
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo: 

n = 5

*****
*****
*****
*****
*****

*/

const star = '*';
const squareSize = 10;

// First solution: using loops and printing data in every round
for (let row = 0; row < squareSize; row += 1) {
    let line = star.repeat(squareSize); // Sets the line to be writen
    console.log(line);
}

// // Second solution: using an array and separating data processing from output
// let squareArray = [];
// for (let row = 0; row < squareSize; row += 1) {
//     let line = star.repeat(squareSize); // Sets the line to be writen
//     squareArray.push(line);
// }
// console.log(squareArray.join('\n'));

// // Third and simpliest solution:
// const line = star.repeat(squareSize);
// // Makes a string with a newline char after stars and repeats it
// const square = (line + '\n').repeat(squareSize); 
// console.log(square);
