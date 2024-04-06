import { InputNumber as AntInputNumber } from 'antd';
import styled from 'styled-components';


export const Number = styled(AntInputNumber)`
  ${(props) => props && 'display: block; width: 100%'};
`;