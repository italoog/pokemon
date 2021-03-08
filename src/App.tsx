import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/Auth';

import Routes from './routes/index';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
    <GlobalStyle />
  </>
);
export default App;
