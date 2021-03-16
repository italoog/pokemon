import React from 'react';

import { AuthProvider } from './Auth';
import { PokemonProvider } from './pokemonsContext';
import { CardProvider } from './card';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PokemonProvider>
      <CardProvider>{children}</CardProvider>
    </PokemonProvider>
  </AuthProvider>
);

export default AppProvider;
