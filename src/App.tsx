import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/Auth';
import { PokemonProvider } from './hooks/pokemonsContext';

import Routes from './routes/index';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </AuthProvider>
    <GlobalStyle />
  </Router>
);
export default App;
