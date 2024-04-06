import React from 'react';
import { useTranslation } from 'react-i18next';
import { GradientStackedAreaChart } from '@app/components/charts/GradientStackedAreaChart/GradientStackedAreaChart';
import { VisitorsPieChart } from '@app/components/charts/VisitorsPieChart';
import { BarAnimationDelayChart } from '@app/components/charts/BarAnimationDelayChart/BarAnimationDelayChart';
import { ScatterChart } from '@app/components/charts/ScatterChart/ScatterChart';
import { LineRaceChart } from '@app/components/charts/LineRaceChart/LineRaceChart';
import { PageTitle } from '@app/components/common/pageTitles/PageTitle';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { AppColumn } from '@app/components/common/BaseCol/BaseCol';

const ChartsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.charts')}</PageTitle>
      <BaseRow gutter={[30, 30]}>
        <AppColumn id="line-race" xs={24}>
          <LineRaceChart />
        </AppColumn>
        <AppColumn id="gradient-stacked-area" xs={24}>
          <GradientStackedAreaChart />
        </AppColumn>
        <AppColumn id="bar-animation-delay" xs={24}>
          <BarAnimationDelayChart />
        </AppColumn>
        <AppColumn id="pie" xs={24} lg={12}>
          <VisitorsPieChart />
        </AppColumn>
        <AppColumn id="scatter" xs={24} lg={12}>
          <ScatterChart />
        </AppColumn>
      </BaseRow>
    </>
  );
};

export default ChartsPage;
