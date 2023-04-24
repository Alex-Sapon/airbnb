import Image from 'next/image';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  padding: 15px 0;
  width: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.color.primary};
  box-shadow: ${(props) => props.theme.shadow.header};
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

export const Logo = styled(Image).attrs({
  src: '/images/logo.png',
  alt: 'Logo',
  width: 70,
  height: 70,
  priority: true,
})`
  width: auto;
  height: auto;
  display: none;
  cursor: pointer;

  @media (${(props) => props.theme.device.mobileL}) {
    display: block;
  }
`;
