import React from 'react';
import { Notifications } from './nav/notifications/Notifications/Notifications';
import { Payments } from './nav/payments/Payments';
import { PersonalInfo } from './nav/PersonalInfo/PersonalInfo';
import { SecuritySettings } from './nav/SecuritySettings/SecuritySettings';



export const ProfileFormNav = ({ menu }) => {
  let currentMenu;

  switch (menu) {
    case 'info': {
      currentMenu = <PersonalInfo />;
      break;
    }

    case 'security': {
      currentMenu = <SecuritySettings />;
      break;
    }

    case 'notifications': {
      currentMenu = <Notifications />;
      break;
    }

    case 'payments': {
      currentMenu = <Payments />;
      break;
    }

    default: {
      currentMenu = null;
    }
  }

  return currentMenu;
};
