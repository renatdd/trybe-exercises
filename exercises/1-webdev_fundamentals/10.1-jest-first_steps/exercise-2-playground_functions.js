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

function hydrate(text) {
  // Referência para o código de regex no JS (MDN web docs):
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
  const numberPattern = /\d+/g;
  const numbersInText = text.match(numberPattern);
  const totalWaterCups = numbersInText.reduce((accumulator, currentNumber) => {
    return parseInt(currentNumber, 10) + accumulator;
  }, 0);
  return `${totalWaterCups} copo${totalWaterCups > 1 ? 's' : ''} de água`;
}

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
}
