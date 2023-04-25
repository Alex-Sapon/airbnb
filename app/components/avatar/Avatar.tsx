'use client';

import { ImageStyled } from '@/app/components/avatar/styles';

type AvatarProps = {
  image: string | null | undefined;
};

export const Avatar = ({ image }: AvatarProps) => {
  return <ImageStyled avatar={image} />;
};
