'use client';

import { useRouter } from 'next/navigation';

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

  return (
    <NavbarContainer>
      <Container>
        <NavbarWrapper>
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </NavbarWrapper>
      </Container>
    </NavbarContainer>
  );
};
