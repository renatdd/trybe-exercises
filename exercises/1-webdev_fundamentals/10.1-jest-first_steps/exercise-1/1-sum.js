const checkIfNotNumber = value => typeof(value) !== 'number';

const sum = (number1, number2) => {
  if ([number1, number2].some(checkIfNotNumber)) {
    throw Error('Parameters must be numbers.')
  }
  return number1 + number2;
};

module.exports = sum;