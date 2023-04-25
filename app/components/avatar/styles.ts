import Image from 'next/image';
import styled from 'styled-components';

export const ImageStyled = styled(Image).attrs((props) => ({
  src: props.avatar ?? '/images/placeholder.jpg',
  alt: 'Avatar',
  width: 30,
  height: 30,
}))`
  display: none;
  border-radius: 100%;
  background-image: url(${({ avatar, src }) => avatar || src});
  background: center / contain url(${({ avatar, src }) => avatar || src})
    no-repeat;

  @media (${(props) => props.theme.device.tablet}) {
    display: block;
  }
`;
