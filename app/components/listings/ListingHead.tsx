'use client';

import { HeartButton } from '@/app/components/heartButton/HeartButton';
import { useCountry } from '@/app/hooks';
import { SafeUser } from '@/app/types';

import {
  ListingHeadWrapper,
  ImageHeadWrapper,
  Subtitle,
  Title,
  ImageHead,
} from './styles';

type ListingHeadProps = {
  id: string;
  title: string;
  locationValue: string;
  imageSrc: string;
  currentUser: SafeUser | null;
};

export const ListingHead = ({
  id,
  title,
  locationValue,
  imageSrc,
  currentUser,
}: ListingHeadProps) => {
  const { getByValue } = useCountry();

  const location = getByValue(locationValue);

  return (
    <ListingHeadWrapper>
      <Title>{title}</Title>
      <Subtitle>{`${location?.region}, ${location?.label}`}</Subtitle>
      <ImageHeadWrapper>
        <ImageHead src={imageSrc} />
        <HeartButton listingId={id} currentUser={currentUser} />
      </ImageHeadWrapper>
    </ListingHeadWrapper>
  );
};
