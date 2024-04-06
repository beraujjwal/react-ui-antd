import React from 'react';
import { Button as AntdButton } from 'antd';
import * as S from './AppButton.styles';

export const { Group: ButtonGroup } = AntdButton;



export const AppButton = React.forwardRef(
  ({ className, severity, noStyle, children, ...props }, ref) => (
    <S.AppButton ref={ref} className={className} $noStyle={noStyle} {...props} $severity={severity}>
      {children}
    </S.AppButton>
  ),
);
