import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import { AppRadio } from '../../../../../common/radios/AppRadio';
import { AppSpace } from '../../../../../common/spaces/AppSpace';

export const LanguagePicker = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <AppRadio.Group defaultValue={language} onChange={(e) => setLanguage(e.target.value)}>
      <AppSpace direction="vertical">
        <RadioBtn value="en">
          <AppSpace align="center">
            English
            <ReactCountryFlag svg countryCode="GB" />
          </AppSpace>
        </RadioBtn>
        <RadioBtn value="de">
          <AppSpace align="center">
            Deutsch
            <ReactCountryFlag svg countryCode="DE" />
          </AppSpace>
        </RadioBtn>
      </AppSpace>
    </AppRadio.Group>
  );
};
