import React, { useMemo } from 'react';
import { DayjsDatePicker } from '@app/components/common/pickers/DayjsDatePicker';
import { AppDate, Dates } from '@app/constants/Dates';

const clearDate = Dates.getToday().hour(0).minute(0).second(0).millisecond(0);
const clearDateMs = +clearDate;



export const TimeRangePicker = ({ timeRange, setTimeRange }) => {
  const timeRangePrepared = useMemo(() => timeRange.map((time) => clearDate.add(time)), [timeRange]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (timeRange) => {
    const timeRangeSinceTodayMs = timeRange
      .map((time) => time.subtract(clearDateMs, 'ms'))
      .map((time) => +time);

    setTimeRange(timeRangeSinceTodayMs);
  };

  return (
    <DayjsDatePicker.RangePicker
      value={[timeRangePrepared[0], timeRangePrepared[1]]}
      picker="time"
      format="HH:mm"
      onChange={onChange}
      allowClear={false}
      order={false}
    />
  );
};
