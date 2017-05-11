import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Shop from './components/Shop.jsx';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Shop />
  </Provider>,
  document.getElementById('root')
);
