import React from 'react';
import { PageTitle } from '../../components/common/pageTitles/PageTitle';
import { References } from '../../components/common/References/References';
import { useResponsive } from '../../hooks/useResponsive';
import { TrendingCreators } from '../../components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '../../components/nft-dashboard/recently-added/RecentlyAddedNft';
import { TrendingCollections } from '../../components/nft-dashboard/trending-collections/TrendingCollections';
import { Balance } from '../../components/nft-dashboard/Balance/Balance';
import { TotalEarning } from '../../components/nft-dashboard/totalEarning/TotalEarning';
import { ActivityStory } from '../../components/nft-dashboard/activityStory/ActivityStory';
import { RecentActivity } from '../../components/nft-dashboard/recentActivity/RecentActivity';
import * as S from './DashboardPage.styles';
import { AppRow } from '../../components/common/rows/AppRow';
import { AppColumn } from '../../components/common/columns/AppColumn';

const MedicalDashboardPage = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <AppRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <AppRow gutter={[60, 60]}>
          <AppColumn span={24}>
            <TrendingCreators />
          </AppColumn>

          <AppColumn span={24}>
            <RecentlyAddedNft />
          </AppColumn>

          <AppColumn span={24}>
            <TrendingCollections />
          </AppColumn>

          <AppColumn span={24}>
            <RecentActivity />
          </AppColumn>
        </AppRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <div id="balance">
          <Balance />
        </div>
        <S.Space />
        <div id="total-earning">
          <TotalEarning />
        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">
          <ActivityStory />
        </S.ScrollWrapper>
      </S.RightSideCol>
    </AppRow>
  );

  const mobileAndTabletLayout = (
    <AppRow gutter={[20, 24]}>
      <AppColumn span={24}>
        <TrendingCreators />
      </AppColumn>

      <AppColumn span={24}>
        <RecentlyAddedNft />
      </AppColumn>

      <AppColumn span={24}>
        <TrendingCollections />
      </AppColumn>

      <AppColumn span={24}>
        <RecentActivity />
      </AppColumn>
    </AppRow>
  );

  return (
    <>
      <PageTitle>NFT Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default MedicalDashboardPage;
