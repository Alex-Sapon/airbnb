'use client';

import { Title, Subtitle, HeadingWrapper } from './styles';

type HeadingProps = {
  title: string;
  subtitle: string;
  center?: boolean;
};

export const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <HeadingWrapper center={center}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeadingWrapper>
  );
};
