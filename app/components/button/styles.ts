import styled from 'styled-components';

type ButtonStyledProps = {
  outline?: boolean;
  small: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  position: relative;
  border-radius: 6px;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  padding: ${({ small }) => (small ? '4px' : '11px')};
  background-color: ${(props) => {
    return props.outline ? '#fff' : 'rgb(244 63 94)';
  }};
  color: ${(props) => {
    return props.outline ? '#000' : '#fff';
  }};
  font-size: ${({ theme, small }) => {
    return small ? theme.fontSize.text_sm : theme.fontSize.text_base;
  }};
  font-weight: ${({ theme, small }) => {
    return small ? theme.fontWeight.light : theme.fontWeight.semiBold;
  }};
  border: ${(props) => (props.small ? '1px' : '2px')} solid
    ${(props) => {
      return props.outline ? '#000' : 'rgb(244 63 94)';
    }};

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;
