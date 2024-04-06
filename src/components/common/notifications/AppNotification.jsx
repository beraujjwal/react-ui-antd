import React from 'react';
import { CheckCircleFilled, ExclamationCircleFilled, InfoCircleFilled, WarningFilled } from '@ant-design/icons';
import * as S from './AppNotification.styles';
import { AppSpace } from '../spaces/AppSpace';

export const AppNotification = ({ type, mentionIconSrc, title, description }) => {
  const icons = {
    info: <InfoCircleFilled />,
    success: <CheckCircleFilled />,
    warning: <ExclamationCircleFilled />,
    error: <WarningFilled />,
    mention: mentionIconSrc,
  };

  const icon = icons[type] || icons.warning;

  return (
    <S.SpaceWrapper type={type} align="start" size="middle">
      {mentionIconSrc ? <S.NotificationIcon src={icon} alt="User icon" /> : icon}
      <AppSpace direction="vertical">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </AppSpace>
    </S.SpaceWrapper>
  );
};
