import React from 'react';
import ReactDOM from 'react-dom/client';
//Redux imports
import { Provider } from 'react-redux';
import Store from './Store/index';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
