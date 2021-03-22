/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

import DetailsModal from '../components/DetailsModal';

interface PokemonStats {
  base_stat: number;
}
interface PokemonType {
  slot: number;
  type: any;
}

export interface Pokemon {
  id: number;
  name: string;
  favorite: boolean;
  weight: number;
  height: number;
  stats: PokemonStats[];
  types: PokemonType[];
  sprites: {
    back_default: string;
    front_default: string;
  };
}

interface namePokemon {
  name: string;
  url: string;
}

interface ResponseAllPokemons {
  results: namePokemon[];
}

interface PokemonContextData {
  search(inputtext: string): Promise<void>;
  pokemons: Pokemon[];
  allPokemons: Pokemon[];
  favorites: Pokemon[];
  addfavorites(item: Pokemon): void;
  openModal(item: Pokemon): void;
  pokemonModal: Pokemon;
  modalIsOpen: boolean;
  closeModal(): void;
  getAll(): void;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonModal, setPokemonModal] = useState<Pokemon>({} as Pokemon);

  // const [pokex, setPokex] = useState<any[]>([]);

  const search = useCallback(
    async (inputText) => {
      const response = await api.get<Pokemon>(`pokemon/${inputText}`);

      const pokemon = response.data;
      const isRepeated = pokemons.find((item) => {
        if (item.id === pokemon.id) {
          return true;
        }
        return false;
      });

      if (!isRepeated) {
        setPokemons([...pokemons, pokemon]);
      }
    },
    [setPokemons, pokemons],
  );

  const getAll = useCallback(async () => {
    const response = await api.get<ResponseAllPokemons>(
      `pokemon?limit=20&offset=0`,
    );

    const pokemonPromises: any = [];
    // eslint-disable-next-line no-plusplus
    response.data.results.forEach(async (item) => {
      const res = await api.get<Pokemon>(`pokemon/${item.name}`);
      pokemonPromises.push(res.data);
    });

    setAllPokemons(pokemonPromises);
    setPokemons(pokemonPromises);

    // console.log(pokemonPromises);
  }, []);

  const addfavorites = useCallback(
    (pokemon: Pokemon) => {
      const isRepeated = favorites.find((favoriteItem) => {
        if (pokemon.id === favoriteItem.id) {
          return true;
        }
        return false;
      });
      if (!isRepeated) {
        pokemon.favorite = true;
        setFavorites([...favorites, pokemon]);
      } else {
        pokemon.favorite = false;
        setFavorites(favorites.filter((elemet) => elemet.id !== pokemon.id));
      }
    },
    [setFavorites, favorites],
  );

  const openModal = useCallback((item: Pokemon) => {
    setModalIsOpen(true);
    setPokemonModal(item);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        addfavorites,
        search,
        favorites,
        pokemons,
        allPokemons,
        openModal,
        pokemonModal,
        modalIsOpen,
        closeModal,
        getAll,
      }}
    >
      {children}
      {modalIsOpen && <DetailsModal pokemon={pokemonModal} />}
    </PokemonContext.Provider>
  );
};
