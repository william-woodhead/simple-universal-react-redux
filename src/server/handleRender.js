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

  // Create a new Redux store instance
  const store = createReduxStore({ server: true });

  let matchedRoute;

  // use `some` to imitate `<Switch>` behavior of selecting only the first to match
  routes.some((route) => {
    // use `matchPath` here
    const match = matchPath(req.path, route);
    if (match) matchedRoute = match;
    if (match && route.loadData) promises.push(store.dispatch(route.loadData()));
    return match;
  });

  // once all the promises from the routes have been resolved, continue with rendering
  Promise.all(promises).then(() => {
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Router />
        </StaticRouter>
      </Provider>
    );

    const preloadedState = store.getState();

    // send a code based on whether the route matched
    res
      .status(matchedRoute.isExact ? 200 : 404)
      .send(renderFullPage(html, preloadedState));
  });
}
