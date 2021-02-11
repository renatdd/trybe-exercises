/*
Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em
caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve
receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a
primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova
implementação deve retornar a última letra de uma string. A terceira deve receber três strings e
concatená-las.
*/

const stringsHandler = require('./src-exercise4');
jest.mock('./src-exercise4');

describe('getUpperCaseFor mocking', () => {
  it('should return string in lower case', () => {
    stringsHandler.getUpperCaseFor.mockImplementation(
      string => string.toLowerCase()
    );

    expect(stringsHandler.getUpperCaseFor('Apple')).toBe('apple');
    expect(stringsHandler.getUpperCaseFor).toBeCalled();
    expect(stringsHandler.getUpperCaseFor).toBeCalledWith('Apple');
    expect(stringsHandler.getUpperCaseFor).toBeCalledTimes(1);
  });
});

describe('getFirstCharOf mocking', () => {
  it('should return last char of the string', () => {
    stringsHandler.getFirstCharOf.mockImplementation(
      string => string[string.length - 1]
    );

    expect(stringsHandler.getFirstCharOf('Apple')).toBe('e');
    expect(stringsHandler.getFirstCharOf).toBeCalled();
    expect(stringsHandler.getFirstCharOf).toBeCalledWith('Apple');
    expect(stringsHandler.getFirstCharOf).toBeCalledTimes(1);
  });
});

describe('concatenate mocking', () => {
  it('should return three strings concatenated', () => {
    stringsHandler.concatenate.mockImplementation(
      (string1, string2, string3) => { return string1 + string2 + string3; }
    );

    expect(stringsHandler.concatenate('Apple', ' is ', 'delicious')).toBe('Apple is delicious');
    expect(stringsHandler.concatenate).toBeCalled();
    expect(stringsHandler.concatenate).toBeCalledWith('Apple', ' is ', 'delicious');
    expect(stringsHandler.concatenate).toBeCalledTimes(1);
  });
});
