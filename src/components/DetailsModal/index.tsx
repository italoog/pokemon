import React from 'react';

import { Overlay, Container } from './stytles';

import pokemoDetails from '../../assets/pokemoDetails.svg';

const DetailsModal: React.FC = () => (
  <Overlay>
    <Container>
      <h1>Detalhes</h1>
      <h2>Pikachu</h2>
      <div>
        <img src={pokemoDetails} alt="" />
        <img src={pokemoDetails} alt="" />
      </div>
      <div>
        <strong>1.23m</strong>
        <strong>54Kg</strong>
      </div>
      <div>
        <div>Elétrico</div>
        <div>Fire</div>
      </div>
      <div>
        <span>Estatisticas</span>
      </div>
    </Container>
  </Overlay>
);

export default DetailsModal;
