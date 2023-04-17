'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { RegisterModal } from '@/app/components/modals';
import { ToasterProvider } from '@/app/providers/ToasterProvider';
import { GlobalStyles } from '@/app/styles/globals';
import StyledComponentsRegistry from '@/app/styles/registry';
import { styles } from '@/app/styles/styles';

const Layout = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={styles}>
      <ToasterProvider />
      <RegisterModal />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Layout;
