import { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';


const opa = () => { alert(this); }
const typeButton = type => <div onClick={opa} className="TypeButton">{type}</div>;

class Pokedex extends Component {
  render() {
    // const pokemonTypes = pokemons.map(({type}) => type);
    // const uniqueTypes = [...new Set(pokemonTypes)];
    return (
      <div className="Pokedex">
        {pokemons.sort(({id:thisId}, {id:nextId}) => thisId - nextId)
          .map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
        }
      </div>
    );
  }
}

export default Pokedex;
