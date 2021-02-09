/*
Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função
getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.
Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users, para saber quais IDs existem.
*/

const getUserName = require('./src-exercises-2-3');

describe('Resquesting usernames with getUserName', () => {
  let expected;
  it('should return an username for a valid user id', () => {
    expected = 'Mark';
    return getUserName(4).then((user) => {
      expect(user).toBe(expected);
    });
  });
  it('should return error for an invalid user id', () => {
    expected = { error: 'User with 1 not found.' };
    return getUserName(1).catch((error) => {
      expect(error).toEqual(expected);
    });
  });
});
