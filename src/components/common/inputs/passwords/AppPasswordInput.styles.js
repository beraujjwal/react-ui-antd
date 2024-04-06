import styled from 'styled-components';
import { AppInput } from '../inputs/AppInput';

export const Password = styled(AppInput)`
  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
