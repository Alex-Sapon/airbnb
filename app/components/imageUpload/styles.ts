import Image from 'next/image';
import styled from 'styled-components';

export const ImageUploadWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px dashed ${(props) => props.theme.color.tertiary};
  color: rgb(82 82 82);
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  height: 250px;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.div``;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-size: ${(props) => props.theme.fontSize.text_lg};
`;

export const ImageStyled = styled(Image).attrs({
  alt: 'House',
  fill: true,
})`
  object-fit: cover;
`;
