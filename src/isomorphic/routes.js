import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import { getData } from '../redux/actions/home';

export const routes = [{
  path: '/',
  component: Home,
  loadData: () => getData()
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
