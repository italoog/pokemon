import React, { useContext, useEffect } from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';
// import Card from '../../components/Card';
// import DetailsModal from '../../components/DetailsModal';

import { Container, Content, ContentCards, Filtro } from './styles';
import { PokemonContext } from '../../hooks/pokemonsContext';

const Todos: React.FC = () => {
  const { getAll, allPokemons } = useContext(PokemonContext);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <Container>
        <HeaderMenu />
        <Content>
          <Filtro>
            <button onClick={getAll} type="button">
              Todos
            </button>
            <button type="button">Fire 10</button>
            <button type="button">Eletric 13</button>
            <button type="button">Water 11</button>
          </Filtro>
          <ContentCards>
            {allPokemons.map((item) => (
              <Card key={item.id} pokemon={item} />
            ))}
          </ContentCards>
        </Content>
        <ThemeButton />
      </Container>
      {/* <DetailsModal /> */}
    </>
  );
};

export default Todos;
