'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { CategoriesBox } from '@/app/components/categories/CategoriesBox';
import { Container } from '@/app/components/container/Container';
import { categories } from '@/app/constants';

import { CategoriesWrapper } from './styles';

export const Categories = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params?.get('category');
  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <CategoriesWrapper>
        {categories.map(({ label, icon }) => (
          <CategoriesBox
            key={label}
            label={label}
            icon={icon}
            selected={category === label}
          />
        ))}
      </CategoriesWrapper>
    </Container>
  );
};
