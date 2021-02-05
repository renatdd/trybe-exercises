// General loop function
// function loopThroughIn(contextObject, applyFunction) {
//   for (let index in contextObject.input) {
//     if (Object.prototype.hasOwnProperty.call(contextObject.input, index)) {
//       contextObject.currentIndex = index;
//       contextObject.currentValue = contextObject.input[index];
//       contextObject = applyFunction(contextObject);
//     }
//   }
//   return contextObject;
// }

// Desafio 9

const getTranslation = (text, dictionary) => {
  return text.split('').reduce((translatedText, char) => {
    if (Object.keys(dictionary).includes(char)) {
      char = dictionary[char];
    }
    return translatedText + char;
  }, '');
};

function encode(text) {
  const dictionary = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return getTranslation(text, dictionary);
}

function decode(text) {
  const dictionary = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return getTranslation(text, dictionary);
}

function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  return array.sort().reduce((objectsArray, currentItem) => {
    objectsArray.push({ tech: currentItem, name });
    return objectsArray;
  }, []);
}

// Desafio 13
function countCupsOfWater(context) {
  let number = parseInt(context.currentValue, 10);
  context.totalWater += number;
  return context;
}

function hydrate(text) {
  // Referência para o código de regex no JS (MDN web docs):
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  let numberPattern = /\d+/g;
  let numbersInText = text.match(numberPattern);
  let cupsText = 'copo';
  const contextObject = loopThroughIn({ input: numbersInText, totalWater: 0 }, countCupsOfWater);
  if (contextObject.totalWater > 1) {
    cupsText += 's'
  }
  return `${contextObject.totalWater} ${cupsText} de água`;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
}
