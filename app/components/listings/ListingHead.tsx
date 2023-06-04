'use client';

import { Heading } from '@/app/components/heading/Heading';
import { HeartButton } from '@/app/components/heartButton/HeartButton';
import { useCountry } from '@/app/hooks';
import { SafeUser } from '@/app/types';

import { ListingHeadWrapper, ImageHeadWrapper, ImageHead } from './styles';

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
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <ImageHeadWrapper>
        <ImageHead src={imageSrc} />
        <HeartButton listingId={id} currentUser={currentUser} />
      </ImageHeadWrapper>
    </ListingHeadWrapper>
  );
};
