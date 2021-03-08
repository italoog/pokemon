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
  // pokemon: Pokemon;
  name: string;
  buscar(inputtext: string): Promise<void>;
  pokemons: Pokemon[];
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const buscar = useCallback(
    async (inputText) => {
      const response = await api.get<Pokemon>(`pokemon/${inputText}`);

      const pokemon = response.data;
      setPokemons([...pokemons, pokemon]);
    },
    [setPokemons, pokemons],
  );

  return (
    <PokemonContext.Provider value={{ name: 'teste', buscar, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
