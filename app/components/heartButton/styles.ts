import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

export const HeartButtonWrapper = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeartOutline = styled(AiOutlineHeart).attrs({
  size: 28,
})``;

export const HeartFill = styled(AiFillHeart).attrs({
  size: 24,
})<{ hasFavorite: boolean }>`
  color: ${({ theme, hasFavorite }) => (hasFavorite ? 'red' : 'grey')};
`;
