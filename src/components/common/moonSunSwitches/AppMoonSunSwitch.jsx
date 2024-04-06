import React from 'react';
import * as S from './AppMoonSunSwitch.styles';
import { MoonIcon } from '../../common/icons/MoonIcon';
import { SunIcon } from '../../common/icons/SunIcon';

export const AppMoonSunSwitch = ({ isMoonActive, onClickMoon, onClickSun }) => {
  return (
    <S.ButtonGroup $isFirstActive={isMoonActive}>
      <S.Btn size="small" type="link" icon={<MoonIcon />} onClick={onClickMoon} />
      <S.Btn size="small" type="link" icon={<SunIcon />} onClick={onClickSun} />
    </S.ButtonGroup>
  );
};
