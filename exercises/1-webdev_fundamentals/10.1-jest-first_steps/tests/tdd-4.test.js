// Escreva a função findTheNeedle para passar nos testes já implementados.

const findTheNeedle = require('../exercise-1/tdd-4');

describe('tdd-2', () => {
  it("findTheNeedle(words, 'needle') returns 3", () => {
    const words = ['house', 'train', 'slide', 'needle', 'book'];
    const expected = 3;
    const output = findTheNeedle(words, 'needle');
    expect(output).toBe(expected);
  });
  it("findTheNeedle(words, 'plant') returns 0", () => {
    const words = ['plant', 'shelf', 'arrow', 'bird'];
    const expected = 0;
    const output = findTheNeedle(words, 'plant');
    expect(output).toBe(expected);
  });
  it("findTheNeedle(words, 'plat') returns -1", () => {
    const words = ['plant', 'shelf', 'arrow', 'bird'];
    const expected = -1;
    const output = findTheNeedle(words, 'plat');
    expect(output).toBe(expected);
  });
});
