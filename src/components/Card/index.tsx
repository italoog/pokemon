/* eslint-disable camelcase */
import React from 'react';

import { Container, Cardpokemon } from './styles';

import heartRed from '../../assets/heartRed.svg';

interface PokemonType {
  slot: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
}

interface CardPokemon {
  id: number;
  name: string;
  favorite: boolean;
  weight: number;
  height: number;
  stats: [];
  types: PokemonType[];
  sprites: {
    back_default: string;
    front_default: string;
  };
}

interface CardPropes {
  pokemon: CardPokemon;
}

const Card: React.FC<CardPropes> = ({ pokemon }) => {
  return (
    <Container>
      <Cardpokemon>
        <button type="button">
          <img src={heartRed} alt="" />
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
