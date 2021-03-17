import React from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
// import Card from '../../components/Card';
// import DetailsModal from '../../components/DetailsModal';

import { Container, Content, ContentCards, Filtro } from './styles';

const Todos: React.FC = () => (
  <>
    <Container>
      <HeaderMenu />
      <Content>
        <Filtro>
          <button type="button">Todos</button>
          <button type="button">Fire</button>
          <button type="button">Eletric</button>
          <button type="button">Water</button>
        </Filtro>
        <ContentCards>
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </ContentCards>
      </Content>
      <ThemeButton />
    </Container>
    {/* <DetailsModal /> */}
  </>
);

export default Todos;
