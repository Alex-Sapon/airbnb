import Image from 'next/image';
import styled from 'styled-components';

export const ImageStyled = styled(Image).attrs(
  ({ avatar }: { avatar: string | null | undefined }) => ({
    src: avatar ?? '/images/placeholder.jpg',
    alt: 'Avatar',
    width: 30,
    height: 30,
  })
)<{ avatar: string | null | undefined }>`
  display: none;
  border-radius: 100%;
  background-image: url(${({ avatar, src }) => avatar || src});
  background: center / contain url(${({ avatar, src }) => avatar || src})
    no-repeat;

  @media (${(props) => props.theme.device.tablet}) {
    display: block;
  }
`;
