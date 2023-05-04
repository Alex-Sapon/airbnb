'use client';

import React from 'react';

import { ContainerStyled } from './styles';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
