import { getCurrentUser, getReservations } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { TripsClient } from '@/app/components/trips/TripsClient';
import { SafeReservation, SafeUser } from '@/app/types';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
    );
  }

  return (
    <TripsClient
      currentUser={currentUser as SafeUser}
      reservations={reservations as SafeReservation[]}
    />
  );
};

export default TripsPage;
