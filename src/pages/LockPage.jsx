import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import { LockForm } from '../components/auth/LockForm/LockForm';

const LockPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.lock')}</PageTitle>
      <LockForm />
    </>
  );
};

export default LockPage;
