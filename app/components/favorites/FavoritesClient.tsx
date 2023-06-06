'use client';

import { Container } from '@/app/components/container/Container';
import { Heading } from '@/app/components/heading/Heading';
import { ListingCard } from '@/app/components/listings/ListingCard';
import { CardList } from '@/app/components/listings/styles';
import { ClientWrapper } from '@/app/styles/clientWrapper';
import { SafeListing, SafeUser } from '@/app/types';

type FavoritesClientProps = {
  currentUser: SafeUser | null;
  listings: SafeListing[];
};

export const FavoritesClient = ({
  currentUser,
  listings,
}: FavoritesClientProps) => {
  return (
    <Container>
      <ClientWrapper>
        <Heading title="Favorites" subtitle="List of places you favorited!" />
        <CardList>
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </CardList>
      </ClientWrapper>
    </Container>
  );
};
