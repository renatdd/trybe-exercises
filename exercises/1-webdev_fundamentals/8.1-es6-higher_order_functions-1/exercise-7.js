const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

/* 
// First Solution

const yearAlreadyExistsIn = (birthYear, yearsArray) => {
  return typeof yearsArray !== 'undefined' && yearsArray.includes(`${birthYear}`);
}

const valuesAreUnique = array => array.every(year => year === 1);

const authorUnique = () => {
  const birthYearsCounter = {};
  books.forEach((book) => {
    const authorBirthYear = book.author.birthYear;
    const yearAlreadyExists = yearAlreadyExistsIn(authorBirthYear, Object.keys(birthYearsCounter));
    if (yearAlreadyExists) {
      birthYearsCounter[authorBirthYear] += 1;
    } else {
      birthYearsCounter[authorBirthYear] = 1;
    }
  });
  return valuesAreUnique(Object.values(birthYearsCounter));
};
*/

// Simpler Solution: using more HOFs
const ascending = (value1, value2) => value1 - value2;

const valuesAreUniqueIn = (array) => {
  let previousValue;
  return !array.some((value) => {
    const isSameAsPrevious = value === previousValue;
    previousValue = value;
    return isSameAsPrevious;
  });
};

const authorUnique = () => {
  const birthYears = [];
  books.forEach(book => birthYears.push(book.author.birthYear));
  birthYears.sort(ascending);
  return valuesAreUniqueIn(birthYears);
};

assert.strictEqual(authorUnique(), expectedResult);
