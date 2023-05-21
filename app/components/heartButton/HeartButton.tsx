'use client';

import { useFavorite } from '@/app/hooks';
import { SafeUser } from '@/app/types';

import { HeartButtonWrapper, HeartOutline, HeartFill } from './styles';

type HeartButtonProps = {
  listingId: string;
  currentUser: SafeUser | null;
};

export const HeartButton = ({ listingId, currentUser }: HeartButtonProps) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <HeartButtonWrapper className="heart-button" onClick={toggleFavorite}>
      <HeartOutline />
      <HeartFill hasFavorite={hasFavorited} />
    </HeartButtonWrapper>
  );
};
