import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';


class Pokedex extends React.Component {
  render() {
    const pokemonTypes = pokemons.map(({type}) => type);
    const uniqueTypes = [...new Set(pokemonTypes)];
    return (
      <div className="Pokedex">
        <nav className="Pokedex-nav">
          {
            ['Next', ...uniqueTypes].map(type => <button>{ type }</button>)
          }
        </nav>
        <section className="Pokedex-display">
          {
            pokemons.sort(({id:thisId}, {id:nextId}) => thisId - nextId)
              .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
          }
        </section>
      </div>
    );
  }
}

export default Pokedex;
