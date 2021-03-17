/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

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
  stats: [];
  types: PokemonType[];
  sprites: {
    back_default: string;
    front_default: string;
  };
}

interface PokemonContextData {
  buscar(inputtext: string): Promise<void>;
  pokemons: Pokemon[];
  favorites: Pokemon[];
  addfavorites(item: Pokemon): void;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  const buscar = useCallback(
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
        const selectItem = favorites.findIndex(
          (item) => item.id === pokemon.id,
        );
        favorites.splice(selectItem, 1);
      }
    },
    [setFavorites, favorites],
  );

  return (
    <PokemonContext.Provider
      value={{ addfavorites, buscar, favorites, pokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
