const greetPeople = (people) => {
  const greeting = 'Hello ';
  const output = [];

  for (const person in people) {
    output.push(greeting + people[person]);
  }
  return output;
};

module.exports = greetPeople;