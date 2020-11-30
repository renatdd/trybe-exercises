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

// First solution: printing in every loop
// for (let row = 1; row <= triangleHeight; row += 1) {
//     let leftIndent = space.repeat(triangleHeight - row); // Sets the indent string
//     let line = leftIndent + star.repeat(row); // Sets the line to be writen
//     console.log(line);
// }

// Second solution: using an array and separating the data processing from the output
const triangleArray = [];
for (let row = 1; row <= triangleHeight; row += 1) {
    let leftIndent = space.repeat(triangleHeight - row); // Sets the indent string
    let line = leftIndent + star.repeat(row); // Sets the line to be writen
    triangleArray.push(line);
}

console.log(triangleArray.join('\n'));
