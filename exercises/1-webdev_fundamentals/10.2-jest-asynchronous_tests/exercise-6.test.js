/*
Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

Use como base para os exercícios a seguir:
6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
Dica: use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

6.2. Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos,
mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.
*/

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  // Adicione o código aqui.
  return new Promise((resolve, reject) => {
    const foundAnimal = Animals.find(animal => animal.name === name);
    if (foundAnimal) {
      resolve(foundAnimal);
    }
    reject('Nenhum animal com esse nome!');
  });
};

const findAnimalsByAge = (age) => {
  return new Promise((resolve, reject) => {
    const foundAnimalsList = Animals.filter(animal => animal.age === age);
    if (foundAnimalsList.length > 0) {
      resolve(foundAnimalsList);
    }
    reject('Nenhum animal com essa idade!');
  });
};


const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name)
  .then(animal => animal);
};

const getAnimalsByAge = (age) => {
  // Adicione o código aqui.
  return findAnimalsByAge(age)
  .then(animal => animal);
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um array de objetos', () => {
      expect.assertions(1);
      return getAnimalsByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(20).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
