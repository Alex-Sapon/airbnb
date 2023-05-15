import { getListings } from '@/app/actions/getListings';
import { EmptyState } from '@/app/components/emptyState/EmptyState';

import { ListingList } from './components/listings/ListingList';

const Home = async () => {
  const listings: any = await getListings();

  if (!listings || !listings.length) {
    return <EmptyState showReset />;
  }

  return <ListingList listings={listings} />;
};

export default Home;
