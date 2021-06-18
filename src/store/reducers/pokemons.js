import { newPokemon, newPokemonByType } from '../../Models/Pokemon';
import {
  CLEAR_POKEMONLIST,
  FETCH_POKEMON,
  FETCH_POKEMONS,
  FETCH_POKEMONS_BY_TYPE,
  FETCH_POKEMON_EVOLUTION,
  SET_FILTER,
} from '../actions/pokemons';

const initialState = {
  pokemonList: [],
  pokemonListByType: [],
  pokemon: {},
  evolution: {},

  count: 0,
  filter: 'show_all',
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
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

    case FETCH_POKEMONS_BY_TYPE:
      const pokemonListByType = action.payload.pokemon.map((pok) => {
        return newPokemonByType(pok);
      });

      return { ...state, pokemonListByType: [...pokemonListByType] };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    case FETCH_POKEMON:
      return { ...state, pokemon: action.payload };
    case CLEAR_POKEMONLIST:
      return { ...state, pokemonList: action.payload };

    case FETCH_POKEMON_EVOLUTION:
      return { ...state, evolution: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;
