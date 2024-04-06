import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalInfo } from '../components/profile/profileCard/profileFormNav/nav/PersonalInfo/PersonalInfo';
import { PageTitle } from '../components/common/pageTitles/PageTitle';

const PersonalInfoPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.personalInfo.title')}</PageTitle>
      <PersonalInfo />
    </>
  );
};

export default PersonalInfoPage;
