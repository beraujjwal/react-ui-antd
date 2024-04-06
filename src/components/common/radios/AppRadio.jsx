import { Radio } from 'antd';
import * as S from './AppRadio.styles';



export const AppRadio = (props) => {
  return <S.Radio {...props} />;
};

AppRadio.Group = Radio.Group;
AppRadio.Button = S.RadioButton;
