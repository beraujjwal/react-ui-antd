import React from 'react';
import { Dropdown } from 'antd';

export const AppDropdown = ({ children, ...props }) => {
  return (
    <Dropdown getPopupContainer={(triggerNode) => triggerNode} {...props}>
      {children}
    </Dropdown>
  );
};
