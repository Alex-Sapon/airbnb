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
  row-gap: 5px;

  &.heart-wrapper {
    position: absolute;
    top: 5px;
    right: 5px;
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

  &:hover {
    scale: 1.1;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.text_lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const Subtitle = styled.div`
  margin: 5px 0 20px 0;
  color: ${(props) => props.theme.color.tertiary};
  font-size: ${(props) => props.theme.fontSize.text_sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const Night = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.light};
`;

export const ListingPageWrapper = styled.div`
  padding: 100px 0 10px 0;
`;

export const ListingHeadWrapper = styled.div``;

export const ImageHeadWrapper = styled.div`
  height: 60vh;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const ImageHead = styled(Image).attrs({
  fill: true,
  alt: 'ListingHead',
})`
  object-fit: cover;
`;
