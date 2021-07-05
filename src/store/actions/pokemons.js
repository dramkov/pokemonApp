import pokeapi from '../../apis/pokeapi';
import { reduxActions } from '../actionTypes';

export const fetchPokemons = (offset) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get('/pokemon', {
        params: {
          limit: 25,
          offset,
        },
      });

      dispatch({ type: reduxActions.FETCH_POKEMONS, payload: response.data });
    } catch (e) {
      throw Error(e.message);
    }
  };
};

export const fetchPokemonByType = (type) => async (dispatch) => {
  try {
    const response = await pokeapi.get(`/type/${type}/`);

    dispatch({
      type: reduxActions.FETCH_POKEMONS_BY_TYPE,
      payload: response.data,
    });
  } catch (e) {
    throw Error(e.message);
  }
};

export const setFilter = (filter) => ({
  type: reduxActions.SET_FILTER,
  payload: filter,
});

export const fetchPokemon = (id) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get(`pokemon/${id}`);

      dispatch({ type: reduxActions.FETCH_POKEMON, payload: response.data });
    } catch (e) {
      throw Error(e.message);
    }
  };
};

export const clearPokemonList = () => ({
  type: reduxActions.CLEAR_POKEMONLIST,
  payload: [],
});

export const fetchPokemonEvolution = (id) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get(`evolution-chain/${id}`);

      dispatch({
        type: reduxActions.FETCH_POKEMON_EVOLUTION,
        payload: response.data,
      });
    } catch (e) {
      throw Error(e.message);
    }
  };
};
