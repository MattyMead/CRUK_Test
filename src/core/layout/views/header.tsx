import React from 'react';
import { ENV } from 'core/environment';

export const Header: React.FC<{}> = () => {
  return (
    <div>
      <h1>{ENV.APP_NAME}</h1>
    </div>
  );
};