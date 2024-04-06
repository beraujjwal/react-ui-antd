import { StepsProps } from 'antd';
import * as S from './AppSteps.styles';

export const AppSteps = ({ children, ...otherProps }) => {
  return <S.Steps {...otherProps}>{children}</S.Steps>;
};
