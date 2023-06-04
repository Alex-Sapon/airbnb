'use client';

import { MouseEvent } from 'react';

import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/button/Button';
import { Heading } from '@/app/components/heading/Heading';
import { HeartButton } from '@/app/components/heartButton/HeartButton';
import { useCountry } from '@/app/hooks';
import { SafeListing, SafeReservation, SafeUser } from '@/app/types';
import { formatCurrency } from '@/app/utilities/formatCurrency';

import {
  ListingCardWrapper,
  ImageWrapper,
  ImageCard,
  Price,
  Night,
} from './styles';

type ListingCardProps = {
  data: SafeListing;
  reservation?: SafeReservation;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  onAction?: (id: string) => void;
  currentUser: SafeUser | null;
};

export const ListingCard = ({
  data,
  reservation,
  disabled,
  actionLabel,
  actionId,
  onAction,
  currentUser,
}: ListingCardProps) => {
  const router = useRouter();

  const { getByValue } = useCountry();

  const location = getByValue(data.locationValue);

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (disabled || !actionId) return;

    onAction?.(actionId);
  };

  const price = () => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  };

  const reservationDate = () => {
    if (!reservation) return null;

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  };

  const handleGoListing = () => router.push(`/listings/${data.id}`);

  return (
    <ListingCardWrapper onClick={handleGoListing}>
      <ImageWrapper>
        <ImageCard src={data.imageSrc} />
        <HeartButton listingId={data.id} currentUser={currentUser} />
      </ImageWrapper>
      <Heading
        title={`${location?.region}, ${location?.label}`}
        subtitle={reservationDate() || data.category}
      />
      <Price>
        {formatCurrency(price())}
        {!reservation && <Night>night</Night>}
      </Price>
      {onAction && actionLabel && (
        <Button
          small
          disabled={disabled}
          label={actionLabel}
          onClick={handleCancel}
        />
      )}
    </ListingCardWrapper>
  );
};
