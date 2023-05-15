'use client';

import { Container } from '@/app/components/container/Container';
import { ListingCard } from '@/app/components/listings/ListingCard';
import { SafeUser } from '@/app/types';

import { ListingListWrapper } from './styles';

export const ListingList = ({ listings }: any) => {
  return (
    <Container>
      <ListingListWrapper>
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={{} as SafeUser}
          />
        ))}
      </ListingListWrapper>
    </Container>
  );
};
