import React from 'react';
import { NightTimeSlider } from '../../../../../dropdowns/settingsDropdown/settingsOverlay/nightModeSettings/NightTimeSlider/NightTimeSlider';
import * as S from './NightTimePicker.styles';

export const NightTimePicker = ({ nightTime, setNightTime }) => {
  return (
    <S.Wrapper>
      <NightTimeSlider from={nightTime[0]} to={nightTime[1]} setNightTime={setNightTime} />
    </S.Wrapper>
  );
};
