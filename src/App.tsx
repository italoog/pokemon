import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import light from './styles/themes/ligth';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes/index';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={light}>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>

      <GlobalStyle />
    </ThemeProvider>
  </>
);
export default App;
