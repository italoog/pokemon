import React, { useState } from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';

import { Container, Bookmarks, ContentCards } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <HeaderMenu />
        <Bookmarks>
          <h1>Olá, você tem 01 pokémon salvo!</h1>
          <ContentCards>
            <Card />
          </ContentCards>
        </Bookmarks>

        <ThemeButton />
      </Container>
    </>
  );
};

export default Home;
