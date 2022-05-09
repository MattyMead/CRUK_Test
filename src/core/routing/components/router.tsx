import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { ROUTE_CONFIG } from 'core/routing/config/routes';
import ExtendedRoute from 'core/routing/components/extended-route';

const Router: React.FC<{}> = () => {

  const getRoutes = (): JSX.Element[] => {
    const routes = Object.entries(ROUTE_CONFIG);

    return routes.map(([key, value]) => {

      return (
        <ExtendedRoute
          key={`ROUTE:${key}`}
          exact
          path={value.path}
          route={value}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <Switch>
        {getRoutes()}
      </Switch>
    </React.Fragment>
  );
};

export default Router;