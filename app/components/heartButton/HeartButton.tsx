'use client';

import { SafeUser } from '@/app/types';

import { HeartButtonWrapper, HeartOutline, HeartFill } from './styles';

type HeartButtonProps = {
  listingId: string;
  currentUser: SafeUser | null;
};

export const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const hasFavorite = false;

  return (
    <HeartButtonWrapper className="heart-button">
      <HeartOutline />
      <HeartFill hasFavorite={hasFavorite} />
    </HeartButtonWrapper>
  );
};
