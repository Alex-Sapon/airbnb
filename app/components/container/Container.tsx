'use client';

import React from 'react';

import { ContainerStyled } from '@/app/components/container/styles';

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
