/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useCallback, useEffect, useState } from 'react';
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

interface ResponseFilterPokemons {
  pokemon: any[];
}

interface PokemonContextData {
  search(inputtext: string): Promise<void>;
  pokemons: Pokemon[];
  allPokemons: Pokemon[];
  favorites: Pokemon[];
  allPokemonsFiltered: Pokemon[];
  addfavorites(item: Pokemon): void;
  openModal(item: Pokemon): void;
  pokemonModal: Pokemon;
  modalIsOpen: boolean;
  closeModal(): void;
  getAll(): void;
  filterPokemon(type: string): void;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [allPokemonsFiltered, setAllPokemonsFiltered] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonModal, setPokemonModal] = useState<Pokemon>({} as Pokemon);

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
      `pokemon?limit=150&offset=0`,
    );

    const pokemonPromises: any = [];

    response.data.results.forEach(async (item) => {
      const res = await api.get<Pokemon>(`pokemon/${item.name}`);
      pokemonPromises[res.data.id] = res.data;
    });

    setAllPokemons(pokemonPromises);
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

  const filterPokemon = useCallback(async (type: string) => {
    const response = await api.get<ResponseFilterPokemons>(`type/${type}`);

    const pokemonPromises: any = [];

    response.data.pokemon.forEach(async (item) => {
      const res = await api.get<Pokemon>(`pokemon/${item.pokemon.name}`);
      pokemonPromises[res.data.id] = res.data;
      // console.log(item.pokemon.name);
    });

    setAllPokemonsFiltered(pokemonPromises);
  }, []);

  const openModal = useCallback((item: Pokemon) => {
    setModalIsOpen(true);
    setPokemonModal(item);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  useEffect(() => {
    getAll();
  }, [getAll]);

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
        filterPokemon,
        allPokemonsFiltered,
      }}
    >
      {children}
      {modalIsOpen && <DetailsModal pokemon={pokemonModal} />}
    </PokemonContext.Provider>
  );
};
