import countries from 'world-countries';

const formattedCountry = countries.map((country) => ({
  value: country.cca2,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

export const useCountry = () => {
  const getAll = () => formattedCountry;

  const getByValue = (value: string) => {
    return formattedCountry.find((country) => country.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};
