'use client';

import { FlagIcon, FlagIconCode } from 'react-flag-kit';

import { useCountry } from '@/app/hooks';

import { CustomSelect, CustomOption, Label, Region } from './styles';

export type CountrySelectValue = {
  value: FlagIconCode;
  label: string;
  flag: string;
  latlng: number[];
  region: string;
};

type CountrySelectProps = {
  value: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
};

export const CountrySelect = ({ value, onChange }: CountrySelectProps) => {
  const { getAll } = useCountry();

  const handleChange = (countryValue: unknown) => {
    onChange(countryValue as CountrySelectValue);
  };

  const formattedOptionLabel = (option: unknown) => (
    <CustomOption>
      <FlagIcon code={(option as CountrySelectValue).value} size={14} />
      <Label>{(option as CountrySelectValue).label},</Label>
      <Region>{(option as CountrySelectValue).region}</Region>
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
