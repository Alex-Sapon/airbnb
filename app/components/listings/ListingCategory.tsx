'use client';

import { IconType } from 'react-icons';

import {
  ListingCategoryWrapper,
  CategoryBlock,
  CategoryLabel,
  CategoryDesc,
} from './styles';

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
      <Icon size={40} style={{ color: '737373ff' }} />
      <CategoryBlock>
        <CategoryLabel>{label}</CategoryLabel>
        <CategoryDesc>{description}</CategoryDesc>
      </CategoryBlock>
    </ListingCategoryWrapper>
  );
};
