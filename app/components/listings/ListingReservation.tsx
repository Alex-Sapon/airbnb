'use client';

import { Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { Calendar } from '@/app/components/calendar/Calendar';
import { Divider } from '@/app/styles/divider';
import { formatCurrency } from '@/app/utilities/formatCurrency';

import { ListingReservationWrapper, Night, Title } from './styles';

type ListingReservationProps = {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeRange: (value: Range) => void;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
};

export const ListingReservation = ({
  price,
  dateRange,
  totalPrice,
  onChangeRange,
  onSubmit,
  disabled,
  disabledDates,
}: ListingReservationProps) => {
  return (
    <ListingReservationWrapper>
      <Title>
        {formatCurrency(price)} <Night>night</Night>
      </Title>
      <Divider />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={onChangeRange}
      />
      <Divider />
      <Title>Total price: {formatCurrency(totalPrice)}</Title>
    </ListingReservationWrapper>
  );
};
