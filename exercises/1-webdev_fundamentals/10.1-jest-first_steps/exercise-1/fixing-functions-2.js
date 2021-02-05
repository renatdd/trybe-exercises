const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let substitute = 1;

  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      results.push(substitute);
      substitute += 1;
    } else {
      results.push(characters[i]);
    }
  }
  return results.join('');
};

module.exports = removeVowels;