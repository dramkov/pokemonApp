import { SHOW_ALL_FILTER_ITEM } from '../../constants/constants';
import { newPokemon, newPokemonByType } from '../../Models/Pokemon';
import { reduxActions } from '../actionTypes';

const initialState = {
  pokemonList: [],
  pokemonListByType: [],
  pokemon: {},
  evolution: {},

  count: 0,
  filter: SHOW_ALL_FILTER_ITEM,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxActions.FETCH_POKEMONS:
      const pokemonList = [
        ...state.pokemonList,
        ...action.payload.results.map((pokemon) => {
          return newPokemon(pokemon);
        }),
      ];

      return {
        ...state,
        pokemonList: [...pokemonList],
        count: action.payload.count,
      };

    case reduxActions.FETCH_POKEMONS_BY_TYPE:
      const pokemonListByType = action.payload.pokemon.map((pok) => {
        return newPokemonByType(pok);
      });

      return { ...state, pokemonListByType: [...pokemonListByType] };

    case reduxActions.SET_FILTER:
      return { ...state, filter: action.payload };

    case reduxActions.FETCH_POKEMON:
      return { ...state, pokemon: action.payload };
    case reduxActions.CLEAR_POKEMONLIST:
      return { ...state, pokemonList: action.payload };

    case reduxActions.FETCH_POKEMON_EVOLUTION:
      return { ...state, evolution: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
