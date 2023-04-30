'use client';

import { useCountry } from '@/app/hooks/useCountry';

import { CustomSelect } from './styles';

export type CountrySelectValue = {
  value: string;
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

  const handleChange = (country: CountrySelectValue) => {
    onChange(country);
  };

  return (
    <CustomSelect
      placeholder="Anywhere"
      isClearable
      options={getAll()}
      value={value}
      onChange={handleChange}
    />
  );
};
