import styled from 'styled-components';

type IconStyledProps = {
  size: string | number;
};

export const IconStyled = styled.span<IconStyledProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
