import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MemoizedLoader } from '../../components/Loader/Loader';
import { fetchPokemon } from '../../store/actions/pokemons';
import pokeapi from '../../apis/pokeapi';
import { ratingHandler } from '../../utils/ratingHandler';

const PokemonPage = (props) => {
  const id = props.match.params.id;
  const [isLoading, setIsLoading] = useState(false);
  const [render, setRender] = useState(false);
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  const [parentId, setParentId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const render = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchPokemon(id));
        const response = await pokeapi.get(`pokemon-species/${id}`);

        setParentId(response.data.evolution_chain.url.split('/')[6]);
        setRender(true);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    render();
  }, [dispatch, id]);

  return (
    <>
      {isLoading && <MemoizedLoader />}
      <div className='pokemon-page'>
        {render && (
          <>
            <h1 className='pokemon-name'>{pokemon.name}</h1>
            <div className='pokemon-data'>
              <img
                className='pokemon-image'
                src={pokemon.sprites.other.dream_world.front_default}
                alt='Pokemon'
              ></img>
              <div className='data'>
                <table className='table'>
                  <tbody>
                    <tr className='row'>
                      <td className='field'>ID</td>
                      <td className='value'>{pokemon.id}</td>
                    </tr>

                    <tr className='row'>
                      <td className='field'>Type</td>
                      {pokemon.types.map((type) => {
                        return (
                          <td
                            className={`value type pokemon-type-${type.type.name}`}
                            key={type.type.name}
                          >
                            {type.type.name}
                          </td>
                        );
                      })}
                    </tr>

                    <tr className='row'>
                      <td className='field'>Height</td>
                      <td className='value'>{pokemon.height}</td>
                    </tr>

                    <tr className='row'>
                      <td className='field'>Weight</td>
                      <td className='value'>{pokemon.weight}</td>
                    </tr>

                    <tr className='row'>
                      <td className='field'>Abilites</td>
                      <td className='abilities'>
                        {pokemon.abilities.map((ability) => {
                          return (
                            <div
                              className='value'
                              key={ability.ability.name}
                            >{`${ability.ability.name}${
                              ability.is_hidden ? '(hidden)' : ''
                            }`}</div>
                          );
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Link className='evolution' to={`/evolution/${parentId}`}>
                  <h3>EVOLUTION</h3>
                </Link>
              </div>
            </div>
            <div className='pokemon-stats'>
              <h2>BASE STATS</h2>
              <table className='table stats'>
                <tbody>
                  <tr className='row'>
                    <td className='field'>HP</td>
                    <td className='value stats-value'>
                      {pokemon.stats[0].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[0].base_stat)}
                    </td>
                  </tr>

                  <tr className='row'>
                    <td className='field'>Attack</td>
                    <td className='value stats-value'>
                      {pokemon.stats[1].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[1].base_stat)}
                    </td>
                  </tr>

                  <tr className='row'>
                    <td className='field'>Defense</td>
                    <td className='value stats-value'>
                      {pokemon.stats[2].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[2].base_stat)}
                    </td>
                  </tr>

                  <tr className='row'>
                    <td className='field'>Sp.Attack</td>
                    <td className='value stats-value'>
                      {pokemon.stats[3].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[3].base_stat)}
                    </td>
                  </tr>

                  <tr className='row'>
                    <td className='field'>Sp.Def</td>
                    <td className='value stats-value'>
                      {pokemon.stats[4].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[4].base_stat)}
                    </td>
                  </tr>

                  <tr className='row'>
                    <td className='field'>Speed</td>
                    <td className='value stats-value'>
                      {pokemon.stats[5].base_stat}
                    </td>
                    <td className='table-stars'>
                      {ratingHandler(pokemon.stats[5].base_stat)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PokemonPage;
