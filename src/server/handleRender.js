import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import renderFullPage from './renderFullPage';
import reduxState from '../redux/reducers';
import App from '../containers/App';

export default function handleRender(req, res) {
  // Create a new Redux store instance
  const store = createStore(reduxState);
  // Render the component to a string

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}
