import React, { useContext, useState } from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';

import { Container, Content, ContentCards, Filtro } from './styles';
import { PokemonContext } from '../../hooks/pokemonsContext';

const Todos: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    allPokemons,
    allPokemonsFiltered,
    filterPokemon,
    getAll,
  } = useContext(PokemonContext);

  const [filterOnOff, setfilterOnOff] = useState(false);

  return (
    <>
      <Container>
        <HeaderMenu />
        <Content>
          <Filtro>
            <button
              onClick={() => {
                getAll();
                setfilterOnOff(false);
              }}
              type="button"
            >
              Todos
            </button>
            <button
              onClick={() => {
                filterPokemon('fire');
                setfilterOnOff(true);
              }}
              type="button"
            >
              Fire
            </button>
            <button
              onClick={() => {
                filterPokemon('electric');
                setfilterOnOff(true);
              }}
              type="button"
            >
              Electric
            </button>
            <button
              onClick={() => {
                filterPokemon('water');
                setfilterOnOff(true);
              }}
              type="button"
            >
              Water
            </button>
          </Filtro>
          <ContentCards>
            {filterOnOff === false ? (
              <>
                {allPokemons.map((item) => (
                  <Card key={item.id} pokemon={item} />
                ))}
              </>
            ) : (
              <>
                {allPokemonsFiltered.map((item) => (
                  <Card key={item.id} pokemon={item} />
                ))}
              </>
            )}
          </ContentCards>
        </Content>
        <ThemeButton />
      </Container>
    </>
  );
};

export default Todos;
