import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
//import { AppNewsFeed } from '../components/apps/newsFeed/AppNewsFeed';

const NewsFeedPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.feed')}</PageTitle>
      {/* <AppNewsFeed /> */}
    </>
  );
};

export default NewsFeedPage;
