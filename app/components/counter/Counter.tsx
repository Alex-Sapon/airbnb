'use client';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Heading } from '@/app/components/heading/Heading';

import { Button, CounterWrapper, RightSide } from './styles';

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
      <Heading title={title} subtitle={subtitle} />
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
