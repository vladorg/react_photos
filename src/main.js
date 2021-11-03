import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from '~s/store';

import './style.css';
import '~ROOT/sass/main.sass';

ReactDOM.render(
  <Provider store={store}><App/></Provider>, 
  document.querySelector('#app')
);

