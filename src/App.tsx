import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContext from './hooks/index';
import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppContext>
        <Routes />
      </AppContext>

      <GlobalStyle />
    </Router>
  );
};

export default App;
