import React from 'react';
import { Link } from 'react-router-dom';

import { Header, HeaderContent, Nav, ExitButton } from './styles';

import LogoBWMenu from '../../assets/logoBW.svg';
import IconExit from '../../assets/icon-exit.svg';

const Menu: React.FC = () => (
  <Header>
    <HeaderContent>
      <img src={LogoBWMenu} alt="Pokémon" />
      <Nav>
        <ul>
          <li>
            <Link to="/home">Favoritos</Link>
          </li>
          <li>
            <Link to="/search">Procurar</Link>
          </li>
          <li>
            <Link to="/todos">Ver todos</Link>
          </li>
        </ul>
      </Nav>
      <ExitButton>
        <span>Sair</span> <img src={IconExit} alt="" />
      </ExitButton>
    </HeaderContent>
  </Header>
);
export default Menu;
