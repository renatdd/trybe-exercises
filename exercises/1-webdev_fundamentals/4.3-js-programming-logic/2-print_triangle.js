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

// // First solution: printing in every loop
// for (let row = 1; row <= triangleHeight; row += 1) {
//     let line = star.repeat(row); // Sets the line to be writen
//     console.log(line);
// }

// // Second solution: using an array and separating data processing from output
const triangleArray = [];
for (let row = 1; row <= triangleHeight; row += 1) {
    let line = star.repeat(row); // Sets the line to be writen
    triangleArray.push(line);
}

console.log(triangleArray.join('\n'));
