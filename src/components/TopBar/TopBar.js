import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setFilter } from '../../store/actions/pokemons';
import './TopBar.css';

const TopBar = (props) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="top-bar">
      <Link to="/main" className="back-button">
        <i className="fa fa-reply" />
      </Link>

      <span className="top-bar-title">Pokemons </span>
      <div className="select-type-pokemon-wrapper">
        <span className="filter-span">Filter: </span>
        <select className="select-type-pokemon" onChange={onChange}>
          <option value="show_all">All Types</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="ground">Ground</option>
          <option value="rock">Rock</option>
          <option value="ghost">Ghost</option>
          <option value="steel">Steel</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="ice">Ice</option>
          <option value="dragon">Dragon</option>
          <option value="dark">Dark</option>
          <option value="fairy">Fairy</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
