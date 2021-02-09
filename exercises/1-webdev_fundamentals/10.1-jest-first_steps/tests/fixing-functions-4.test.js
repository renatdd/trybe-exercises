/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar
se a mesma está retornando como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes.
*/

const secondThirdSmallest = require("../exercise-1/fixing-functions-4");

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

it("secondThirdSmallest([4, 10, 32, 9, 21, 90, 5, 11, 8, 6]) returns [5, 6]", () => {
  expect(secondThirdSmallest(parameter)).toEqual(result);
});
