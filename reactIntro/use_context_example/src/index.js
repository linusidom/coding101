import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NamesContextProvider} from './store/NamesContext'

ReactDOM.render(
  <React.StrictMode>
    <NamesContextProvider>
    <App />
    </NamesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

