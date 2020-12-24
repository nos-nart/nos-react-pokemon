import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import  { NotFound, PokemonCardList } from '../components';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <PokemonCardList />
  },
  {
    path: '',
    exact: false,
    main: () => <NotFound />
  }
];

export const AppRoute = () => {
  const getRoutes = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) =>
        <Route
          key={index}
          component={route.main}
          path={route.path}
          exact={route.exact}
        />
      )
    }
    return <Switch>{result}</Switch>
  }
  return (
    <Router>
      {getRoutes(routes)}
    </Router>
  );
}
