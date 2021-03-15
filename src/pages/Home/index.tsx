import React, { useContext, useState } from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';

import { Container, Bookmarks, ContentCards } from './styles';
import { PokemonContext } from '../../hooks/pokemonsContext';
import EmptySpace from '../../components/EmptySpace';

const Home: React.FC = () => {
  const { addfavorites, favorites } = useContext(PokemonContext);

  console.log(favorites);

  return (
    <>
      <Container>
        <HeaderMenu />
        {favorites.length !== 0 ? (
          <Bookmarks>
            {favorites.length > 1 ? (
              <h1>Olá, você tem {favorites.length} pokémons salvos!</h1>
            ) : (
              <h1>Olá, você tem {favorites.length} pokémon salvo!</h1>
            )}
            <ContentCards>
              <Card />
            </ContentCards>
          </Bookmarks>
        ) : (
          <EmptySpace />
        )}

        <ThemeButton />
      </Container>
    </>
  );
};

export default Home;
