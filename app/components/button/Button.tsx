'use client';

import React from 'react';

import { IconType } from 'react-icons';

import { Icon } from '@/app/components/icon/Icon';

import { ButtonStyled } from './styles';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  size?: string | number;
};

export const Button = ({
  label,
  disabled,
  onClick,
  outline,
  small,
  icon,
  size,
}: ButtonProps) => (
  <ButtonStyled
    onClick={onClick}
    disabled={disabled}
    outline={outline}
    small={!!small}
  >
    {icon && <Icon icon={icon} size={size || 16} />}
    {label}
  </ButtonStyled>
);
