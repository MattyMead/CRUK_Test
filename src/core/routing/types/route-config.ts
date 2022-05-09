import { ComponentType, PropsWithChildren } from 'react';

export type RouteConfig = {
  path: string;
  layout?: ComponentType<PropsWithChildren<{}>>;
  component: ComponentType | JSX.Element;
};