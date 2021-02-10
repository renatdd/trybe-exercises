/*
O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins.
As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique
a chamada dessa API para um resultado específico.
Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:
*/

const api = require('./src-bonus');

const mockedResponse = {
  'id': '7h3oGtrOfxc',
  'joke': 'Whiteboards ... are remarkable.',
  'status': 200,
};

describe('Testing fetchJoke mocked API', () => {
  const mockAPI = jest.spyOn(api, 'fetchJoke');
  it('should return object with id, joke and status properties', async () => {
    mockAPI.mockResolvedValue(mockedResponse);
    expect(api.fetchJoke).toBeDefined();
    expect(api.fetchJoke).toBeCalledTimes(0);
    const response = await api.fetchJoke();
    expect(api.fetchJoke).toBeCalled();
    expect(api.fetchJoke).toBeCalledTimes(1);
    expect(response).toBe(mockedResponse);
    expect(response.id).toBe('7h3oGtrOfxc');
    expect(response.joke).toBe('Whiteboards ... are remarkable.');
    expect(response.status).toBe(200);
    expect(api.fetchJoke).toBeCalledTimes(1);
    expect(api.fetchJoke).toBeCalledWith();
  });
});
