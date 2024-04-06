import { TabsProps } from 'antd';
import * as S from './AppTabs.styles';

export const AppTabs = ({ children, ...props }) => {
  return <S.Tabs {...props}>{children}</S.Tabs>;
};
