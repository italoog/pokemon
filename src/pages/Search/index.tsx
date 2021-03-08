/* eslint-disable camelcase */
import React, { useState, FormEvent, useContext } from 'react';
import { PokemonContext } from '../../hooks/pokemonsContext';
import ThemeButton from '../../components/ThemeButton';
import HeaderMenu from '../../components/HeaderMenu';
// import Card from '../../components/Card';
import DetailsModal from '../../components/DetailsModal';

import search from '../../assets/search.svg';
import heartRed from '../../assets/heartGrey.svg';

import { Container, Content, ContentCards, InputSearch, Card } from './styles';

// interface PokemonType {
//   slot: number;
//   type: any;
// }
// interface Pokemon {
//   id: number;
//   name: string;
//   weight: number;
//   height: number;
//   stats: [];
//   types: PokemonType[];
//   sprites: {
//     back_default: string;
//     front_default: string;
//   };
// }

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
              <Card key={item.id}>
                <button type="button">
                  <img src={heartRed} alt="" />
                </button>

                <img src={item.sprites.front_default} alt="" />

                <div>
                  <h1>{item.name}</h1>
                  <span>ID: {item.id}</span>

                  <div>
                    {item.types.map((type) => (
                      <div>{type.type.name}</div>
                    ))}
                  </div>
                  <button type="button">Ver detalhes</button>
                </div>
              </Card>
            ))}
          </ContentCards>
        </Content>

        <ThemeButton />
      </Container>
    </>
  );
};

export default Search;
