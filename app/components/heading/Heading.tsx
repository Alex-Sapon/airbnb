'use client';

import { Title, Subtitle, HeadingWrapper } from './styles';

type HeadingProps = {
  title: string;
  subtitle: string;
};

export const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeadingWrapper>
  );
};
