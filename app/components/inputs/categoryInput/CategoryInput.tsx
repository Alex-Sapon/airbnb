'use client';

import { IconType } from 'react-icons';

import { CategoryInputWrapper, Label } from './styles';

type CategoryInputProps = {
  label: string;
  icon: IconType;
  onClick: (label: string) => void;
  selected?: boolean;
};

export const CategoryInput = ({
  label,
  icon: Icon,
  onClick,
  selected,
}: CategoryInputProps) => {
  const handleClick = () => onClick(label);

  return (
    <CategoryInputWrapper onClick={handleClick} selected={selected}>
      <Icon size={26} />
      <Label>{label}</Label>
    </CategoryInputWrapper>
  );
};
