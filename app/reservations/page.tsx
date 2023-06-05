import { getCurrentUser, getReservations } from '@/app/actions';
import { EmptyState } from '@/app/components/emptyState/EmptyState';
import { ReservationsClient } from '@/app/components/reservations/ReservationsClient';
import { SafeUser } from '@/app/types';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser?.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks you have no reservations on your properties"
      />
    );
  }

  return (
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser as SafeUser}
    />
  );
};

export default ReservationsPage;
