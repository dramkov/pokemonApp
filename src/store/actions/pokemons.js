import pokeapi from '../../apis/pokeapi';

export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const FETCH_POKEMONS_BY_TYPE = 'FETCH_POKEMONS_BY_TYPE';
export const SET_FILTER = 'SET_FILTER';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const CLEAR_POKEMONLIST = 'CLEAR_POKEMONLIST';
export const FETCH_POKEMON_EVOLUTION = 'FETCH_POKEMON_EVOLUTION';

export const fetchPokemons = (offset) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get('/pokemon', {
        params: {
          limit: 25,
          offset,
        },
      });

      dispatch({ type: FETCH_POKEMONS, payload: response.data });
    } catch (e) {
      throw Error(e.message);
    }
  };
};

export const fetchPokemonByType = (type) => async (dispatch) => {
  try {
    const response = await pokeapi.get(`/type/${type}/`);

    dispatch({ type: FETCH_POKEMONS_BY_TYPE, payload: response.data });
  } catch (e) {
    throw Error(e.message);
  }
};

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const fetchPokemon = (id) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get(`pokemon/${id}`);

      dispatch({ type: FETCH_POKEMON, payload: response.data });
    } catch (e) {
      throw Error(e.message);
    }
  };
};

export const clearPokemonList = () => ({
  type: CLEAR_POKEMONLIST,
  payload: [],
});

export const fetchPokemonEvolution = (id) => {
  return async (dispatch) => {
    try {
      const response = await pokeapi.get(`evolution-chain/${id}`);

      dispatch({
        type: FETCH_POKEMON_EVOLUTION,
        payload: response.data,
      });
    } catch (e) {
      throw Error(e.message);
    }
  };
};
