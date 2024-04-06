import React, { useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { AppButton } from '../../../common/buttons/AppButton';
import { AppBadge } from '../../../common/badges/AppBadge';
import { NotificationsOverlay } from '../../components/notificationsDropdown/NotificationsOverlay/NotificationsOverlay';
import { HeaderActionWrapper } from '../../Header.styles';  // header/Header.styles
import { AppPopover } from '../../../common/popovers/AppPopover';

const initialNotifications = {}

export const NotificationsDropdown = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isOpened, setOpened] = useState(false);

  return (
    <AppPopover
      trigger="click"
      content={<NotificationsOverlay notifications={notifications} setNotifications={setNotifications} />}
      onOpenChange={setOpened}
    >
      <HeaderActionWrapper>
        <AppButton
          type={isOpened ? 'ghost' : 'text'}
          icon={
            <AppBadge dot>
              <BellOutlined />
            </AppBadge>
          }
        />
      </HeaderActionWrapper>
    </AppPopover>
  );
};
