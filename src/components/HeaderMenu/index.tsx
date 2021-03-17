import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Header, HeaderContent, Nav, ExitButton } from './styles';

import { useAuth } from '../../hooks/Auth';
import { PokemonContext } from '../../hooks/pokemonsContext';

import LogoBWMenu from '../../assets/logoBW.svg';
import IconExit from '../../assets/icon-exit.svg';

const Menu: React.FC = () => {
  const { favorites } = useContext(PokemonContext);
  const history = useHistory();
  const { logout } = useAuth();

  let pokemonCounter;

  if (favorites.length > 0) {
    pokemonCounter = favorites.length;
  }

  return (
    <Header>
      <HeaderContent>
        <img src={LogoBWMenu} alt="Pokémon" />
        <Nav>
          <ul>
            <li>
              <Link to="/home">
                Favoritos
                {favorites.length > 0 ? <div>{pokemonCounter}</div> : <span />}
              </Link>
            </li>
            <li>
              <Link to="/search">Procurar</Link>
            </li>
            <li>
              <Link to="/todos">Ver todos</Link>
            </li>
          </ul>
        </Nav>

        <ExitButton
          onClick={() => {
            logout();
            history.push('/');
          }}
        >
          <span>Sair</span> <img src={IconExit} alt="" />
        </ExitButton>
      </HeaderContent>
    </Header>
  );
};
export default Menu;
