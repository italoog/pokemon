import React from 'react';

import { Container, Cardpokemon } from './styles';

import pikachu from '../../assets/pikachu.svg';
import heartRed from '../../assets/heartRed.svg';

const Card: React.FC = () => {
  return (
    <Container>
      <Cardpokemon>
        <button type="button">
          <img src={heartRed} alt="" />
        </button>

        <img src={pikachu} alt="" />

        <div>
          <h1>Pikachu</h1>
          <span>ID: 101</span>

          <div>
            <div>Elétrico</div>
            <div>Fire</div>
          </div>
          <button type="button">Ver detalhes</button>
        </div>
      </Cardpokemon>
    </Container>
  );
};

export default Card;
