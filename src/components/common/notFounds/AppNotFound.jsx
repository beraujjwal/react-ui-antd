import React from 'react';
import { useTranslation } from 'react-i18next';
import notFoundImg from '../../../assets/images/nothing-found.webp';
import * as S from './AppNotFound.styles';
import { AppImage } from '../images/AppImage';

export const AppNotFound = () => {
  const { t } = useTranslation();

  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <AppImage src={notFoundImg} alt="Not found" preview={false} />
      </S.ImgWrapper>
      <S.Text>{t('common.notFound')}</S.Text>
    </S.NotFoundWrapper>
  );
};
