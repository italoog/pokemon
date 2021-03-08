import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/Auth';
import { PokemonProvider } from './hooks/pokemonsContext';

import Routes from './routes/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <PokemonProvider>
        <Router>
          <Routes />
        </Router>
      </PokemonProvider>
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
