import { getCurrentUser, getListings, ListingParams } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { ListingList } from '@/app/components/listings/ListingList';
import { SafeUser } from '@/app/types';

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
