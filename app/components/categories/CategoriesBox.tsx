'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import { IconType } from 'react-icons';

import { CategoriesBoxWrapper, Label } from './styles';

type CategoriesBoxProps = {
  label: string;
  icon: IconType;
  selected: boolean;
};

export const CategoriesBox = ({
  label,
  icon: Icon,
  selected,
}: CategoriesBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = () => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updateQuery: { category?: string } = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updateQuery.category;
    }

    const url = queryString.stringifyUrl(
      { url: '/', query: updateQuery },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <CategoriesBoxWrapper selected={selected} onClick={handleClick}>
      <Icon size={26} />
      <Label>{label}</Label>
    </CategoriesBoxWrapper>
  );
};
