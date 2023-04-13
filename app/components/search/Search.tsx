'use client';

import { BiSearch } from 'react-icons/bi';

import {
  SearchContainer,
  SearchWrapper,
  Text,
} from '@/app/components/search/styles';

export const Search = () => {
  return (
    <SearchContainer>
      <Text>Anywhere</Text>
      <Text>Any Week</Text>
      <Text>Add Guests</Text>
      <SearchWrapper>
        <BiSearch />
      </SearchWrapper>
    </SearchContainer>
  );
};
