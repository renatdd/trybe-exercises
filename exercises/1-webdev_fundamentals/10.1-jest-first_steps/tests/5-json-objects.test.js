// Compare dois objetos (JSON) para verificar se são idênticos ou não

const { obj1, obj2, obj3 } = require('../exercise-1/5-json-objects.js');

describe('JSON Objects', () => {
  it('obj1 equal to obj2', () => {
    expect(obj1).toEqual(obj2);
  });
  it('obj1 not equal to obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });
  it('obj2 not equal to obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});