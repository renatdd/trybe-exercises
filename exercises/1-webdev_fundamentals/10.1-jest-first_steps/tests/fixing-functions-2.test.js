/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar
se a mesma está retornando como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes.
*/

const removeVowels = require('../exercise-1/fixing-functions-2');

const parameter = 'Dayane';
const result = 'D1y2n3';

it("removeVowels('Dayane') returns 'D1y2n3'", () => {
  expect(removeVowels(parameter)).toEqual(result);
});
