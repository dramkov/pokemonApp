class Pokemon {
  constructor(id, name, url) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}

export const newPokemon = (pokemon) => {
  return new Pokemon(pokemon.url.split('/')[6], pokemon.name, pokemon.url);
};

export const newPokemonByType = (pokemon) => {
  return new Pokemon(
    pokemon.pokemon.url.split('/')[6],
    pokemon.pokemon.name,
    pokemon.pokemon.url
  );
};
