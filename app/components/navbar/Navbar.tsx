'use client';

import { useRouter } from 'next/navigation';

import { Categories } from '@/app/components/categories/Categories';
import { Container } from '@/app/components/container/Container';
import { Search } from '@/app/components/search/Search';
import { UserMenu } from '@/app/components/userMenu/UserMenu';
import { SafeUser } from '@/app/types';

import { Logo, NavbarContainer, NavbarWrapper } from './styles';

type NavbarProps = {
  currentUser: SafeUser | null;
};

export const Navbar = ({ currentUser }: NavbarProps) => {
  const router = useRouter();

  const handleGoHome = () => router.push('/');

  return (
    <>
      <NavbarContainer>
        <Container>
          <NavbarWrapper>
            <Logo onClick={handleGoHome} />
            <Search />
            <UserMenu currentUser={currentUser} />
          </NavbarWrapper>
        </Container>
      </NavbarContainer>
      <Categories />
    </>
  );
};
