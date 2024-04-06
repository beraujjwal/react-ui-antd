import React, { useMemo } from 'react';
import { Dates } from 'constants/Dates';
import { BaseSelect, Option } from '../AppSelect/AppSelect';

export const MonthSelect = ({ className, ...props }) => {
  const months = Dates.getMonths();

  const monthsOptions = useMemo(
    () =>
      months.map((month, index) => (
        <Option key={index} value={index}>
          {month}
        </Option>
      )),
    [months],
  );

  return (
    <BaseSelect className={className} {...props}>
      {monthsOptions}
    </BaseSelect>
  );
};
