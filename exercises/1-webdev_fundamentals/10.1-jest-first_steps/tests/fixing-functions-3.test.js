/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar
se a mesma está retornando como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes.
*/

const greaterThanTen = require("../exercise-1/fixing-functions-3");

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

it("greaterThanTen([4, 10, 32, 9, 21]) returns [32, 21]", () => {
  expect(greaterThanTen(parameter)).toEqual(result);
});
