import { getCurrentUser, getListings } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { PropertiesClient } from '@/app/components/properties/PropertiesClient';
import { SafeUser } from '@/app/types';

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser?.id });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you havent reserved any trips."
      />
    );
  }

  return (
    <PropertiesClient
      listings={listings}
      currentUser={currentUser as SafeUser}
    />
  );
};

export default PropertiesPage;
