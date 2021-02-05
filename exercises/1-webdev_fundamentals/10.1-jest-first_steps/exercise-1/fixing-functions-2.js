const removeVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let substitute = 1;
  return word.split('').reduce((newWord, char) => {
    if (vowels.includes(char)) {
      char = substitute;
      substitute += 1;
    }
    return newWord + char;
  }, '');
};

module.exports = removeVowels;