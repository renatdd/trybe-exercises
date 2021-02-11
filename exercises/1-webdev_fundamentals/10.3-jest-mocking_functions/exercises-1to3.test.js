/*
Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os
testes para essa função. Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/

let getRandomNumber = () => Math.floor(Math.random() * 101);

describe('Exercise 1 - Mocking returned value for getRandomNumber', () => {
  it('should return 10', () => {
    getRandomNumber = jest.fn().mockReturnValue(10);

    expect(getRandomNumber()).toBe(10);
    expect(getRandomNumber).toBeCalled();
    expect(getRandomNumber).toBeCalledTimes(1);
  });
});

/*
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.
Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

describe('Exercise 2 - Mocking behavior for getRandomNumber', () => {
  it('should return the sum of two arguments', () => {
    getRandomNumber = jest.fn().mockImplementationOnce((number1, number2) => {
      return number1 / number2;
    });

    expect(getRandomNumber(20, 2)).toBe(10);
    expect(getRandomNumber).toBeCalled();
    expect(getRandomNumber).toBeCalledTimes(1);
    expect(getRandomNumber(20, 2)).toBe(undefined);
    expect(getRandomNumber).toBeCalledTimes(2);
  });
});

/*
Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação
que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela,
resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro.
Faça os testes necessários.
*/

describe('Exercise 3 - Mocking and reseting behaviors for getRandomNumber', () => {
  it('should return 10', () => {
    getRandomNumber = jest.fn().mockImplementation((number1, number2, number3) => {
      return number1 * number2 * number3;
    });

    expect(getRandomNumber(20, 2, 3)).toBe(120);
    expect(getRandomNumber).toBeCalled();
    expect(getRandomNumber).toBeCalledTimes(1);
    expect(getRandomNumber).toBeCalledWith(20, 2, 3);
    expect(getRandomNumber(20, 2, 3)).not.toBe(undefined);
    expect(getRandomNumber).toBeCalledWith(20, 2, 3);
    expect(getRandomNumber(20, 2)).toBe(NaN);
    expect(getRandomNumber).toBeCalledTimes(3);
    expect(getRandomNumber).toBeCalledWith(20, 2);

    getRandomNumber.mockReset();
    expect(getRandomNumber(20, 2, 3)).toBe(undefined);
    expect(getRandomNumber).toBeCalled();
    expect(getRandomNumber).toBeCalledTimes(1);
    expect(getRandomNumber).toBeCalledWith(20, 2, 3);

    getRandomNumber = jest.fn().mockImplementation(number => number * 2);
    expect(getRandomNumber(20)).toBe(40);
    expect(getRandomNumber).toBeCalled();
    expect(getRandomNumber).toBeCalledTimes(1);
    expect(getRandomNumber).toBeCalledWith(20);

  });
});
