// Escreva a função wordLengths para passar nos testes já implementados.

const wordLengths = require('../exercise-1/tdd-2');

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

describe('tdd-2', () => {
  it('wordLengths is a function', () => {
    expect(typeof wordLengths).toBe('function');
  });
  it("wordLengths(['sun', 'potato', 'roundabout', 'pizza']) returns [3, 6, 10, 5]", () => {
    const output = wordLengths(words);
    expect(output).toEqual(expected);
  });
});
