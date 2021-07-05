import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ErrorBoundary from '../../components/Error/ErrorBoundary';
import PokemonList from '../../components/PokemonList/PokemonList';
import { clearPokemonList } from '../../store/actions/pokemons';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearPokemonList());
  }, [dispatch]);

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <PokemonList />
    </ErrorBoundary>
  );
};

export default MainPage;
