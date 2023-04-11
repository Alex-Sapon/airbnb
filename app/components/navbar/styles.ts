import Image from 'next/image';
import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  padding: 15px 0;
  width: 100%;
  z-index: 10;
  background-color: ${(props) => props.theme.color.header};
  box-shadow: ${(props) => props.theme.shadow.header};
`;

export const Logo = styled(Image).attrs({
  src: '/images/logo.png',
  alt: 'Logo',
  width: 100,
  height: 30,
  priority: true,
})`
  display: none;
  cursor: pointer;
  object-fit: contain;
  object-position: left center;
  max-width: fit-content;

  @media (${(props) => props.theme.device.mobileL}) {
    display: block;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;