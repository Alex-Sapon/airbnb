'use client';

import { useMemo } from 'react';

import { differenceInDays } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { BiSearch } from 'react-icons/bi';

import { useCountry } from '@/app/hooks';
import { useSearchModal } from '@/app/hooks/useSearchModal';

import { SearchContainer, SearchWrapper, Text } from './styles';

export const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountry();

  const endDate = params?.get('endDate');
  const startDate = params?.get('startDate');
  const guestCount = params?.get('guestCount');
  const locationValue = params?.get('locationValue');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue)?.label;
    }

    return 'Anywhere';
  }, [locationValue, getByValue]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return 'Add Guests';
  }, [guestCount]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return 'Any Week';
  }, [startDate, endDate]);

  return (
    <SearchContainer onClick={searchModal.onOpen}>
      <Text>{locationLabel}</Text>
      <Text>{durationLabel}</Text>
      <Text>{guestLabel}</Text>
      <SearchWrapper>
        <BiSearch />
      </SearchWrapper>
    </SearchContainer>
  );
};
