import React, { ComponentProps } from 'react';
import { Select as AntSelect } from 'antd';
import * as S from './AppSelect.styles';

export const { Option } = AntSelect;

export const AppSelect = React.forwardRef(
  ({ className, width, shadow, children, ...props }, ref) => (
    <S.Select
      getPopupContainer={(triggerNode) => triggerNode}
      ref={ref}
      className={className}
      $width={width}
      $shadow={shadow}
      {...props}
    >
      {children}
    </S.Select>
  ),
);
