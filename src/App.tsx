import React from 'react';

import GlobalStyle from './styles/global';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Search from './pages/Search';
import Todos from './pages/Todos';

const App: React.FC = () => (
  <>
    <Todos />
    <GlobalStyle />
  </>
);
export default App;
