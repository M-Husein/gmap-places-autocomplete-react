import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';

import theme from './configs/theme';
import App from './App';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

console.log('%cCreated By Muhamad Husein', 'color:#666;font-family:sans-serif;letter-spacing:2px;font-size:26px;font-weight:700;text-shadow:1px 1px 0 #A0E7FE,2px 2px 1px rgba(0,0,0,.3)');
console.log('%csource: https://github.com/M-Husein/gmap-places-autocomplete-react','font-size:15px');
