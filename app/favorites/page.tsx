import { getCurrentUser, getFavoriteListings } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { FavoritesClient } from '@/app/components/favorites/FavoritesClient';
import { SafeUser } from '@/app/types';

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const favorites = await getFavoriteListings();

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }

  return (
    <FavoritesClient
      listings={favorites}
      currentUser={currentUser as SafeUser}
    />
  );
};

export default ListingPage;
