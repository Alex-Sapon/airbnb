'use client';

import { useState } from 'react';

import { FieldValues, useForm } from 'react-hook-form';

import { CategoryInput } from '@/app/components/inputs/categoryInput/CategoryInput';
import { CountrySelect } from '@/app/components/inputs/countrySelect/CountrySelect';
import { Modal } from '@/app/components/modals/modal/Modal';
import { categories } from '@/app/constants/categories';
import { STEPS } from '@/app/enums/steps';
import { useRentModal } from '@/app/hooks/useRentModal';

import { CategoryList, Container, Heading, Subtitle, Title } from './styles';

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

  const category = watch('category');

  const setCustomValue = (id: string, value: string) => {
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
        <CountrySelect />
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
