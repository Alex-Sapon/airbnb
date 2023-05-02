'use client';

import { FlagIcon } from 'react-flag-kit';

import { useCountry } from '@/app/hooks';

import { CustomSelect, CustomOption, Label, Region } from './styles';

export type CountrySelectValue = {
  value: string;
  label: string;
  flag: string;
  latlng: string[];
  region: string;
};

type CountrySelectProps = {
  value: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

export const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const { getAll } = useCountry();

  const handleChange = (countryValue: CountrySelectValue) => {
    onChange(countryValue);
  };

  const formattedOptionLabel = (option) => (
    <CustomOption>
      <FlagIcon code={option.value} size={14} />
      <Label>{option.label},</Label>
      <Region>{option.region}</Region>
    </CustomOption>
  );

  return (
    <CustomSelect
      placeholder="Anywhere"
      isClearable
      options={getAll()}
      value={value}
      onChange={handleChange}
      formatOptionLabel={formattedOptionLabel}
    />
  );
};
