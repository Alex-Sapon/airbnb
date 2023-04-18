import { BiDollar } from 'react-icons/bi';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 20px 10px 10px ${({ formatPrice }) => (formatPrice ? 20 : 10)}px;
  border: 2px solid
    ${({ theme, errors }) => {
      return errors
        ? theme.color.inputBorderError
        : theme.color.inputBorderPrimary;
    }};
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  border-radius: 4px;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.inputBorderSecondary};

    & + label {
      transform: translateY(-120%);
      font-size: ${(props) => props.theme.fontSize.text_xs};
      color: ${(props) => props.theme.color.labelPrimary};
    }
  }
`;

export const Label = styled.label`
  user-select: none;
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-20%);
  font-size: ${(props) => props.theme.fontSize.text_sm};
  color: ${({ theme, errors }) => {
    return errors ? theme.color.labelError : theme.color.labelPrimary;
  }};
`;

export const Icon = styled(BiDollar).attrs({
  size: 24,
})`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: ${({ theme, errors }) => {
    return errors ? theme.color.labelError : theme.color.labelPrimary;
  }};
`;
