const {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
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
