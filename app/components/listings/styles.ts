import styled from 'styled-components';

export const ListingListWrapper = styled.div`
  padding-top: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media (${(props) => props.theme.device.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${(props) => props.theme.device.laptop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (${(props) => props.theme.device.laptopL}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListingCardWrapper = styled.div``;
