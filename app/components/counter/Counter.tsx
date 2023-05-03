'use client';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import {
  CounterWrapper,
  RightSide,
  LeftSide,
  Title,
  Subtitle,
  Button,
} from './styles';

type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
};

export const Counter = ({ title, subtitle, value, onChange }: CounterProps) => {
  const onAdd = () => {
    onChange(value + 1);
  };

  const onRemove = () => {
    if (value === 1) return;
    onChange(value - 1);
  };

  return (
    <CounterWrapper>
      <LeftSide>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </LeftSide>
      <RightSide>
        <Button onClick={onRemove}>
          <AiOutlineMinus />
        </Button>
        {value}
        <Button onClick={onAdd}>
          <AiOutlinePlus />
        </Button>
      </RightSide>
    </CounterWrapper>
  );
};
