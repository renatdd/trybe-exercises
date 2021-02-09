const sum = require('../exercise-1/1-sum');

it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  expect(sum(1,1)).toBe(2);
});

it('O retorno de sum(4, 5) é 9', () => {
  expect(sum(4,5)).toBe(9);
});

it('o retorno de sum(0, 0) é 0', () => {
  expect(sum(0,0)).toBe(0);
});

test('função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
  expect(() => { sum(4,'5'); }).toThrow();
});

it('mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => { sum(4,'5'); }).toThrow(new Error('Parameters must be numbers.'));
});
