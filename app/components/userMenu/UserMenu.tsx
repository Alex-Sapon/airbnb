import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import { Avatar } from '@/app/components/avatar/Avatar';
import {
  UserMenuContainer,
  Text,
  AvatarWrapper,
  MenuList,
  MenuItem,
} from '@/app/components/userMenu/styles';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <UserMenuContainer>
      <Text>Airbnb your home</Text>
      <AvatarWrapper onClick={toggleIsOpen}>
        <AiOutlineMenu />
        <Avatar />
      </AvatarWrapper>
      {isOpen && (
        <MenuList>
          <MenuItem>Login</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Login</MenuItem>
        </MenuList>
      )}
    </UserMenuContainer>
  );
};
