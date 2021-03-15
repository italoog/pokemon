/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface PokemonType {
  slot: number;
  type: any;
}

interface Pokemon {
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
  name: string;
  buscar(inputtext: string): Promise<void>;
  pokemons: Pokemon[];
  favorites: Pokemon[];
  addfavorites(inputtext: string): void;
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
    (item) => {
      setFavorites([...favorites, item]);
    },
    [setFavorites, favorites],
  );

  return (
    <PokemonContext.Provider
      value={{ name: 'teste', addfavorites, buscar, favorites, pokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
