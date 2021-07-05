import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { MemoizedLoader } from '../Loader/Loader';
import PokemonCell from '../PokemonCell/PokemonCell';
import {
  fetchPokemonByType,
  fetchPokemons,
} from '../../store/actions/pokemons';
import { SHOW_ALL_FILTER_ITEM, ZERO_LENGTH } from '../../constants/constants';
import useAsyncError from '../../apis/hook/AsyncError';

const PokemonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [section, setSection] = useState(0);
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const pokemonListByType = useSelector(
    (state) => state.pokemon.pokemonListByType
  );
  const count = useSelector((state) => state.pokemon.count);
  const filter = useSelector((state) => state.pokemon.filter);
  const dispatch = useDispatch();
  const throwError = useAsyncError();

  const loadMore = () => {
    if (section < 720) {
      setSection(section + 25);
    }
  };

  useEffect(() => {
    const render = async () => {
      setIsLoading(true);

      try {
        await dispatch(fetchPokemons(section));
      } catch (e) {
        throwError(new Error(e.message));
      }
      setIsLoading(false);
    };

    render();
  }, [dispatch, throwError, section]);

  useEffect(() => {
    setIsLoading(true);

    const filtering = async () => {
      try {
        if (filter === SHOW_ALL_FILTER_ITEM) {
          setIsLoading(false);

          return;
        } else {
          await dispatch(fetchPokemonByType(filter));
        }
      } catch (e) {
        throwError(new Error(e.message));
      }
      setIsLoading(false);
    };

    filtering();
  }, [dispatch, throwError, filter]);

  const renderLoader = () => {
    if (section >= 720) {
      return;
    }

    return <MemoizedLoader />;
  };

  const renderPokemons = () => {
    if (filter === SHOW_ALL_FILTER_ITEM) {
      return pokemonList.map((pokemon) => {
        return (
          <PokemonCell key={pokemon.id} url={pokemon.url} id={pokemon.id} />
        );
      });
    }
    return pokemonListByType.map((pokemon) => {
      return <PokemonCell key={pokemon.id} url={pokemon.url} id={pokemon.id} />;
    });
  };

  return (
    <>
      {isLoading && <MemoizedLoader />}
      {pokemonList.length === ZERO_LENGTH &&
      pokemonListByType.length === ZERO_LENGTH ? (
        <div className='pokemon-list'></div>
      ) : (
        <div>
          <InfiniteScroll
            className='pokemon-list'
            dataLength={pokemonList.length}
            next={loadMore}
            hasMore={
              pokemonList.length < count && filter === SHOW_ALL_FILTER_ITEM
            }
            height={window.innerHeight * 0.675}
            loader={renderLoader()}
          >
            {renderPokemons()}
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default PokemonList;
