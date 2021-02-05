const searchEmployee = require('../bonus-exercise');

describe('searchEmployee function implementation tests', () => {
  it('searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  let inputs = ['1256-4', 'firstName'];
  let expected = 'Linda';
  it(`searchEmployee('${inputs[0]}', '${inputs[1]}') returns '${expected}'`, () => {
    expect(searchEmployee(...inputs)).toStrictEqual(expected);
  });

  inputs = ['9852-2-2', 'lastName'];
  expected = 'Cook';
  it(`searchEmployee('${inputs[0]}', '${inputs[1]}') returns '${expected}'`, () => {
    expect(searchEmployee(...inputs)).toStrictEqual(expected);
  });

  inputs = ['4456-4', 'specialities'];
  expected = ['Context API', 'RTL', 'Bootstrap'];
  it(`searchEmployee('${inputs[0]}', '${inputs[1]}') returns '[${expected}]'`, () => {
    expect(searchEmployee(...inputs)).toStrictEqual(expected);
  });

  it('Throws "ID não identificada" if ID doesn\'t match to any', () => {
    expect(() => { searchEmployee('1111', 'lastname'); })
      .toThrow(new Error('ID não identificada'));
  });

  it('Throws "Informação indisponível" if employee doesn\'t have the given detail property',
    () => {expect(() => { searchEmployee('8579-6', 'gender'); })
      .toThrow(new Error('Informação indisponível'));
  });

  it('Throws "0 argumento foi inserido" if function is called with no arguments',
    () => {expect(() => { searchEmployee(); })
      .toThrow(new Error('0 argumento foi inserido: apenas um id e uma informação devem ser fornecidos para realização da pesquisa.'));
  });

  it('Throws "1 argumento foi inserido" if function is called with only one argument',
  () => {expect(() => { searchEmployee('8579-6'); })
    .toThrow(new Error('1 argumento foi inserido: apenas um id e uma informação devem ser fornecidos para realização da pesquisa.'));
  });

  it('Throws "# argumentos foram inseridos" if function is called with more than two arguments',
  () => {expect(() => { searchEmployee('8579-6', 'lastName', 'department'); })
    .toThrow(new Error('3 argumentos foram inseridos: apenas um id e uma informação devem ser fornecidos para realização da pesquisa.'));
  });

});
