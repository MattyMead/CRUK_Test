import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment-timezone';
import Router from 'core/routing/components/router';
import store from 'core/redux/store';

moment.tz.setDefault('Etc/UTC');

export const AppProvider: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};