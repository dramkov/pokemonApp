import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import { fetchPokemonEvolution } from '../../store/actions/pokemons';
import './EvolutionPage.css';

const EvolutionPage = (props) => {
  const id = props.match.params.id;
  const [isLoading, setIsLoading] = useState(false);
  const [render, setRender] = useState(false);
  const evolution = useSelector((state) => state.pokemon.evolution);
  const dispatch = useDispatch();

  useEffect(() => {
    const render = async () => {
      setIsLoading(true);
      try {
        await dispatch(fetchPokemonEvolution(id));

        setRender(true);
      } catch (e) {
        console.log(e.message);
      }
      setIsLoading(false);
    };
    render();
  }, [dispatch, id]);

  const id1 = render ? evolution.chain.species.url.split('/')[6] || '' : '';

  const id2 = render
    ? !!evolution.chain.evolves_to[0]
      ? evolution.chain.evolves_to[0].species.url.split('/')[6]
      : ''
    : '';
  const id3 = render
    ? !!evolution.chain.evolves_to[0].evolves_to[0]
      ? evolution.chain.evolves_to[0].evolves_to[0].species.url.split('/')[6]
      : ''
    : '';

  return (
    <>
      {isLoading && <Loader />}
      <div className="evolution-page">
        {render && (
          <>
            <Link to={`/pokemon/${id1}`} className="evolution-chain">
              <h2 className="chain-name">{evolution.chain.species.name}</h2>
              <img
                className="chain-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id1}.svg`}
                alt="Pokemon"
              ></img>
            </Link>
            {evolution.chain.evolves_to && (
              <>
                <div className="chain-icon">
                  <i
                    className="fa fa-long-arrow-alt-right"
                    style={{ fontSize: '32px' }}
                  />
                  <p className="trigger">
                    {' '}
                    {
                      evolution.chain.evolves_to[0].evolution_details[0].trigger
                        .name
                    }{' '}
                  </p>
                </div>

                <Link to={`/pokemon/${id2}`} className="evolution-chain">
                  <h2 className="chain-name">
                    {evolution.chain.evolves_to[0].species.name}
                  </h2>
                  <img
                    className="chain-image"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id2}.svg`}
                    alt="Pokemon"
                  ></img>
                </Link>
              </>
            )}
            {!!evolution.chain.evolves_to[0].evolves_to[0] && (
              <>
                <div className="chain-icon">
                  <i
                    className="fa fa-long-arrow-alt-right"
                    style={{ fontSize: '32px' }}
                  />
                  <p className="trigger">
                    {
                      evolution.chain.evolves_to[0].evolves_to[0]
                        .evolution_details[0].trigger.name
                    }
                  </p>
                </div>
                <Link to={`/pokemon/${id3}`} className="evolution-chain">
                  <h2 className="chain-name">
                    {evolution.chain.evolves_to[0].evolves_to[0].species.name}
                  </h2>
                  <img
                    className="chain-image"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id3}.svg`}
                    alt="Pokemon"
                  ></img>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default EvolutionPage;
