/*
Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
Após repetir a implementação, restaure a implementação original e crie os testes necessários para
validar.
*/

const stringsHandler = require('./src-exercise4');

describe('getUpperCaseFor mocking', () => {
  it('should return string in lower case', () => {
    const mockgetUpperCaseFor = jest.spyOn(stringsHandler, 'getUpperCaseFor');

    stringsHandler.getUpperCaseFor.mockImplementation(
      string => string.toLowerCase()
    );

    expect(stringsHandler.getUpperCaseFor('Apple')).toBe('apple');
    expect(stringsHandler.getUpperCaseFor).toBeCalled();
    expect(stringsHandler.getUpperCaseFor).toBeCalledWith('Apple');
    expect(stringsHandler.getUpperCaseFor).toBeCalledTimes(1);
    stringsHandler.getUpperCaseFor.mockRestore();
    expect(stringsHandler.getUpperCaseFor('Apple')).toBe('APPLE');
  });
});
