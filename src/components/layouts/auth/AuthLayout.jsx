import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './AuthLayout.styles';

const AuthLayout = () => {
  return (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginWrapper>
          <Outlet />
        </S.LoginWrapper>
      </S.BackgroundWrapper>
    </S.Wrapper>
  );
};

export default AuthLayout;
