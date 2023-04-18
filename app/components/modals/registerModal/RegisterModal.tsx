'use client';

import { useState } from 'react';

import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/app/components/button/Button';
import { Input } from '@/app/components/inputs';
import { Modal } from '@/app/components/modals/modal/Modal';
import {
  Container,
  Heading,
  Title,
  Subtitle,
  Divider,
  Text,
  Login,
} from '@/app/components/modals/registerModal/styles';
import { useRegisterModal } from '@/app/hooks/useRegisterModal';

export const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerModal = useRegisterModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Success!');
        registerModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerBody = (
    <Container>
      <Heading>
        <Title>Welcome to Airbnb</Title>
        <Subtitle>Create an account!</Subtitle>
      </Heading>
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </Container>
  );

  const registerFooter = (
    <Container>
      <Divider />
      <Button
        label="Continue with Google"
        onClick={() => {}}
        icon={FcGoogle}
        size={22}
        outline
      />
      <Button
        label="Continue with Github"
        onClick={() => {}}
        icon={AiFillGithub}
        size={22}
        outline
      />
      <Text>
        Already have an account?
        <Login onClick={registerModal.onClose}>Log in</Login>
      </Text>
    </Container>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Register"
      actionLabel="Continue"
      disabled={isLoading}
      body={registerBody}
      footer={registerFooter}
    />
  );
};
