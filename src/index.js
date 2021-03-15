import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { Provider } from "mobx-react";
import Store from './Store';

ReactDOM.render(
  <Provider {...Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

