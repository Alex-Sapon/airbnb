'use client';

import { Container } from '@/app/components/container/Container';
import { ListingCard } from '@/app/components/listings/ListingCard';
import { SafeListing, SafeUser } from '@/app/types';

import { ListingListWrapper } from './styles';

type ListingListProps = {
  listings: SafeListing[];
  currentUser: SafeUser | null;
};

export const ListingList = ({ listings, currentUser }: ListingListProps) => {
  return (
    <Container>
      <ListingListWrapper>
        {listings.map((listing: SafeListing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </ListingListWrapper>
    </Container>
  );
};
