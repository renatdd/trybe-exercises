const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => jokeContainer.innerText = joke);
};

window.onload = () => {
  fetchJoke();
};
