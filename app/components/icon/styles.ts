import styled from 'styled-components';

export const IconStyled = styled.span<{ size: string | number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
