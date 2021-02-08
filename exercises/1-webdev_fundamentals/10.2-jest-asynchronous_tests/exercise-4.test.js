/*
O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios,
e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos',
faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e
'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const tryberReposUrl = 'https://api.github.com/orgs/tryber/repos';

describe('Requesting repo list from Github API using getRepos', () => {
  it('should have "sd-01-week4-5-project-todo-list" and "sd-01-week4-5-project-meme-generator" repos in list', async () => {
    const repoList = await getRepos(tryberReposUrl);
    expect(repoList).toContain('sd-01-week4-5-project-todo-list');
    expect(repoList).toContain('sd-01-week4-5-project-meme-generator');
  });
});
