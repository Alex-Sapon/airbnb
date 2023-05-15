'use client';

import { SafeUser } from '@/app/types';

import { ListingCardWrapper } from './styles';

type ListingCardProps = {
  data: any;
  currentUser: SafeUser | null;
};

export const ListingCard = ({ data, currentUser }: ListingCardProps) => {
  return (
    <ListingCardWrapper>
      <div>{data.title}</div>
    </ListingCardWrapper>
  );
};
