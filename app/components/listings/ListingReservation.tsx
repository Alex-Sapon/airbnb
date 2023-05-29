'use client';

import { Range, RangeKeyDict } from 'react-date-range';

import { Button } from '@/app/components/button/Button';
import { Calendar } from '@/app/components/calendar/Calendar';
import { Divider } from '@/app/styles/divider';
import { formatCurrency } from '@/app/utilities/formatCurrency';

import { ListingReservationWrapper, Night, Title, TotalPrice } from './styles';

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
  const handleChangeRange = (value: RangeKeyDict) => {
    onChangeRange(value.selection);
  };

  return (
    <ListingReservationWrapper>
      <Title>
        {formatCurrency(price)} <Night>night</Night>
      </Title>
      <Divider />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={handleChangeRange}
      />
      <Divider />
      <Button label="Reserve" onClick={onSubmit} disabled={disabled} />
      <TotalPrice>
        <Title>Total price:</Title>
        <Title>{formatCurrency(totalPrice)}</Title>
      </TotalPrice>
    </ListingReservationWrapper>
  );
};
