'use client';

import { useMemo, useState } from 'react';

import dynamic from 'next/dynamic';
import { FieldValues, useForm } from 'react-hook-form';

import { Counter } from '@/app/components/counter/Counter';
import { CategoryInput, CountrySelect } from '@/app/components/inputs';
import { CountrySelectValue } from '@/app/components/inputs/countrySelect/CountrySelect';
import { Modal } from '@/app/components/modals/modal/Modal';
import { categories } from '@/app/constants/categories';
import { STEPS } from '@/app/enums/steps';
import { useRentModal } from '@/app/hooks';

import {
  CategoryList,
  Container,
  Divider,
  Heading,
  Subtitle,
  Title,
} from './styles';

export const RentModal = () => {
  const [step, setStep] = useState(STEPS.CATEGORY);

  const [isLoading, setIsLoading] = useState(false);

  const rentModal = useRentModal();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      description: '',
    },
  });

  // @ts-ignore
  const category = watch('category');
  // @ts-ignore
  const location = watch('location');
  // @ts-ignore
  const guestCount = watch('guestCount');
  // @ts-ignore
  const roomCount = watch('roomCount');
  // @ts-ignore
  const bathroomCount = watch('bathroomCount');

  const Map = useMemo(() => {
    return dynamic(() => import('@/app/components/map/Map'), { ssr: false });
  }, [location]);

  const setCustomValue = (
    id: string,
    value: CountrySelectValue | string | number
  ) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const actionLabel = () => {
    if (step === STEPS.PRICE) {
      return 'Create';
    }

    return 'Next';
  };

  const secondaryActionLabel = () => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return 'Back';
  };

  let rentBody = (
    <Container>
      <Heading>
        <Title>Which of these best describe your place?</Title>
        <Subtitle>Pick a category</Subtitle>
      </Heading>
      <CategoryList>
        {categories.map(({ label, icon }) => (
          <CategoryInput
            key={label}
            onClick={(value) => setCustomValue('category', value)}
            selected={label === category}
            label={label}
            icon={icon}
          />
        ))}
      </CategoryList>
    </Container>
  );

  if (step === STEPS.LOCATION) {
    rentBody = (
      <Container>
        <Heading>
          <Title>Where is your place located?</Title>
          <Subtitle>Help guest find you!</Subtitle>
        </Heading>
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue('location', value)}
        />
        <Map center={location?.latlng} />
      </Container>
    );
  }

  if (step === STEPS.INFO) {
    rentBody = (
      <Container>
        <Heading>
          <Title>Share some basic about your place</Title>
          <Subtitle>What amenities do you have?</Subtitle>
        </Heading>
        <Counter
          title="Guests"
          subtitle="How many guests do you allow?"
          value={guestCount}
          onChange={(value) => setCustomValue('guestCount', value)}
        />
        <Divider />
        <Counter
          title="Rooms"
          subtitle="How many rooms do you have?"
          value={roomCount}
          onChange={(value) => setCustomValue('roomCount', value)}
        />
        <Divider />
        <Counter
          title="Bathrooms"
          subtitle="How many bathrooms do you have?"
          value={bathroomCount}
          onChange={(value) => setCustomValue('bathroomCount', value)}
        />
      </Container>
    );
  }

  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel()}
      secondaryActionLabel={secondaryActionLabel() as string}
      secondaryAction={step === STEPS.CATEGORY ? null : onBack}
      body={rentBody}
      disabled={isLoading}
    />
  );
};
