'use client';

import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';

import { Avatar } from '@/app/components/avatar/Avatar';
import { ListingCategory } from '@/app/components/listings/ListingCategory';
import { useCountry } from '@/app/hooks';
import { Divider } from '@/app/styles/divider';
import { SafeUser } from '@/app/types';

import {
  LeftSide,
  ListingInfoWrapper,
  HostedName,
  Hosted,
  Subtitle,
  HostedDetails,
} from './styles';

type ListingInfoProps = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomsCount: number;
  category: { icon: IconType; label: string; description: string } | undefined;
  locationValue: string;
};

const Map = dynamic(() => import('@/app/components/map/Map'));

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
      <LeftSide>
        <Hosted>
          <HostedName>
            Hosted by {user?.name || '...'}
            <Avatar image={user?.image} />
          </HostedName>
          <HostedDetails>
            <Subtitle>{guestCount} guests</Subtitle>
            <Subtitle>{roomCount} rooms</Subtitle>
            <Subtitle>{bathroomsCount} bathrooms</Subtitle>
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
        <div>{description}</div>
        <Divider />
        <Map center={coordinates} />
      </LeftSide>
    </ListingInfoWrapper>
  );
};
