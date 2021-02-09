/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar
se a mesma está retornando como se vê na variável result e, caso não esteja, altere
o código para que ele passe nos testes.
*/

const greetPeople = require('../exercise-1/fixing-functions-1');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

it("greetPeople(['Irina', 'Ashleigh', 'Elsa']) \
returns ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa']", () => {
  expect(greetPeople(parameter)).toEqual(result);
});
