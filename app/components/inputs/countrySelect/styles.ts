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
    }),
    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<unknown, boolean, GroupBase<unknown>>
    ) => ({
      ...provided,
    }),
  },
})``;
