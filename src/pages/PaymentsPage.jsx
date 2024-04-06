import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import { Payments } from '../components/profile/profileCard/profileFormNav/nav/payments/Payments';

const PaymentsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.payments.title')}</PageTitle>
      <Payments />
    </>
  );
};

export default PaymentsPage;
