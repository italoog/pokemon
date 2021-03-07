import React from 'react';

import { Container } from './styles';

import Astronaut from '../../assets/astronaut.svg';

const EmptySpace: React.FC = () => (
  <Container>
    <img src={Astronaut} alt="Está meio vazio por aqui!" />

    <h1>Está meio vazio por aqui!</h1>
    <p>Procure por pokémons para adicioná-los aos seus favoritos.</p>
    <button type="button">Procurar pokémons</button>
  </Container>
);

export default EmptySpace;
