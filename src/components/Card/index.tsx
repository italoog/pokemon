/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Pokemon, PokemonContext } from '../../hooks/pokemonsContext';

import { Container, Cardpokemon } from './styles';

import heartRed from '../../assets/heartRed.svg';
import heartGrey from '../../assets/heartGrey.svg';

interface CardPropes {
  pokemon: Pokemon;
}

const Card: React.FC<CardPropes> = ({ pokemon }) => {
  const { addfavorites } = useContext(PokemonContext);

  function handleAddFavorites(item: Pokemon): void {
    addfavorites(item);
  }

  return (
    <Container>
      <Cardpokemon>
        <button
          onClick={() => {
            handleAddFavorites(pokemon);
          }}
          type="button"
        >
          {pokemon.favorite === true ? (
            <img src={heartRed} alt="" />
          ) : (
            <img src={heartGrey} alt="" />
          )}
        </button>

        <img src={pokemon.sprites.front_default} alt="" />

        <div>
          <h1>{pokemon.name}</h1>
          <span>ID: {pokemon.id}</span>

          <div>
            {pokemon.types.map((type) => (
              <div>{type.type.name}</div>
            ))}
          </div>
          <button type="button">Ver detalhes</button>
        </div>
      </Cardpokemon>
    </Container>
  );
};

export default Card;
