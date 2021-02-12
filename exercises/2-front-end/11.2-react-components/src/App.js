import React from 'react';
import Pokedex from './Pokedex';
import './App.css';


const headerImgUrl = 'https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png';
const Header = () => (
<header>
  <img src={headerImgUrl} alt="" />
</header>
);

class App extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <main>
        <Pokedex />
      </main>
      </div>
    );
  }
}

export default App;
