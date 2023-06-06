import { getCurrentUser } from '@/app/actions';
import { getFavoriteListings } from '@/app/actions/getFavoritesListings';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { FavoritesClient } from '@/app/components/favorites/FavoritesClient';

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
    <>
      {/* @ts-expect-error Server Component */}
      <FavoritesClient currentUser={currentUser} listings={favorites} />
    </>
  );
};

export default ListingPage;
