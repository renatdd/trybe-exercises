const {
  decode,
  encode,
  techList,
  hydrate,
} = require('../exercise-2-playground_functions');

describe('encode function tests', () => {
  it('encode is a function', () => {
    expect(typeof encode).toBe('function');
  });
  let input = 'aeiou';
  let expected = '12345';
  it(`encode("${input}") returns "${expected}"`, () => {
    expect(encode(input)).toBe(expected);
  });
  input = 'Baleia urso';
  expected = 'B1l231 5rs4';
  it(`encode("${input}") returns "${expected}"`, () => {
    expect(encode(input)).toBe(expected);
  });
  it(`encode("${input}").length equals to "${expected}".length`, () => {
    expect(encode(input).length).toBe(expected.length);
  });
});

describe('decode function tests', () => {
  it('decode is a function', () => {
    expect(typeof decode).toBe('function');
  });
  let input = '12345';
  let expected = 'aeiou';
  it(`decode("${input}") returns "${expected}"`, () => {
    expect(decode(input)).toBe(expected);
  });
  input = 'B1l231 5rs4';
  expected = 'Baleia urso';
  it(`decode("${input}") returns "${expected}"`, () => {
    expect(decode(input)).toBe(expected);
  });
  it(`decode("${input}").length equals to "${expected}".length`, () => {
    expect(decode(input).length).toBe(expected.length);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
