import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

export const HeartButtonWrapper = styled.div`
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const HeartOutline = styled(AiOutlineHeart).attrs({
  size: 28,
})`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  color: ${(props) => props.theme.color.primary};
`;

export const HeartFill = styled(AiFillHeart).attrs({
  size: 24,
})<{ hasFavorite: boolean }>`
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
  color: ${({ theme, hasFavorite }) => {
    return hasFavorite ? theme.color.complementary : theme.color.tertiary;
  }};
`;
