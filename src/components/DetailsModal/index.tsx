import React, { useContext } from 'react';

import { Pokemon, PokemonContext } from '../../hooks/pokemonsContext';

import {
  Overlay,
  Container,
  Content,
  Category,
  PokemonAvatar,
  Statistic,
  StatisticalBar,
} from './stytles';
import save from '../../assets/save.svg';
import close from '../../assets/close.svg';

interface CardPropes {
  pokemon: Pokemon;
}

const DetailsModal: React.FC<CardPropes> = ({ pokemon }) => {
  const { closeModal, addfavorites } = useContext(PokemonContext);

  function handleAddFavorites(item: Pokemon): void {
    addfavorites(item);
  }

  function handleCloseModal(): void {
    closeModal();
  }

  return (
    <Overlay>
      <Container>
        <Content isFavorited={pokemon.favorite}>
          <h1>Detalhes</h1>
          <h2>{pokemon.name}</h2>
          <PokemonAvatar>
            <div>
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div>
              <img src={pokemon.sprites.back_default} alt="" />
            </div>
          </PokemonAvatar>
          <div>
            <strong>{pokemon.height}m</strong>
            <strong>{pokemon.weight}Kg</strong>
          </div>
          <Category>
            {pokemon.types.map((type) => (
              <div>{type.type.name}</div>
            ))}
          </Category>
          <Statistic>
            <div>
              <strong>Estatisticas</strong>
            </div>
            <StatisticalBar>
              <span>HP</span>
              <div>
                <div style={{ width: `${pokemon.stats[0].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[0].base_stat}</span>
            </StatisticalBar>
            <StatisticalBar>
              <span>ATK</span>
              <div>
                <div style={{ width: `${pokemon.stats[1].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[1].base_stat}</span>
            </StatisticalBar>
            <StatisticalBar>
              <span>DEF</span>
              <div>
                <div style={{ width: `${pokemon.stats[2].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[2].base_stat}</span>
            </StatisticalBar>
            <StatisticalBar>
              <span>S.ATK</span>
              <div>
                <div style={{ width: `${pokemon.stats[3].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[3].base_stat}</span>
            </StatisticalBar>
            <StatisticalBar>
              <span>S.DEF</span>
              <div>
                <div style={{ width: `${pokemon.stats[4].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[4].base_stat}</span>
            </StatisticalBar>
            <StatisticalBar>
              <span>SPD</span>
              <div>
                <div style={{ width: `${pokemon.stats[5].base_stat}%` }} />
              </div>
              <span>{pokemon.stats[5].base_stat}</span>
            </StatisticalBar>
          </Statistic>
          <button
            onClick={() => {
              handleAddFavorites(pokemon);
            }}
            type="button"
          >
            {pokemon.favorite === true ? (
              <span>Remover dos favoritos</span>
            ) : (
              <span>
                <img src={save} alt="" /> Adicionar aos favoritos
              </span>
            )}
          </button>
        </Content>
        <button
          onClick={() => {
            handleCloseModal();
          }}
          type="button"
        >
          <img src={close} alt="" />
        </button>
      </Container>
    </Overlay>
  );
};

export default DetailsModal;
