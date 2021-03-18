/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
import React, { useState, FormEvent, useContext } from 'react';
import { PokemonContext } from '../../hooks/pokemonsContext';
import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
import Card from '../../components/Card';

import search from '../../assets/search.svg';
// import heartRed from '../../assets/heartRed.svg';
// import heartGrey from '../../assets/heartGrey.svg';

import { Container, Content, ContentCards, InputSearch } from './styles';

const Search: React.FC = () => {
  const { buscar, pokemons } = useContext(PokemonContext);

  const [newPokemon, setNewPokemon] = useState('');

  async function handleAddPokemon(
    event: FormEvent<HTMLFontElement | any>,
  ): Promise<void> {
    event.preventDefault();

    if (newPokemon) {
      buscar(newPokemon);
    }
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
            {pokemons.map((item) => (
              <Card key={item.id} pokemon={item} />
            ))}
          </ContentCards>
        </Content>

        <ThemeButton />
      </Container>
    </>
  );
};

export default Search;
