import React from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends React.Component {
  constructor(props) {
    super();
    this.allPokemonsFilter = 'All';
    this.nextPokemonFilter = 'Next';
    this.disableNextButton = this.disableNextButton.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.displayNext = this.displayNext.bind(this);
    this.filterPokemonsBy = this.filterPokemonsBy.bind(this);
    this.state = {
      displayIndex: 0,
      pokemons: props.pokemons,
    };
  }

  get pokemonTypes() {
    const types = this.props.pokemons.map(({type}) => type);
    return [...new Set(types)];
  } 

  displayNext(event) {
    let { displayIndex } = this.state;
    const isLastPokemon = displayIndex === this.state.pokemons.length - 1;
    displayIndex = isLastPokemon ? 0 : displayIndex + 1;
    this.setState((_props, _state) => ({ displayIndex, }));
  }
  
  filterPokemonsBy(type) {
    let { pokemons } = this.props;
    const isFiltered = type !== this.allPokemonsFilter;
    if (isFiltered) {
      pokemons = pokemons.filter((pokemon) => pokemon.type === type);
    }
    this.setState((_props, _state) => ({ pokemons, displayIndex: 0 }));
  }

  handleEvent(event) {
    const targetText = event.target.innerText;
    if (targetText === this.nextPokemonFilter) {
      this.displayNext();
    } else {
      this.filterPokemonsBy(targetText);
    }
  }

  disableNextButton(type) {
    return type === this.nextPokemonFilter && this.state.pokemons.length <= 1;
  }

  render() {
    const { pokemons, displayIndex } = this.state;
    const pokemon = pokemons[displayIndex];
    return (
      <div className="Pokedex">
        <nav className="Pokedex-nav">
          {
            [this.nextPokemonFilter, this.allPokemonsFilter, ...this.pokemonTypes]
              .map(type => <button key={type} onClick={this.handleEvent} disabled={this.disableNextButton(type)}>
                { type }
              </button>
              )
          }
        </nav>
        <section className="Pokedex-display">
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        </section>
      </div>
    );
  }
}
