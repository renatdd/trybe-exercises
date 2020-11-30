/* 

EXERCÍCIO:
 4- Depois, faça uma pirâmide com n asteriscos de base: 

n = 5

  *
 ***
*****

*/

const star = '*';
const space = ' ';
const pyramidBase = 6;
let indentSize;
let leftIndent; // Sets the indent string
let line; // Sets the line to be writen

for (let row = 1; row <= pyramidBase; row += 2) {
  // Checking whether it's the first loop and base is even.
  // If so, the top of the pyramid will be made of 2 stars.
  if ((row == 1) && (pyramidBase % 2 == 0)) {
    row = 2;
  }
  // Calculating left indent
  indentSize = (pyramidBase - row) / 2;
  leftIndent = space.repeat(indentSize);
  line = leftIndent + star.repeat(row);
  console.log(line);
}

// Bonus: adding comment about pyramid style
if (pyramidBase % 2 == 0) {
  console.log("Mayan style");
} else {
  console.log("Egyptian style");
}
