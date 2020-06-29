import React, {useEffect} from 'react';
import {Router} from 'react-router-dom'
import history from './services/history'

import GlobalStyle from './styles';
import Routes from './routes'
function App() {

  return (
    <div>
      <GlobalStyle/>
      <Router history={history}>

      <Routes></Routes>
      </Router>

    </div>
  );

}

export default App;
