'use client';

import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

import {
  InputWrapper,
  InputStyled,
} from '@/app/components/inputs/input/styles';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

export const Input = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: InputProps) => {
  const formRegister = register(id, { required });

  return (
    <InputWrapper>
      <InputStyled
        id={id}
        disabled={disabled}
        required={formRegister.required}
        placeholder=" "
        type={type}
      />
    </InputWrapper>
  );
};
