import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 500px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.color.searchBorder};
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.search};
  }

  & > :nth-child(1) {
    display: flex;
  }

  & > :nth-child(1),
  & > :nth-child(2) {
    width: 100%;
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  @media (${(props) => props.theme.device.mobileL}) {
    width: auto;

    & > :nth-child(1) {
      border-right: 1px solid ${(props) => props.theme.color.searchBorder};
    }

    & > :nth-child(2) {
      display: flex;
    }
  }

  @media (${(props) => props.theme.device.tablet}) {
    & > :nth-child(2) {
      border-right: 1px solid ${(props) => props.theme.color.searchBorder};
    }
  }
`;

export const Text = styled.div`
  padding: 0 15px;
  display: none;
  border-right: none;
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};

  @media (${(props) => props.theme.device.tablet}) {
    display: flex;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 30px;
  font-size: ${(props) => props.theme.fontSize.text_base};
  color: ${(props) => props.theme.color.searchBG};
  background-color: ${(props) => props.theme.color.searchLogo};
  border-radius: 100%;
`;
