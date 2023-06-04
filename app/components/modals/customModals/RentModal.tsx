'use client';

import { useMemo, useState } from 'react';

import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Counter } from '@/app/components/counter/Counter';
import { Heading } from '@/app/components/heading/Heading';
import { ImageUpload } from '@/app/components/imageUpload/ImageUpload';
import { CategoryInput, CountrySelect, Input } from '@/app/components/inputs';
import { CountrySelectValue } from '@/app/components/inputs/countrySelect/CountrySelect';
import { Modal } from '@/app/components/modals/modal/Modal';
import { categories } from '@/app/constants';
import { STEPS } from '@/app/enums/steps';
import { useRentModal } from '@/app/hooks';

import { CategoryList, Container, Divider } from './styles';

export const RentModal = () => {
  const router = useRouter();

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
  // @ts-ignore
  const imageSrc = watch('imageSrc');

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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      onNext();
      return;
    }

    setIsLoading(true);

    axios
      .post('/api/listings', data)
      .then(() => {
        toast.success('Listing created!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  let rentBody = (
    <Container>
      <Heading
        title="Which of these best describe your place?"
        subtitle="Pick a category"
      />
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
        <Heading
          title="Where is your place located?"
          subtitle="Help guest find you!"
        />
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
        <Heading
          title="Share some basic about your place"
          subtitle="What amenities do you have?"
        />
        <Divider />
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

  if (step === STEPS.IMAGES) {
    rentBody = (
      <Container>
        <Heading
          title="Add a photo of your place"
          subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
          value={imageSrc}
          onChange={(value) => setCustomValue('imageSrc', value)}
        />
      </Container>
    );
  }

  if (step === STEPS.DESCRIPTION) {
    rentBody = (
      <Container>
        <Heading
          title="How would you describe your place?"
          subtitle="Short and sweet works best!"
        />
        <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="description"
          label="Description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </Container>
    );
  }

  if (step === STEPS.PRICE) {
    rentBody = (
      <Container>
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </Container>
    );
  }

  return (
    <Modal
      title="Airbnb your home!"
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel={actionLabel()}
      secondaryActionLabel={secondaryActionLabel() as string}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={rentBody}
      disabled={isLoading}
    />
  );
};
