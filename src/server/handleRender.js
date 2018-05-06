import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import Router, { routes } from '../universal/routes';
import renderFullPage from './renderFullPage';
import createReduxStore from '../universal/createReduxStore';
import App from '../containers/App';

export default function handleRender(req, res) {
  const promises = [];
  const store = createReduxStore({ server: true });

  let matchedRoute;

  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) matchedRoute = match;
    if (match && route.loadData) promises.push(store.dispatch(route.loadData()));
    return match;
  });

  Promise.all(promises).then(() => {
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Router />
        </StaticRouter>
      </Provider>
    );

    const preloadedState = store.getState();

    res.status(matchedRoute.isExact ? 200 : 404).send(renderFullPage(html, preloadedState));
  });
}
