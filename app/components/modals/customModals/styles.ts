import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Heading = styled.div``;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSize.text_xl};
  margin-bottom: 5px;
`;

export const Subtitle = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  color: ${(props) => props.theme.color.tertiary};
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
