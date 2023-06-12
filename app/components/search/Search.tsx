'use client';

import { BiSearch } from 'react-icons/bi';

import { useSearchModal } from '@/app/hooks/useSearchModal';

import { SearchContainer, SearchWrapper, Text } from './styles';

export const Search = () => {
  const searchModal = useSearchModal();

  return (
    <SearchContainer onClick={searchModal.onOpen}>
      <Text>Anywhere</Text>
      <Text>Any Week</Text>
      <Text>Add Guests</Text>
      <SearchWrapper>
        <BiSearch />
      </SearchWrapper>
    </SearchContainer>
  );
};
