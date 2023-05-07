'use client';

import { ChangeEvent, useState } from 'react';

import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

import { InputWrapper, InputElement, Label } from './styles';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
};

export const Input = ({
  id,
  label,
  type = 'text',
  disabled,
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
      <InputElement
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        errors={errors[id]}
        onChange={handleChange}
      />
      <Label errors={errors[id]} value={value}>
        {label}
      </Label>
    </InputWrapper>
  );
};
