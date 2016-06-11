import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'coflux';
import App from './components/App';

const defaultStore = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};

render(
  <Provider store={defaultStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
