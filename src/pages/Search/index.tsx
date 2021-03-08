import React, { useState, FormEvent } from 'react';

import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';
// import DetailsModal from '../../components/DetailsModal';

import search from '../../assets/search.svg';

import { Container, Content, ContentCards, InputSearch } from './styles';
import api from '../../services/api';

const Search: React.FC = () => {
  const [newPokemon, setNewPokemon] = useState('');
  const [pokemos, setPokemos] = useState([]);

  async function handleAddPokemon(
    event: FormEvent<HTMLFontElement | any>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get(`pokemon/${newPokemon}`);
    console.log(response.data);
  }

  return (
    <>
      <Container>
        <HeaderMenu />
        <Content>
          <form onSubmit={handleAddPokemon}>
            <InputSearch>
              <input
                value={newPokemon}
                onChange={(e) => setNewPokemon(e.target.value)}
                placeholder="Procure por pokémons"
              />
              <button type="submit">
                <img src={search} alt="" />
              </button>
            </InputSearch>
          </form>

          <ContentCards>
            <Card />
          </ContentCards>
        </Content>

        <ThemeButton />
      </Container>
    </>
  );
};

export default Search;
