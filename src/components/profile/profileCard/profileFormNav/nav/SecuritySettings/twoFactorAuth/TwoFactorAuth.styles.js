import styled from 'styled-components';
import { AppModal } from '../../../../../../common/modals/AppModal';

export const AuthModal = styled(AppModal)`
  display: flex;
  align-items: center;
  justify-content: center;

  .ant-modal-body {
    padding: 0;
  }
`;
