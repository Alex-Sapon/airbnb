'use client';

import { IconType } from 'react-icons';

import { IconStyled } from '@/app/components/icon/styles';

type IconProps = {
  icon: IconType;
  size: string | number;
};

export const Icon = ({ icon: IconSvg, size }: IconProps) => {
  return (
    <IconStyled size={size}>
      <IconSvg size={size} />
    </IconStyled>
  );
};
