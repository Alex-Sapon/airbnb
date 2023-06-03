'use client';

import { useState } from 'react';

import { Container } from '@/app/components/container/Container';
import { ListingCard } from '@/app/components/listings/ListingCard';
import { SafeReservation, SafeUser } from '@/app/types';

import { TripsClientWrapper, TripsList } from './styles';

type TripsClientProps = {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
};

export const TripsClient = ({
  reservations,
  currentUser,
}: TripsClientProps) => {
  const [deletingId, setDeletingId] = useState('');

  const onCancel = (id: string) => {
    setDeletingId(id);
  };

  return (
    <Container>
      <TripsClientWrapper>
        <TripsList>
          {reservations.map((reservation) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              currentUser={currentUser}
              disabled={reservation.id === deletingId}
              actionId={reservation.id}
              actionLabel="Cancel reservation"
              onAction={onCancel}
            />
          ))}
        </TripsList>
      </TripsClientWrapper>
    </Container>
  );
};
