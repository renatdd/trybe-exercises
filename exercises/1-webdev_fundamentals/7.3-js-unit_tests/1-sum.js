const assert = require('assert');

const checkIfNotNumber = value => typeof(value) !== 'number';

const sum = (number1, number2) => {
  if ([number1, number2].some(checkIfNotNumber)) {
    throw Error('Parameters must be numbers.')
  }
  return number1 + number2;
};

assert.strictEqual(typeof(sum), 'function', 'Sum function must be defined');
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(typeof(checkIfNotNumber), 'function', 'checkIfNotNumber function must be defined');
assert.strictEqual(checkIfNotNumber(0), false);
assert.strictEqual(checkIfNotNumber('0'), true);
assert.throws(() => {
    sum(4, '5');
    sum([], '5');
    sum({}, 5);
  }, 
  Error('Parameters must be numbers.')
);
