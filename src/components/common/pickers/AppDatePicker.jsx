import React from 'react';
import { DayjsDatePicker } from './DayjsDatePicker';

export const AppDatePicker = React.forwardRef(
  ({ className, ...props }, ref) => <DayjsDatePicker ref={ref} className={className} {...props} />,
);
