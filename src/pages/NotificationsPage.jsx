import React from 'react';
import { Notifications } from '../components/profile/profileCard/profileFormNav/nav/notifications/Notifications/Notifications';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';

const NotificationsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('profile.nav.notifications.title')}</PageTitle>
      <Notifications />
    </>
  );
};

export default NotificationsPage;
