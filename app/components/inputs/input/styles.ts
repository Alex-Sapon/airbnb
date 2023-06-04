import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const InputElement = styled.input<{
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}>`
  width: 100%;
  padding: 20px 10px 10px 10px;
  border: 2px solid
    ${({ theme, errors }) => {
      return errors ? theme.color.complementary : theme.color.inputBorder;
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
    border: 2px solid ${(props) => props.theme.secondary};

    & + label {
      transform: translateY(-120%);
      font-size: ${(props) => props.theme.fontSize.text_xs};
      color: ${(props) => props.theme.color.label};
    }
  }
`;

export const Label = styled.label<{
  value: boolean;
  errors: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}>`
  user-select: none;
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  left: 12px;
  font-size: ${({ theme, value }) => {
    return value ? theme.fontSize.text_xs : theme.fontSize.text_sm;
  }};
  color: ${({ theme, errors }) => {
    return errors ? theme.color.complementary : theme.color.label;
  }};
  transform: ${({ value }) => {
    return value ? 'translateY(-120%)' : 'translateY(-50%)';
  }};
`;
