'use client';

import React from 'react';

import { IconType } from 'react-icons';

import { ButtonStyled, Close } from '@/app/components/button/styles';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  outline: boolean;
  small: boolean;
  icon?: IconType;
};

export const Button = ({
  label,
  disabled,
  onClick,
  outline,
  small,
  icon: Icon,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      outline={outline}
      small={small}
      icon={Icon}
    >
      {Icon && <Close />}
      {label}
    </ButtonStyled>
  );
};
