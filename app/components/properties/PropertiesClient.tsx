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
import { SafeListing, SafeUser } from '@/app/types';

type PropertiesClientProps = {
  listings: SafeListing[];
  currentUser: SafeUser | null;
};

export const PropertiesClient = ({
  listings,
  currentUser,
}: PropertiesClientProps) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onDelete = (id: string) => {
    setDeletingId(id);

    axios
      .delete(`/api/listings/${id}`)
      .then(() => {
        toast.success('Listing delete');
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
        <Heading title="Properties" subtitle="List of your properties" />
        <CardList>
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
              disabled={listing.id === deletingId}
              onAction={onDelete}
              actionId={listing.id}
              actionLabel="Delete property"
            />
          ))}
        </CardList>
      </ClientWrapper>
    </Container>
  );
};
