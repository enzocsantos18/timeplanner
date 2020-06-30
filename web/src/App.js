import React from 'react';
import { PersistGate} from 'redux-persist/integration/react'
import GlobalStyle from './styles';
import {Router} from 'react-router-dom'
import './config/ReactotronConfig'
import Routes from './routes'
import history from './services/history'
import {Provider} from 'react-redux'
import { store, persistor }  from './store'
function App() {
  console.log(process.env.NODE_ENV)
  return (
    // <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle/>
        </Router> 
      </PersistGate>
    </Provider>
    // </>
  );

}

export default App;
