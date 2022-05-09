import React from 'react';

import { RouteConfig } from 'core/routing/types/route-config';
import { Layout } from 'core/layout/views';
import { ImageSearchPage } from 'modules/media/views/pages/image-search-page';

export const ROUTE_CONFIG: { [key: string]: RouteConfig } = {
  HOME: {
    path: `/`,
    layout: Layout,
    component: ImageSearchPage
  }
};