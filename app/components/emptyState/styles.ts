import styled from 'styled-components';

export const EmptyStateWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;

  & button {
    width: max-content;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.text_2xl};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme.color.tertiary};
  font-size: ${(props) => props.theme.fontSize.text_base};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;
