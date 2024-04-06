import React from 'react';
import { AppInput } from '../inputs/AppInput';
import * as S from './AppSuffixInput.styles';

export const AppSuffixInput = ({ suffix, isOpenSuffix = true, ...props }) => (
  <AppInput suffix={<S.Suffix isOpen={isOpenSuffix}>{suffix}</S.Suffix>} {...props} />
);
