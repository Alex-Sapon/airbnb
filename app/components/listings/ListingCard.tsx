'use client';

import { MouseEvent } from 'react';

import { Reservation } from '@prisma/client';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components/button/Button';
import { HeartButton } from '@/app/components/heartButton/HeartButton';
import { useCountry } from '@/app/hooks';
import { SafeListing, SafeUser } from '@/app/types';
import { formatCurrency } from '@/app/utilities/formatCurrency';

import {
  ListingCardWrapper,
  ImageWrapper,
  ImageStyled,
  Price,
  Title,
  Subtitle,
  Night,
} from './styles';

type ListingCardProps = {
  data: SafeListing;
  reservation?: Reservation;
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

    if (disabled) return;

    onAction?.(data.id);
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

  const handleDetailListing = () => router.push(`/listings/${data.id}`);

  return (
    <ListingCardWrapper onClick={handleDetailListing}>
      <ImageWrapper>
        <ImageStyled src={data.imageSrc} />
        <HeartButton listingId={data.id} currentUser={currentUser} />
      </ImageWrapper>
      <Title>
        {location?.region}, {location?.label}
      </Title>
      <Subtitle>{reservationDate() || data.category}</Subtitle>
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
