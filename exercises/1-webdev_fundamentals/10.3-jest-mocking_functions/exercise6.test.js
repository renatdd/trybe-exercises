/*
Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes.
O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo
deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que
achar necessário.
*/

const api = require('./src-exercise6');

describe('Testing API mocked resolve / reject', () => {
  const mockAPI = jest.spyOn(api, 'getRandomDogPicture');
  it('should return "request sucess" message', async () => {
    mockAPI.mockResolvedValue('request sucess');
    await expect(api.getRandomDogPicture()).resolves.toBe('request sucess');
    expect(api.getRandomDogPicture).toBeDefined();
    expect(api.getRandomDogPicture).toBeCalled();
    expect(api.getRandomDogPicture).toBeCalledTimes(1);
    expect(api.getRandomDogPicture).toBeCalledWith();
  });
  it('should return "request failed" message', async () => {
    mockAPI.mockRejectedValue('request failed');
    await expect(api.getRandomDogPicture()).rejects.toBe('request failed');
    expect(api.getRandomDogPicture).toBeDefined();
    expect(api.getRandomDogPicture).toBeCalled();
    expect(api.getRandomDogPicture).toBeCalledTimes(2);
    expect(api.getRandomDogPicture).toBeCalledWith();
  });
});
