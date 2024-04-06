import React from 'react';
import * as S from './MainHeader.styles';

export const MainHeader = ({ isTwoColumnsLayout, children }) => {
  return <S.Header $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>{children}</S.Header>;
};
