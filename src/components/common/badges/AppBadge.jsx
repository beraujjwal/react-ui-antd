import React from 'react';
import { Badge } from 'antd';
import { mapBadgeStatus } from '../../../utils/utils';
import * as S from './AppBadge.styles';



export const AppBadge = ({ status, children, count, ...props }) => (
  <S.Badge {...(status ? (count ? { count, severity: mapBadgeStatus(status) } : { status }) : { count })} {...props}>
    {children}
  </S.Badge>
);

AppBadge.Ribbon = Badge.Ribbon;
