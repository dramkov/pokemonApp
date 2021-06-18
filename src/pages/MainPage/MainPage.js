import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PokemonList from '../../components/PokemonList/PokemonList';
import { clearPokemonList } from '../../store/actions/pokemons';
import './MainPage.css';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPokemonList());
  }, [dispatch]);

  return <PokemonList />;
};

export default MainPage;
