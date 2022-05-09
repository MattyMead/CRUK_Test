import React, { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { crukTheme } from '@cruk/cruk-react-components';
import { Header } from 'core/layout/views/header';

const SiteWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Layout: React.FC<PropsWithChildren<{}>> = (props) => (
  <ThemeProvider theme={crukTheme}>
    <SiteWrapper>
      <Header />
      {props.children ?? null}
    </SiteWrapper>
  </ThemeProvider>
);