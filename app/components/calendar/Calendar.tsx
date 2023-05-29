'use client';

import { DateRange, RangeKeyDict, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type CalendarProps = {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates: Date[];
};

export const Calendar = ({ value, onChange, disabledDates }: CalendarProps) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      date={new Date()}
      ranges={[value]}
      disabledDates={disabledDates}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
    />
  );
};
