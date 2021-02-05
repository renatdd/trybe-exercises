// Escreva a função sumAllNumbers para passar nos testes já implementados.

const sumAllNumbers = require('../exercise-1/tdd-3');

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

describe('tdd-2', () => {
  it('sumAllNumbers is a function', () => {
    expect(typeof sumAllNumbers).toBe('function');
  });
  it("sumAllNumbers([9, 23, 10, 3, 8]) returns 53", () => {
    expect(output).toEqual(expected);
  });
});
