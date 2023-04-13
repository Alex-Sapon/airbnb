'use client';

import { useRouter } from 'next/navigation';

import { Container } from '@/app/components/container/Container';
import {
  Logo,
  NavbarContainer,
  NavbarWrapper,
} from '@/app/components/navbar/styles';
import { Search } from '@/app/components/search/Search';
import { UserMenu } from '@/app/components/userMenu/UserMenu';

export const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <Container>
        <NavbarWrapper>
          <Logo />
          <Search />
          <UserMenu />
        </NavbarWrapper>
      </Container>
    </NavbarContainer>
  );
};
