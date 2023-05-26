'use client';

import { ReactNode } from 'react';

import { ContainerStyled } from './styles';

export const Container = ({ children }: { children: ReactNode }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
