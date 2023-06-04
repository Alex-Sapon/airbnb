'use client';

import { IconType } from 'react-icons';

import { Heading } from '@/app/components/heading/Heading';

import { CategoryBlock, ListingCategoryWrapper } from './styles';

type ListingCategoryProps = {
  icon: IconType;
  label: string;
  description: string;
};

export const ListingCategory = ({
  icon: Icon,
  label,
  description,
}: ListingCategoryProps) => {
  return (
    <ListingCategoryWrapper>
      <Icon size={40} />
      <CategoryBlock>
        <Heading title={label} subtitle={description} />
      </CategoryBlock>
    </ListingCategoryWrapper>
  );
};
