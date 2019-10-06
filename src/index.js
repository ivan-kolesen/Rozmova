import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Vibes:400', 'Roboto:400', 'sans-serif']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
