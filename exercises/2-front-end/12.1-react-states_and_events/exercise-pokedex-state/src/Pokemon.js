import React from 'react';
import pokemonIcon from './Icons';


class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props.pokemon;
    return (
      <div className="Pokemon">
        <img className="icon" src={pokemonIcon[type]} alt={name} />
        <fieldset>
        <legend align="center">{name}</legend>
        <div>
          <p>
            <label>Type:</label> {type}
          </p>
          <p>
          <label>Weight:</label> {averageWeight.value}{averageWeight.measurementUnit}
          </p>
        </div>
        <div>
          <img className="PokemonImage" src={image} alt={name} />
        </div>
        </fieldset>
      </div>
    );
  }
}

export default Pokemon;
