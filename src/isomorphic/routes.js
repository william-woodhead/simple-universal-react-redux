import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';

function getSomeData(props) {
  return Promise.resolve({ app: { some: 'data' } });
}

export const routes = [{
  path: '/',
  component: Home,
  loadData: (match) => getSomeData(match)
}];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>
    </App>
  );
}
