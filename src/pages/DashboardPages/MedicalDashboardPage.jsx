import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/common/pageTitles/PageTitle';
import { MapCard } from '../../components/medical-dashboard/mapCard/MapCard';
import { ScreeningsCard } from '../../components/medical-dashboard/screeningsCard/ScreeningsCard/ScreeningsCard';
import { ActivityCard } from '../../components/medical-dashboard/activityCard/ActivityCard';
import { TreatmentCard } from '../../components/medical-dashboard/treatmentCard/TreatmentCard';
import { CovidCard } from '../../components/medical-dashboard/covidCard/CovidCard';
import { HealthCard } from '../../components/medical-dashboard/HealthCard/HealthCard';
import { FavoritesDoctorsCard } from '../../components/medical-dashboard/favoriteDoctors/FavoriteDoctorsCard/FavoritesDoctorsCard';
import { PatientResultsCard } from '../../components/medical-dashboard/PatientResultsCard/PatientResultsCard';
import { StatisticsCards } from '../../components/medical-dashboard/statisticsCards/StatisticsCards';
import { BloodScreeningCard } from '../../components/medical-dashboard/bloodScreeningCard/BloodScreeningCard/BloodScreeningCard';
import { NewsCard } from '../../components/medical-dashboard/NewsCard/NewsCard';
import { References } from '../../components/common/References/References';
import { useResponsive } from '../../hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { AppRow } from '../../components/common/rows/AppRow';
import { AppColumn } from '../../components/common/columns/AppColumn';

const MedicalDashboardPage = () => {
  const { isTablet, isDesktop } = useResponsive();

  const { t } = useTranslation();

  const desktopLayout = (
    <AppRow>
      <S.LeftSideCol xl={16} xxl={17}>
        <AppRow gutter={[30, 30]}>
          <AppColumn span={24}>
            <AppRow gutter={[30, 30]}>
              <StatisticsCards />
            </AppRow>
          </AppColumn>

          <AppColumn id="map" span={24}>
            <MapCard />
          </AppColumn>

          <AppColumn id="latest-screenings" span={24}>
            <ScreeningsCard />
          </AppColumn>

          <AppColumn id="treatment-plan" xl={24}>
            <TreatmentCard />
          </AppColumn>

          <AppColumn id="covid" xl={24}>
            <CovidCard />
          </AppColumn>

          <AppColumn id="activity" xl={24} xxl={12}>
            <ActivityCard />
          </AppColumn>

          <AppColumn id="health" xl={24} xxl={12}>
            <HealthCard />
          </AppColumn>

          <AppColumn id="favorite-doctors" xl={24}>
            <FavoritesDoctorsCard />
          </AppColumn>

          <AppColumn id="news" span={24}>
            <NewsCard />
          </AppColumn>
        </AppRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="blood-screening">
          <BloodScreeningCard />
        </div>
        <S.Space />
        <S.ScrollWrapper id="patient-timeline">
          <PatientResultsCard />
        </S.ScrollWrapper>
      </S.RightSideCol>
    </AppRow>
  );

  const mobileAndTabletLayout = (
    <AppRow gutter={[20, 20]}>
      <StatisticsCards />

      {isTablet && (
        <AppColumn id="map" md={24} order={4}>
          <MapCard />
        </AppColumn>
      )}

      <AppColumn id="latest-screenings" xs={24} md={12} order={(isTablet && 5) || 0}>
        <ScreeningsCard />
      </AppColumn>

      <AppColumn id="activity" xs={24} md={12} order={(isTablet && 8) || 0}>
        <ActivityCard />
      </AppColumn>

      <AppColumn id="treatment-plan" xs={24} md={24} order={(isTablet && 10) || 0}>
        <TreatmentCard />
      </AppColumn>

      <AppColumn id="health" xs={24} md={12} order={(isTablet && 9) || 0}>
        <HealthCard />
      </AppColumn>

      <AppColumn id="patient-timeline" xs={24} md={12} order={(isTablet && 11) || 0}>
        <PatientResultsCard />
      </AppColumn>

      <AppColumn id="blood-screening" xs={24} md={12} order={(isTablet && 6) || 0}>
        <BloodScreeningCard />
      </AppColumn>

      <AppColumn id="favorite-doctors" xs={24} md={24} order={(isTablet && 13) || 0}>
        <FavoritesDoctorsCard />
      </AppColumn>

      <AppColumn id="covid" xs={24} md={12} order={(isTablet && 12) || 0}>
        <CovidCard />
      </AppColumn>

      <AppColumn id="news" xs={24} md={24} order={(isTablet && 14) || 0}>
        <NewsCard />
      </AppColumn>
    </AppRow>
  );

  return (
    <>
      <PageTitle>{t('common.medical-dashboard')}</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
