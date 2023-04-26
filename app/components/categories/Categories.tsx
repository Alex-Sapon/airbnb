'use client';

import { CategoriesBox } from '@/app/components/categories/CategoriesBox';
import { Container } from '@/app/components/container/Container';
import { categories } from '@/app/constants/categories';

import { CategoriesWrapper } from './styles';

export const Categories = () => {
  return (
    <Container>
      <CategoriesWrapper>
        {categories.map(({ label, icon }) => (
          <CategoriesBox
            key={label}
            label={label}
            icon={icon}
            selected={false}
          />
        ))}
      </CategoriesWrapper>
    </Container>
  );
};
