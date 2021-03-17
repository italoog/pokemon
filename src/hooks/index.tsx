import React from 'react';

import { AuthProvider } from './Auth';
import { PokemonProvider } from './pokemonsContext';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PokemonProvider>{children}</PokemonProvider>
  </AuthProvider>
);

export default AppProvider;
