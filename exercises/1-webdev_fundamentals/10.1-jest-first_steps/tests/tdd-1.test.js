// Escreva a função addOne para passar nos testes já implementados.

const addOne = require('../exercise-1/tdd-1');

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

describe('tdd-1', () => {
  it('addOne is a function', () => {
    expect(typeof addOne).toBe('function');
  });
  it('addOne([31, 57, 12, 5]) returns [32, 58, 13, 6]', () => {
    expect(output).toEqual(expected);
  });
  it('unchanged myArray equals to [31, 57, 12, 5]', () => {
    expect(myArray).toEqual(unchanged);
  });
});
