// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes. 

const assert = require('assert');

const greetPeople = (people) => {
  const greeting = 'Hello ';
  const output = [];

  for (const person in people) {
    output.push(greeting + people[person]);
  }
  return output;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
