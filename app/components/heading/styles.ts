import styled from 'styled-components';

export const HeadingWrapper = styled.div``;

export const Title = styled.div`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSize.text_lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Subtitle = styled.div`
  color: ${(props) => props.theme.color.tertiary};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
