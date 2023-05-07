'use client';

import { getListings } from '@/app/actions';
import { Container } from '@/app/components/container/Container';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { ListingList } from '@/app/components/listings/styles';

const Home = async () => {
  const listings = await getListings();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <ListingList>
        <div>Listings</div>
      </ListingList>
    </Container>
  );
};

export default Home;
