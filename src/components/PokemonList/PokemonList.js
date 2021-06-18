import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loader from '../Loader/Loader';
import PokemonCell from '../PokemonCell/PokemonCell';
import {
  fetchPokemonByType,
  fetchPokemons,
} from '../../store/actions/pokemons';
import './PokemonList.css';

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
        throw Error(e.message);
      }
      setIsLoading(false);
    };

    render();
  }, [dispatch, section]);

  useEffect(() => {
    setIsLoading(true);

    const filtering = async () => {
      try {
        if (filter === 'show_all') {
          setIsLoading(false);

          return;
        } else {
          await dispatch(fetchPokemonByType(filter));
        }
      } catch (e) {
        throw Error(e.message);
      }
      setIsLoading(false);
    };

    filtering();
  }, [dispatch, filter]);

  const renderLoader = () => {
    if (section >= 720) {
      return;
    }

    return <Loader />;
  };

  const renderPokemons = () => {
    if (filter === 'show_all') {
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
      {isLoading && <Loader />}
      {pokemonList.length === 0 && pokemonListByType.length === 0 ? (
        <div className="pokemon-list"></div>
      ) : (
        <div>
          <InfiniteScroll
            className="pokemon-list"
            dataLength={pokemonList.length}
            next={loadMore}
            hasMore={pokemonList.length < count && filter === 'show_all'}
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
