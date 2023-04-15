'use client';

import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { Modal } from '@/app/components/modals';
import { GlobalStyles } from '@/app/styles/globals';
import StyledComponentsRegistry from '@/app/styles/registry';
import { styles } from '@/app/styles/styles';

const Layout = ({ children }: { children: ReactNode }) => (
  <StyledComponentsRegistry>
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Modal isOpen title="Hello Header" actionLabel="Submit" />
      {children}
    </ThemeProvider>
  </StyledComponentsRegistry>
);

export default Layout;
