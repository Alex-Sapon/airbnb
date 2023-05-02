import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
} from 'react-select';
import styled from 'styled-components';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided: CSSObjectWithLabel) => ({
      ...provided,
      padding: '5px',
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>
    ) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#ffe4e6' : 'white',
    }),
  },
})``;

export const CustomOption = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.color.secondary};
`;

export const Label = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Region = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.light};
`;
