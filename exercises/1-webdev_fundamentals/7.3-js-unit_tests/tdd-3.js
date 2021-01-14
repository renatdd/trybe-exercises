// Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');

const sumAllNumbers = arr => arr.reduce((number1, number2) => number1 + number2);

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
