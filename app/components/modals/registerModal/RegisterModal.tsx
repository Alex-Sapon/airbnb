'use client';

import { useState } from 'react';

import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillGitlab } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { Modal } from '@/app/components/modals/modal/Modal';
import { RegisterBody } from '@/app/components/modals/registerModal/RegisterBody';
import { useRegisterModal } from '@/app/hooks/useRegisterModal';

export const RegisterModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onClose } = useRegisterModal();

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
        onClose();
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Register"
      actionLabel="Continue"
      disabled={isLoading}
      body={RegisterBody}
    />
  );
};
