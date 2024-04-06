import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import { SignUpForm } from '../components/auth/signUpForm/SignUpForm';

const SignUpPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.signUp')}</PageTitle>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
