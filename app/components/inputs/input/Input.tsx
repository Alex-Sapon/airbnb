'use client';

import { ChangeEvent, useState } from 'react';

import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

import {
  InputWrapper,
  InputElement,
  Label,
  Icon,
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
  const [value, setValue] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(!!event.currentTarget.value);
  };

  return (
    <InputWrapper>
      {formatPrice && <Icon errors={errors[id]} />}
      <InputElement
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        formatPrice={formatPrice}
        errors={errors[id]}
        onChange={handleChange}
      />
      <Label errors={errors[id]} value={value}>
        {label}
      </Label>
    </InputWrapper>
  );
};
