'use client';

import { useRef, useState } from 'react';

import { signOut } from 'next-auth/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

import { Avatar } from '@/app/components/avatar/Avatar';
import { useLoginModal, useRegisterModal } from '@/app/hooks';
import { SafeUser } from '@/app/types';

import {
  AvatarWrapper,
  Divider,
  MenuItem,
  MenuList,
  Text,
  UserMenuContainer,
} from './styles';

type UserMenuProps = {
  currentUser: SafeUser | null;
};

export const UserMenu = ({ currentUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const nodeRef = useRef(null);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  const handleLogout = () => signOut();

  return (
    <UserMenuContainer>
      <Text>Airbnb your home</Text>
      <AvatarWrapper onClick={toggleIsOpen}>
        <AiOutlineMenu />
        <Avatar image={currentUser?.image} />
      </AvatarWrapper>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={300}
        in={isOpen}
        unmountOnExit
        classNames="menu"
      >
        <MenuList ref={nodeRef}>
          {currentUser ? (
            <>
              <MenuItem onClick={() => {}}>My trips</MenuItem>
              <MenuItem onClick={() => {}}>My favorites</MenuItem>
              <MenuItem onClick={() => {}}>My reservations</MenuItem>
              <MenuItem onClick={() => {}}>My properties</MenuItem>
              <MenuItem onClick={() => {}}>Airbnb my home</MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={loginModal.onOpen}>Login</MenuItem>
              <MenuItem onClick={registerModal.onOpen}>Sign up</MenuItem>
            </>
          )}
        </MenuList>
      </CSSTransition>
    </UserMenuContainer>
  );
};
