import styled from 'styled-components';

export const CategoryInputWrapper = styled.li<{ selected: boolean }>`
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease;
  border-radius: 7px;
  border: 1px solid
    ${({ theme, selected }) => {
      return selected ? theme.color.secondary : theme.color.inputBorder;
    }};
`;

export const Label = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;
