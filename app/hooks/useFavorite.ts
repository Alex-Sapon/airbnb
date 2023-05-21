import { MouseEvent, useCallback, useMemo } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useLoginModal } from '@/app/hooks/useLoginModal';
import { SafeUser } from '@/app/types';

type UseFavoriteProps = {
  listingId: string;
  currentUser: SafeUser | null;
};

export const useFavorite = ({ listingId, currentUser }: UseFavoriteProps) => {
  const router = useRouter();

  const loginModal = useLoginModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete(`/api/favorites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favorites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (error) {
        toast.error('Something went wrong.');
      }
    },
    [currentUser, listingId, hasFavorited, loginModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};
