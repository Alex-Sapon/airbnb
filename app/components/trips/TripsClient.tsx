'use client';

import { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { Container } from '@/app/components/container/Container';
import { Heading } from '@/app/components/heading/Heading';
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

  const router = useRouter();

  const onCancel = (id: string) => {
    setDeletingId(id);

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success('Reservation cancelled');
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      })
      .finally(() => {
        setDeletingId('');
      });
  };

  return (
    <Container>
      <TripsClientWrapper>
        <Heading
          title="Trips"
          subtitle="Where you've been and where you've going"
        />
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
