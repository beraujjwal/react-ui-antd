import React from 'react';
import * as S from './AppNumberInput.styles';


export const AppNumberInput = React.forwardRef(
  ({ children, block, ...props }, ref) => (
    <S.Number ref={ref} $block={block} {...props}>
      {children}
    </S.Number>
  ),
);
