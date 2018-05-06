import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from '../universal/routes';
import createReduxStore from '../universal/createReduxStore';

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle
delete window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

const store = createReduxStore({ preloadedState });

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
