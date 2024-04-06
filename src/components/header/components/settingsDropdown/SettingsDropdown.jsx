import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { AppButton } from '../../.../../../common/buttons/AppButton';
import { HeaderActionWrapper } from '../../Header.styles';
import { SettingsOverlay } from './settingsOverlay/SettingsOverlay/SettingsOverlay';
import { AppPopover } from '../../.../../../common/popovers/AppPopover';

export const SettingsDropdown = () => {
  const [isOpened, setOpened] = useState(false);

  return (
    <AppPopover content={<SettingsOverlay />} trigger="click" onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <AppButton type={isOpened ? 'ghost' : 'text'} icon={<SettingOutlined />} />
      </HeaderActionWrapper>
    </AppPopover>
  );
};
