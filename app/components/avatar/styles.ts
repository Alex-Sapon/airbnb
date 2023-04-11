import Image from 'next/image';
import styled from 'styled-components';

export const ImageStyled = styled(Image).attrs({
  src: '/images/placeholder.jpg',
  alt: 'Avatar',
  width: 30,
  height: 30,
})`
  display: none;
  border-radius: 100%;

  @media (${(props) => props.theme.device.tablet}) {
    display: block;
  }
`;
