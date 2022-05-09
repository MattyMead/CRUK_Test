import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteConfig } from 'core/routing/types/route-config';

export interface IExtendedRouteProps extends RouteProps{
  route: RouteConfig;
}

const ExtendedRoute: React.FC<IExtendedRouteProps> =
({ route, ...rest }: IExtendedRouteProps) => {

  const {
    layout: Layout,
    component: Component
  } = route;

  const renderComponent = (): JSX.Element => {
    return typeof Component === 'function'
      ? <Component />
      : Component;
  };

  const renderLayout = (): JSX.Element => {
    return !Layout
      ? renderComponent()
      : (
        <Layout>
          {renderComponent()}
        </Layout>
      );
  };

  return (
    <Route {...rest} render={(): React.ReactNode => renderLayout()} />
  );
};

export default ExtendedRoute;