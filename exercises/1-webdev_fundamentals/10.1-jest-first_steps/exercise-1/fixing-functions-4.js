const secondThirdSmallest = array => array.sort(
  (number1, number2) => number1 - number2
  ).splice(1, 2);

module.exports = secondThirdSmallest;