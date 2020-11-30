/* 

EXERCÍCIO:
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo: 

n = 5

*
**
***
****
*****

*/

const star = '*';
const triangleHeight = 5;
let line; // Sets the line to be writen

// First solution: printing in every loop
for (let row = 1; row <= triangleHeight; row += 1) {
    line = star.repeat(row);
    console.log(line);
}

// // Second solution: using an array and separating data processing from output
// let triangleArray = [];
// for (let row = 1; row <= triangleHeight; row += 1) {
//     line = star.repeat(row);
//     triangleArray.push(line);
// }

// console.log(triangleArray.join('\n'));
