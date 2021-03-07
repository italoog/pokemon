import React from 'react';

import { Header, HeaderContent, Nav, ExitButton } from './styles';

import LogoBWMenu from '../../assets/logoBW.svg';
import IconExit from '../../assets/icon-exit.svg';

const Menu: React.FC = () => (
  <Header>
    <HeaderContent>
      <img src={LogoBWMenu} alt="Pokémon" />
      <Nav>
        <ul>
          <li>Favoritos</li>
          <li>Procurar</li>
          <li>Ver todos</li>
        </ul>
      </Nav>
      <ExitButton>
        <span>Sair</span> <img src={IconExit} alt="" />
      </ExitButton>
    </HeaderContent>
  </Header>
);
export default Menu;
