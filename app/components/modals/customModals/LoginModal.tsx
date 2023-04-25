'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/app/components/button/Button';
import { Input } from '@/app/components/inputs';
import { Modal } from '@/app/components/modals/modal/Modal';
import { useLoginModal, useRegisterModal } from '@/app/hooks';

import {
  Container,
  Divider,
  Heading,
  Login,
  Subtitle,
  Text,
  Title,
} from './styles';

export const LoginModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((response: SignInResponse | undefined) => {
      setIsLoading(false);

      if (response?.ok) {
        toast.success('Logged in!');
        router.refresh();
        loginModal.onClose();
      }

      if (response?.error) {
        toast.error(response.error);
      }
    });
  };

  const onToggle = () => {
    registerModal.onOpen();
    loginModal.onClose();
  };

  const loginBody = (
    <Container>
      <Heading>
        <Title>Welcome back</Title>
        <Subtitle>Login to your account!</Subtitle>
      </Heading>
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

  const loginFooter = (
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
        First time using Airbnb?
        <Login onClick={onToggle}>Create an account</Login>
      </Text>
    </Container>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Login"
      actionLabel="Continue"
      disabled={isLoading}
      body={loginBody}
      footer={loginFooter}
    />
  );
};
