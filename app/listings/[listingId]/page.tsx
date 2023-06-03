import { getCurrentUser, getListingById, getReservations } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { ListingClient } from '@/app/components/listings/ListingClient';
import { SafeUser } from '@/app/types';

type ParamsType = {
  listingId: string;
};

const ListingPage = async ({ params }: { params: ParamsType }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState showReset />;
  }
  return (
    <ListingClient
      reservations={reservations}
      listing={listing}
      currentUser={currentUser as SafeUser}
    />
  );
};

export default ListingPage;
