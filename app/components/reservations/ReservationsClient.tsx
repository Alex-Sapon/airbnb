'use client';

import { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { Container } from '@/app/components/container/Container';
import { Heading } from '@/app/components/heading/Heading';
import { ListingCard } from '@/app/components/listings/ListingCard';
import { CardList } from '@/app/components/listings/styles';
import { ClientWrapper } from '@/app/styles/clientWrapper';
import { SafeReservation, SafeUser } from '@/app/types';

type ReservationsClientProps = {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
};

export const ReservationsClient = ({
  reservations,
  currentUser,
}: ReservationsClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = (id: string) => {
    setDeletingId(id);

    axios
      .delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success('Reservation canceled');
        router.refresh();
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => {
        setDeletingId('');
      });
  };
  return (
    <Container>
      <ClientWrapper>
        <Heading title="Reservations" subtitle="Bookings on your properties" />
        <CardList>
          {reservations.map((reservation) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              currentUser={currentUser}
              reservation={reservation}
              onAction={onCancel}
              actionId={reservation.id}
              actionLabel="Cancel guest reservation"
              disabled={reservation.id === deletingId}
            />
          ))}
        </CardList>
      </ClientWrapper>
    </Container>
  );
};
