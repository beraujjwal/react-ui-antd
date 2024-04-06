import React from 'react';
import { DollarOutlined, PlusOutlined, ReadOutlined } from '@ant-design/icons';

export const activityStatuses = [
  {
    name: 'sold',
    title: 'nft.status.sold',
    color: 'success',
    icon: <DollarOutlined />,
  },
  {
    name: 'added',
    title: 'nft.status.added',
    color: 'warning',
    icon: <PlusOutlined />,
  },
  {
    name: 'booked',
    title: 'nft.status.booked',
    color: 'secondary',
    icon: <ReadOutlined />,
  },
];
