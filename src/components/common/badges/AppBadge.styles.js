import { defineColorBySeverity } from '../../../utils/utils';
import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

export const Badge = styled(AntBadge)`
  color: inherit;

  & .ant-badge-count {
    background: ${(props) => defineColorBySeverity(props.severity)};
  }
`;
