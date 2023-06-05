import styled from 'styled-components';

export const TripsClientWrapper = styled.div`
  padding: 100px 0 40px 0;
`;

export const TripsList = styled.div`
  margin: 30px 0;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;
