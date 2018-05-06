import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router, { routes } from '../isomorphic/routes';
import renderFullPage from './renderFullPage';
import reduxState from '../redux/reducers';
import App from '../containers/App';

export default function handleRender(req, res) {
  const promises = [];

  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) promises.push(route.loadData(match));
    return match;
  });

  Promise.all(promises).then(([data]) => {
    const store = createStore(reduxState, data);

    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Router />
        </StaticRouter>
      </Provider>
    );

    const preloadedState = store.getState();

    res.send(renderFullPage(html, preloadedState));
  });
}
