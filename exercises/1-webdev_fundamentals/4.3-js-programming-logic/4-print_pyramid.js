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

for (let row = 1; row <= pyramidBase; row += 2) {
  // Checking whether it's the first loop and base is even.
  // If so, the top of the pyramid will be made of 2 stars.
  if ((row == 1) && (pyramidBase % 2 == 0)) {
    row = 2;
  }
  // Calculating left indent
  let indentSize = (pyramidBase - row) / 2;
  let leftIndent = space.repeat(indentSize); // Sets the indent string
  let line = leftIndent + star.repeat(row);  // Sets the line to be writen
  console.log(line);
}

// Bonus: adding comment about pyramid style
if (pyramidBase % 2 == 0) {
  console.log("Mayan style");
} else {
  console.log("Egyptian style");
}
