/* 

EXERCÍCIO:
 3- Agora inverta o lado do triângulo. Por exemplo: 

n = 5

    *
   **
  ***
 ****
*****

*/

const star = '*';
const space = ' ';
const triangleHeight = 5;
let leftIndent; // Sets the indent string
let line; // Sets the line to be writen

// First solution: printing in every loop
for (let row = 1; row <= triangleHeight; row += 1) {
    leftIndent = space.repeat(triangleHeight - row);
    line = leftIndent + star.repeat(row);
    console.log(line);
}

// // Second solution: using an array and separating the data processing from the output
// let triangleArray = [];
// for (let row = 1; row <= triangleHeight; row += 1) {
//     leftIndent = space.repeat(triangleHeight - row);
//     line = leftIndent + star.repeat(row);
//     triangleArray.push(line);
// }

// console.log(triangleArray.join('\n'));
