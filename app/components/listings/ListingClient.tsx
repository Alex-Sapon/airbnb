'use client';

import { Reservation } from '@prisma/client';

import { ListingHead } from '@/app/components/listings/ListingHead';
import { ListingInfo } from '@/app/components/listings/ListingInfo';
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
  const {
    id,
    title,
    locationValue,
    imageSrc,
    roomCount,
    guestCount,
    bathroomCount,
    description,
  } = listing;

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
      <ListingInfo
        user={currentUser as SafeUser}
        guestCount={guestCount}
        roomCount={roomCount}
        bathroomsCount={bathroomCount}
        description={description}
        category={category}
        locationValue={locationValue}
      />
    </ListingPageWrapper>
  );
};
