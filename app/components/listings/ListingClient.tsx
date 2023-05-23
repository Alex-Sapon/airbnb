'use client';

import { Reservation } from '@prisma/client';

import {
  ListingPageWrapper,
  Title,
  Subtitle,
} from '@/app/components/listings/styles';
import { SafeListing, SafeUser } from '@/app/types';

type ListingPageClientProps = {
  reservation?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser: SafeUser | null;
};

export const ListingClient = ({
  reservation,
  listing,
  currentUser,
}: ListingPageClientProps) => {
  return (
    <ListingPageWrapper>
      <Title>{listing.title}</Title>
      <Subtitle>{listing.description}</Subtitle>
    </ListingPageWrapper>
  );
};
