import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
  padding: 100px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.tertiary};
    border-radius: 20px;
  }
`;

export const CategoriesBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  padding: 5px;
  transition: all 0.2s ease;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ theme, selected }) => {
      return selected ? theme.color.categoriesSecondary : 'transparent';
    }};
  color: ${({ theme, selected }) => {
    return selected
      ? theme.color.categoriesSecondary
      : theme.color.categoriesPrimary;
  }};

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.color.categoriesSecondary};
    color: ${(props) => props.theme.color.categoriesSecondary};
  }
`;

export const Label = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_sm};
`;
