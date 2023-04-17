'use client';

import React from 'react';

import { IconType } from 'react-icons';

import { ButtonStyled } from '@/app/components/button/styles';
import { Icon } from '@/app/components/icon/Icon';

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
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      outline={outline as boolean}
      small={small as boolean}
    >
      {icon && <Icon icon={icon} size={size || 16} />}
      {label}
    </ButtonStyled>
  );
};
