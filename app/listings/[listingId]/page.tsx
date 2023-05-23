import { getCurrentUser } from '@/app/actions';
import { getListingById } from '@/app/actions/getListingById';
import { Container } from '@/app/components/container/Container';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { ListingClient } from '@/app/components/listings/ListingClient';
import { SafeUser } from '@/app/types';

type ListingPageProps = {
  listingId: string;
};

const ListingPage = async ({ params }: { params: ListingPageProps }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <ListingClient listing={listing} currentUser={currentUser as SafeUser} />
    </Container>
  );
};

export default ListingPage;
