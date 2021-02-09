/*

Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro.

*/

const getUserName = require('./src-exercises-2-3');

describe('Resquesting usernames with getUserName', () => {
  let expected;
  it('should return an username for a valid user id', async () => {
    expected = 'Mark';
    const username = await getUserName(4);
    expect(username).toBe(expected);
  });
  it('should return error for an invalid user id', async () => {
    expected = { error: 'User with 1 not found.' };
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual(expected);
    }
  });
});
