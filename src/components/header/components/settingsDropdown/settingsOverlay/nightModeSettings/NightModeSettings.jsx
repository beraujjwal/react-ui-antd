import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { NightTimePicker } from './NightTimePicker/NightTimePicker';
import { AppSwitch } from '../../../../../common/switches/AppSwitch';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/reduxHooks';
import { setNightMode, setNightTime } from '../../../../../../app/slices/nightModeSlice';

export const NightModeSettings = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;
  const nightTime = nightModeState.nightTime;

  const handleChange = (isNightMode) => {
    dispatch(setNightMode(isNightMode));
  };

  const handleNightTime = (nightTime) => {
    dispatch(setNightTime(nightTime));
  };

  return (
    <>
      <SwitchContainer>
        <span>{t('common.auto')}</span>
        <AppSwitch checkedChildren="On" unCheckedChildren="Off" checked={isNightMode} onChange={handleChange} />
      </SwitchContainer>
      {isNightMode && <NightTimePicker nightTime={nightTime} setNightTime={handleNightTime} />}
    </>
  );
};

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
