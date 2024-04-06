import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoadingOutlined, RedoOutlined, ChromeOutlined } from '@ant-design/icons';
import { AppSpin } from '../../components/common/spines/AppSpin';
import { AppAlert } from '../../components/common/alerts/AppAlert';
import { GlobalSpinner } from '../../components/common/globalSpinners/GlobalSpinner';
import { PageTitle } from '../../components/common/pageTitles/PageTitle';
import * as S from './UIComponentsPage.styles';
import { themeObject } from '../../styles/themes/themeVariables';
import { AppSwitch } from '../../components/common/switches/AppSwitch';
import { AppColumn } from '../../components/common/columns/AppColumn';
import { AppSpace } from '../../components/common/spaces/AppSpace';

const antIcon1 = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const antIcon2 = <RedoOutlined style={{ fontSize: 24 }} spin />;
const antIcon3 = <ChromeOutlined style={{ fontSize: 24 }} spin />;

const SpinnersPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [delayLoading, setDelayLoading] = useState(false);

  return (
    <>
      <PageTitle>{t('common.spinner')}</PageTitle>
      <AppColumn>
        <S.Card title={t('spinners.globalAppSpinner')}>
          <GlobalSpinner color={themeObject['light'].spinnerBase} />
          <GlobalSpinner color={themeObject['dark'].spinnerBase} />
        </S.Card>
        <S.Card title={t('spinners.sizes')}>
          <AppSpin size="small" />
          <AppSpin />
          <AppSpin size="large" />
        </S.Card>
        <S.Card title={t('spinners.customDescription')}>
          <AppSpin tip={t('spinners.loading')} />
        </S.Card>
        <S.Card title={t('spinners.customIndicator')}>
          <AppSpin indicator={antIcon1} />
          <AppSpin indicator={antIcon2} />
          <AppSpin indicator={antIcon3} />
        </S.Card>
        <S.Card title={t('spinners.customLoading')}>
          <AppSpace direction="vertical" size={16}>
            <AppSpin spinning={loading}>
              <AppAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </AppSpin>
            <div>
              {t('spinners.loadingState')}
              <AppSwitch checked={loading} onChange={() => setLoading(!loading)} />
            </div>
          </AppSpace>
        </S.Card>
        <S.Card title={t('spinners.customLoadingDelay')}>
          <AppSpace direction="vertical" size={16}>
            <AppSpin spinning={delayLoading} delay={500}>
              <AppAlert
                message={t('spinners.alertMessage')}
                description={t('spinners.alertDescription')}
                type="info"
              />
            </AppSpin>
            <div>
              {t('spinners.loadingState')}
              <AppSwitch checked={delayLoading} onChange={() => setDelayLoading(!delayLoading)} />
            </div>
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default SpinnersPage;
