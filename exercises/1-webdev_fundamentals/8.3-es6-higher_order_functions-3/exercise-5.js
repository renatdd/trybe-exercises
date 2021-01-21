
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.

const containsA = () => names.reduce((acc, currentWord) => {
  const aCount = currentWord.split('').filter(letter => letter === 'a' || letter === 'A').length;
  return aCount + acc;
}, 0);

assert.deepStrictEqual(containsA(), 20);
