'use client';

import { IconType } from 'react-icons';

import {
  ListingCategoryWrapper,
  CategoryBlock,
  Subtitle,
  Title,
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
      <Icon size={40} />
      <CategoryBlock>
        <Title>{label}</Title>
        <Subtitle>{description}</Subtitle>
      </CategoryBlock>
    </ListingCategoryWrapper>
  );
};
