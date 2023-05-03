import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  user-select: none;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
`;

export const LeftSide = styled.div``;

export const Title = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Subtitle = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const Button = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => props.theme.color.tertiary};
  color: ${(props) => props.theme.color.tertiary};

  &:hover {
    border: 1px solid ${(props) => props.theme.color.secondary};
    color: ${(props) => props.theme.color.secondary};
  }
`;
