import Image from 'next/image';
import styled from 'styled-components';

export const ListingListWrapper = styled.div`
  padding-top: 30px;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
`;

export const ListingCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 7px;

  &.heart-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  &:hover {
    img {
      scale: 1.1;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  margin-bottom: 5px;
`;

export const ImageCard = styled(Image).attrs({
  fill: true,
  alt: 'ListingCard',
})`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Night = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const ListingPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 100px 0 40px 0;

  @media (${(props) => props.theme.device.laptop}) {
    max-width: 1110px;
  }
`;

// ListingHead
export const ListingHeadWrapper = styled.div``;

export const ImageHeadWrapper = styled.div`
  height: 40vh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin: 30px 0;

  @media (${(props) => props.theme.device.tablet}) {
    height: 60vh;
  }
`;

export const ImageHead = styled(Image).attrs({
  fill: true,
  alt: 'ListingHead',
})`
  object-fit: cover;
`;

// ListingBody
export const ListingBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (${(props) => props.theme.device.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

// ListingInfo
export const ListingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const TextLight = styled.div`
  color: ${(props) => props.theme.color.tertiary};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const TextBold = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Hosted = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const HostedName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const HostedDetails = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const ListingCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;

  & svg {
    color: ${(props) => props.theme.color.categoriesPrimary};
  }
`;

export const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_base};
`;

// ListingReservation
export const ListingReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  border: 1px solid ${(props) => props.theme.color.tertiary};
  border-radius: 7px;
  padding: 15px;
  height: max-content;
`;

export const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
