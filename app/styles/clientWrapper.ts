import styled from 'styled-components';

export const ClientWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 100px 0 40px 0;

  @media (${(props) => props.theme.device.laptop}) {
    max-width: 1110px;
  }
`;
