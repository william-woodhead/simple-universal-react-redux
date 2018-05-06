import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../containers/App';
import Home from '../containers/Home';
import About from '../containers/About';
import { getHomeData } from '../redux/actions/home';
import { getAboutData } from '../redux/actions/about';

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
  loadData: () => getHomeData()
}, {
  path: '/about',
  exact: true,
  component: About,
  loadData: () => getAboutData()
}];

export default function Router() {
  return (
    <App>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </App>
  );
}
