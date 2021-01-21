const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// Dada uma matriz de matrizes, transforme em uma única matriz.

/* 
// Simplest solution
const flatten = () => arrays.flatMap(x => x);
*/

/* 
// More complex one
const flatten = () => arrays.reduce((acc, current) => acc.concat(current));
*/

// The most complex
const flatten = () => {
  return arrays.reduce((acc, current) => {
    current.forEach((item) => {
      acc.push(item);
    });
    return acc;
  });
};

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
