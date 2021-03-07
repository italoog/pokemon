import React from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';
// import DetailsModal from '../../components/DetailsModal';

import search from '../../assets/search.svg';

import { Container, Content, ContentCards, InputSearch } from './styles';

const Search: React.FC = () => (
  <>
    <Container>
      <HeaderMenu />
      <Content>
        <InputSearch>
          <input name="search" type="text" placeholder="Procure por pokémons" />
          <button type="submit">
            <img src={search} alt="" />
          </button>
        </InputSearch>

        <ContentCards>
          <Card />
        </ContentCards>
      </Content>

      <ThemeButton />
    </Container>
  </>
);

export default Search;
