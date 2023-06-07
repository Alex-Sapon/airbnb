import { getCurrentUser } from '@/app/actions';
import { getListings, ListingParams } from '@/app/actions/getListings';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { SafeUser } from '@/app/types';

import { ListingList } from './components/listings/ListingList';

type HomeProps = {
  searchParams: ListingParams;
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (!listings || !listings.length) {
    return <EmptyState showReset />;
  }

  return (
    <ListingList listings={listings} currentUser={currentUser as SafeUser} />
  );
};

export default Home;
