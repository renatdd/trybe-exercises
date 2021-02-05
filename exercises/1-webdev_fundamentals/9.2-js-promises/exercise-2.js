/*
Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise .
Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
Caso contrário, ela deve ser rejeitada.
Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
*/

const generateArrayWithRandomNumbers = (numberOfItems, maxNumber) => {
  return Array(numberOfItems).fill(null).map(() => Math.ceil( Math.random() * maxNumber));
};

const raiseArrayNumbersToPower = (array, power) => array.map(item => Math.pow(item, power));

const getResultsOfDivisionBy = (...numbers) => {
  const number = numbers.slice(-1);
  const dividers = numbers.slice(0, -1);
  return dividers.map(divider => number / divider);
}

const sumItems = (number1, number2) => number1 + number2;

const sumAllArray = array => array.reduce(sumItems);

const logThis = (...input) => {
  console.log(input.find(() => true));
};

const randomPromise = async () => {
  return new Promise((resolve, reject) => {
    const randomArray = generateArrayWithRandomNumbers(5, 50);
    const poweredArray = raiseArrayNumbersToPower(randomArray, 2);
    const powedArraySum = poweredArray.reduce(sumItems);
    if (powedArraySum > 8000) return reject(powedArraySum);
    resolve(powedArraySum);
  })
  // Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
    .then(getResultsOfDivisionBy.bind(null, 2, 3, 5, 10))
  // Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
    .then(sumAllArray)
    .then(logThis)
  // Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
    .catch(logThis.bind(null, 'É mais de oito mil! Essa promise deve estar quebrada!'));
};

randomPromise();
