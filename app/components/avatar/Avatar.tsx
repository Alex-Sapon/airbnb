'use client';

import { ImageStyled } from './styles';

type AvatarProps = {
  image: string | null | undefined;
};

export const Avatar = ({ image }: AvatarProps) => {
  return <ImageStyled avatar={image} />;
};
