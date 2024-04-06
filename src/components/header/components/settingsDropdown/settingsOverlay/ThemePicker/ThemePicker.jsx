import React from 'react';
import { AppMoonSunSwitch } from '../../../../../common/moonSunSwitches/AppMoonSunSwitch';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks/reduxHooks';
import { setTheme } from '../../../../../../app/slices/themeSlice';
import { setNightMode } from '../../../../../../app/slices/nightModeSlice';

export const ThemePicker = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);

  const handleClickButton = (theme) => {
    dispatch(setTheme(theme));
    dispatch(setNightMode(false));
  };

  return (
    <AppMoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  );
};
