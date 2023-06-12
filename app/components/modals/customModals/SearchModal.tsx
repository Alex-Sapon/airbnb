'use client';

import { useMemo, useState } from 'react';

import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { Range } from 'react-date-range';

import { CountrySelectValue } from '@/app/components/inputs/countrySelect/CountrySelect';
import { Modal } from '@/app/components/modals/modal/Modal';
import { SearchSteps } from '@/app/enums/steps';
import { useSearchModal } from '@/app/hooks/useSearchModal';

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

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={searchModal.onOpen}
      disabled={false}
      actionLabel={actionLabel}
      secondaryAction={step === SearchSteps.LOCATION ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
      title="Filters"
    />
  );
};
