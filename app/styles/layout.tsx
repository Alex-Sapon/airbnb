'use client';

import React, { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/app/styles/globals';
import StyledComponentsRegistry from '@/app/styles/registry';
import { styles } from '@/app/styles/styles';

const Layout = ({ children }: { children: ReactElement }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Layout;
