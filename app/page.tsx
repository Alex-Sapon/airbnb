import { getCurrentUser } from '@/app/actions';
import { getListings } from '@/app/actions/getListings';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { SafeUser } from '@/app/types';

import { ListingList } from './components/listings/ListingList';

const Home = async () => {
  const listings = await getListings();
  const currentUser = await getCurrentUser();

  if (!listings || !listings.length) {
    return <EmptyState showReset />;
  }

  return (
    <ListingList listings={listings} currentUser={currentUser as SafeUser} />
  );
};

export default Home;
