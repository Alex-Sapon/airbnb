import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 25px;
`;

export const Text = styled.div`
  display: none;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  transition: all 0.3s ease;
  border-radius: 500px;
  padding: 9px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme.color.menuBorder};
    box-shadow: ${(props) => props.theme.shadow.menu};
  }

  @media (${(props) => props.theme.device.tablet}) {
    display: block;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 500px;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.color.menuBorder};

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.menu};
  }

  @media (${(props) => props.theme.device.tablet}) {
    padding: 4px 7px;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: 50px;
  right: 0;
  width: 25vw;
  border-radius: 10px;
  overflow: hidden;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  box-shadow: ${(props) => props.theme.shadow.menu};
  background-color: ${(props) => props.theme.color.primary};

  &.menu-enter {
    opacity: 0;
  }

  &.menu-enter-active {
    opacity: 1;
    transition: all 300ms;
  }

  &.menu-exit {
    opacity: 1;
  }

  &.menu-exit-active {
    opacity: 0;
    transition: all 300ms;
  }
`;

export const MenuItem = styled.li`
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${(props) => props.theme.fontWeight.bold};

  &:hover {
    background-color: ${(props) => props.theme.color.menuText};
  }
`;

export const Divider = styled.li`
  height: 1px;
  background-color: ${(props) => props.theme.color.menuBorder};
`;
