import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: 2520px;
  margin: 0 auto;
  padding: 0 10px;

  @media (${(props) => props.theme.device.mobileL}) {
    padding: 0 20px;
  }
`;
