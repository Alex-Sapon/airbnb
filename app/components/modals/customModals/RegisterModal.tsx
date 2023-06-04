'use client';

import { useState } from 'react';

import axios from 'axios';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/app/components/button/Button';
import { Heading } from '@/app/components/heading/Heading';
import { Input } from '@/app/components/inputs';
import { Modal } from '@/app/components/modals/modal/Modal';
import { useLoginModal, useRegisterModal } from '@/app/hooks';

import { Container, Divider, Text, Login } from './styles';

export const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

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
        toast.success('You have successfully registered!');
        registerModal.onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = () => {
    registerModal.onClose();
    loginModal.onOpen();
  };

  const registerBody = (
    <Container>
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
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
        onClick={() => signIn('google')}
        icon={FcGoogle}
        size={22}
        outline
      />
      <Button
        label="Continue with Github"
        onClick={() => signIn('github')}
        icon={AiFillGithub}
        size={22}
        outline
      />
      <Text>
        Already have an account?
        <Login onClick={onToggle}>Login</Login>
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
