import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from '../components/Loader/Loader';

const BASE_URL = '/main';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/main',
    component: lazy(() => import('../pages/MainPage/MainPage')),
  },
  {
    exact: true,
    path: '/pokemon/:id',
    component: lazy(() => import('../pages/PokemonPage/PokemonPage')),
  },

  {
    exact: true,
    path: '/evolution/:id',
    component: lazy(() => import('../pages/EvolutionPage/EvolutionPage')),
  },

  {
    path: '*',
    exact: true,
    component: () => <Redirect to={BASE_URL} />,
  },
];

export default routes;
