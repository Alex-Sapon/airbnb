'use client';

import { useMemo, useState } from 'react';

import { formatISO } from 'date-fns';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { Range } from 'react-date-range';

import { Calendar } from '@/app/components/calendar/Calendar';
import { Counter } from '@/app/components/counter/Counter';
import { Heading } from '@/app/components/heading/Heading';
import {
  CountrySelect,
  CountrySelectValue,
} from '@/app/components/inputs/countrySelect/CountrySelect';
import { Modal } from '@/app/components/modals/modal/Modal';
import { SearchSteps } from '@/app/enums/steps';
import { useSearchModal } from '@/app/hooks/useSearchModal';

import { Container, Divider } from './styles';

export const SearchModal = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const router = useRouter();

  const [step, setStep] = useState(SearchSteps.LOCATION);
  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const Map = useMemo(() => {
    return dynamic(() => import('@/app/components/map/Map'), { ssr: false });
  }, [location]);

  const onNext = () => {
    if (step !== SearchSteps.INFO) {
      return setStep(step + 1);
    }
  };

  const onBack = () => {
    if (step !== SearchSteps.LOCATION) {
      return setStep(step - 1);
    }
  };

  const onSubmit = async () => {
    if (step !== SearchSteps.INFO) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = queryString.stringifyUrl(
      { url: '/', query: updatedQuery },
      { skipNull: true }
    );

    setStep(SearchSteps.LOCATION);
    searchModal.onClose();
    router.push(url);
  };

  const actionLabel = useMemo(() => {
    if (step === SearchSteps.INFO) {
      return 'Search';
    }

    return 'Next';
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === SearchSteps.LOCATION) {
      return undefined;
    }

    return 'Back';
  }, [step]);

  let bodyContent = (
    <Container>
      <Heading
        title="Where do you wanna go?"
        subtitle="Find the perfect location!"
      />
      <CountrySelect
        value={location as CountrySelectValue}
        onChange={(value) => setLocation(value)}
      />
      <Divider />
      <Map center={location?.latlng} />
    </Container>
  );

  if (step === SearchSteps.DATE) {
    bodyContent = (
      <Container>
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          value={dateRange}
          onChange={(value) => setDateRange(value.selection)}
        />
      </Container>
    );
  }

  if (step === SearchSteps.INFO) {
    bodyContent = (
      <Container>
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Divider />
        <Counter
          title="Guests"
          subtitle="How many guests are coming?"
          value={guestCount}
          onChange={(value) => setGuestCount(value)}
        />
        <Divider />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you need?"
          value={roomCount}
          onChange={(value) => setRoomCount(value)}
        />
        <Divider />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you need?"
          value={bathroomCount}
          onChange={(value) => setBathroomCount(value)}
        />
      </Container>
    );
  }

  return (
    <Modal
      title="Filters"
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      disabled={false}
      actionLabel={actionLabel}
      secondaryAction={step === SearchSteps.LOCATION ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
    />
  );
};
