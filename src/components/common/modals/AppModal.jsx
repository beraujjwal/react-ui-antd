import React from 'react';
import { Modal } from 'antd';
import { modalSizes } from '../../../constants/modalSizes';


export const AppModal = ({ size = 'medium', children, ...props }) => {
  const modalSize = Object.entries(modalSizes).find((sz) => sz[0] === size)?.[1];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};

AppModal.info = Modal.info;
AppModal.success = Modal.success;
AppModal.warning = Modal.warning;
AppModal.error = Modal.error;
