'use client';

import { useRef, useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { CSSTransition } from 'react-transition-group';

import { Avatar } from '@/app/components/avatar/Avatar';
import {
  UserMenuContainer,
  Text,
  AvatarWrapper,
  MenuList,
  MenuItem,
} from '@/app/components/userMenu/styles';
import { useRegisterModal } from '@/app/hooks/useRegisterModal';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { onOpen } = useRegisterModal();

  const nodeRef = useRef(null);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <UserMenuContainer>
      <Text>Airbnb your home</Text>
      <AvatarWrapper onClick={toggleIsOpen}>
        <AiOutlineMenu />
        <Avatar />
      </AvatarWrapper>
      <CSSTransition
        nodeRef={nodeRef}
        timeout={300}
        in={isOpen}
        unmountOnExit
        classNames="menu"
      >
        <MenuList ref={nodeRef}>
          <MenuItem>Login</MenuItem>
          <MenuItem onClick={onOpen}>Sign up</MenuItem>
        </MenuList>
      </CSSTransition>
    </UserMenuContainer>
  );
};
