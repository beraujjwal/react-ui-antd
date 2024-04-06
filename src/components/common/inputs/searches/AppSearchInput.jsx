import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import * as S from './AppSearchInput.styles';
import { AppSpin } from '../../spines/AppSpin';


export const AppSearchInput = React.forwardRef(({ loading, filter, ...props }, ref) => {
  return (
    <S.CommonSearchInput
      ref={ref}
      prefix={<SearchOutlined />}
      {...(filter && {
        suffix: (
          <S.Space align="center">
            {loading && <AppSpin size="small" />}
            {filter}
          </S.Space>
        ),
      })}
      {...props}
    />
  );
});
