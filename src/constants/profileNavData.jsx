import React from 'react';

import { BellOutlined, DollarOutlined, SecurityScanOutlined, UserOutlined } from '@ant-design/icons';


export const profileNavData = [
  {
    id: 1,
    name: 'profile.nav.personalInfo.title',
    icon: <UserOutlined />,
    color: 'primary',
    href: 'personal-info',
  },
  {
    id: 2,
    name: 'profile.nav.securitySettings.title',
    icon: <SecurityScanOutlined />,
    color: 'success',
    href: 'security-settings',
  },
  {
    id: 3,
    name: 'profile.nav.notifications.title',
    icon: <BellOutlined />,
    color: 'error',
    href: 'notifications',
  },
  {
    id: 4,
    name: 'profile.nav.payments.title',
    icon: <DollarOutlined />,
    color: 'warning',
    href: 'payments',
  },
];
