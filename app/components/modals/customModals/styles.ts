import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.color.modalDivider};
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  color: ${(props) => props.theme.color.tertiary};
`;

export const Login = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.color.secondary};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.tertiary};
    border-radius: 20px;
  }

  @media (${(props) => props.theme.device.mobileL}) {
    max-height: 40vh;
    grid-template-columns: 1fr 1fr;
  }
`;
