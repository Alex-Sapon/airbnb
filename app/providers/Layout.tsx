'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { ToasterProvider } from '@/app/providers/ToasterProvider';
import { GlobalStyles } from '@/app/styles/globals';
import { StyledComponentsRegistry } from '@/app/styles/registry';
import { styles } from '@/app/styles/styles';

export const Layout = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={styles}>
      <ToasterProvider />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);
