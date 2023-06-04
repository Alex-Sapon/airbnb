'use client';

import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';

import { Avatar } from '@/app/components/avatar/Avatar';
import { ListingCategory } from '@/app/components/listings/ListingCategory';
import { useCountry } from '@/app/hooks';
import { Divider } from '@/app/styles/divider';
import { SafeUser } from '@/app/types';

import {
  Description,
  Hosted,
  HostedDetails,
  HostedName,
  ListingInfoWrapper,
  TextLight,
} from './styles';

const Map = dynamic(() => import('@/app/components/map/Map'));

type ListingInfoProps = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomsCount: number;
  category: { icon: IconType; label: string; description: string } | undefined;
  locationValue: string;
};

export const ListingInfo = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomsCount,
  category,
  locationValue,
}: ListingInfoProps) => {
  const { getByValue } = useCountry();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <ListingInfoWrapper>
      <Hosted>
        <HostedName>
          Hosted by {user?.name || '...'}
          <Avatar image={user?.image} />
        </HostedName>
        <HostedDetails>
          <TextLight>{guestCount} guests</TextLight>
          <TextLight>{roomCount} rooms</TextLight>
          <TextLight>{bathroomsCount} bathrooms</TextLight>
        </HostedDetails>
      </Hosted>
      <Divider />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <Divider />
      <Description>{description}</Description>
      <Divider />
      <Map center={coordinates} />
    </ListingInfoWrapper>
  );
};
