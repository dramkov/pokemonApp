import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCell = ({ id, url, name }) => {
  const renderBackground = (color) => {
    return `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png') no-repeat center ${color}`;
  };

  return (
    <Link
      to={`/pokemon/${id}`}
      className='pokemon-cell'
      style={{ background: renderBackground('#fff') }}
    >
      <h2 className='pokemon-cell__name'>{name}</h2>
    </Link>
  );
};

export default PokemonCell;
