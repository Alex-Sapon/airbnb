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
