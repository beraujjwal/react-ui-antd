import React from 'react';
import * as S from './AppPasswordInput.styles';

export const AppPasswordInput = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <S.Password ref={ref} className={className} {...props}>
      {children}
    </S.Password>
  ),
);
