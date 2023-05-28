'use client';

import { useEffect, useMemo, useState } from 'react';

import { Reservation } from '@prisma/client';
import axios from 'axios';
import { differenceInDays, eachDayOfInterval } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Range } from 'react-date-range';
import { toast } from 'react-hot-toast';

import { ListingHead } from '@/app/components/listings/ListingHead';
import { ListingInfo } from '@/app/components/listings/ListingInfo';
import { ListingReservation } from '@/app/components/listings/ListingReservation';
import { categories } from '@/app/constants';
import { useLoginModal } from '@/app/hooks';
import { SafeListing, SafeUser } from '@/app/types';

import { ListingBody, ListingPageWrapper } from './styles';

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

type ListingPageClientProps = {
  reservations?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser: SafeUser | null;
};

export const ListingClient = ({
  reservations = [],
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
  const [isLoading, setIsLoading] = useState(false);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [totalPrice, setTotalPrice] = useState(listing.price);

  const router = useRouter();
  const loginModal = useLoginModal();

  const category = categories.find(({ label }) => label === listing.category);

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations?.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const onCreateReservation = () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    axios
      .post('/api/reservations', {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      })
      .then(() => {
        toast.success('Listing reserved!');
        setDateRange(initialDateRange);
        router.refresh();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChangeRange = (value: Range) => {
    setDateRange(value);
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange.startDate, dateRange.endDate, listing.price]);

  return (
    <ListingPageWrapper>
      <ListingHead
        id={id}
        title={title}
        locationValue={locationValue}
        imageSrc={imageSrc}
        currentUser={currentUser}
      />
      <ListingBody>
        <ListingInfo
          user={currentUser as SafeUser}
          guestCount={guestCount}
          roomCount={roomCount}
          bathroomsCount={bathroomCount}
          description={description}
          category={category}
          locationValue={locationValue}
        />
        <ListingReservation
          price={listing.price}
          totalPrice={totalPrice}
          dateRange={dateRange}
          disabledDates={disabledDates}
          disabled={isLoading}
          onChangeRange={handleChangeRange}
          onSubmit={onCreateReservation}
        />
      </ListingBody>
    </ListingPageWrapper>
  );
};
