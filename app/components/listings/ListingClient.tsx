'use client';

import { Reservation } from '@prisma/client';

import { ListingHead } from '@/app/components/listings/ListingHead';
import { categories } from '@/app/constants';
import { SafeListing, SafeUser } from '@/app/types';

import { ListingPageWrapper } from './styles';

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
  const { id, title, locationValue, imageSrc } = listing;

  const category = categories.find(({ label }) => label === listing.category);

  return (
    <ListingPageWrapper>
      <ListingHead
        id={id}
        title={title}
        locationValue={locationValue}
        imageSrc={imageSrc}
        currentUser={currentUser}
      />
    </ListingPageWrapper>
  );
};
