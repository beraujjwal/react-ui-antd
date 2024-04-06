import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { AppResult } from '../../../components/common/results/AppResult';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { media } from '../../../styles/themes/constants';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppRow } from '../../../components/common/rows/AppRow';

const Card = styled(S.Card)`
  .ant-card-body {
    justify-content: center;
  }
`;

const BuyButton = styled(AppButton)`
  @media only screen and ${media.xs} {
    margin-top: 1rem;
  }

  @media only screen and ${media.md} {
    margin-top: 0;
  }
`;

const ProgressPage = () => {
  const { t } = useTranslation();

  const commonExtra = useMemo(
    () => (
      <AppRow gutter={[8, 8]}>
        <AppColumn span={24}>
          <AppButton block type="primary" key="console">
            {t('results.goConsole')}
          </AppButton>
        </AppColumn>

        <AppColumn span={24}>
          <BuyButton block key="buy">
            {t('results.buyAgain')}
          </BuyButton>
        </AppColumn>
      </AppRow>
    ),
    [t],
  );

  return (
    <>
      <PageTitle>{t('common.result')}</PageTitle>
      <AppColumn>
        <Card title={t('results.success')}>
          <AppResult
            status="success"
            title={t('results.successTitle')}
            subTitle={t('results.successSubTitle')}
            extra={commonExtra}
          />
        </Card>
        <Card title={t('results.info')}>
          <AppResult
            title={t('results.infoTitle')}
            extra={
              <AppButton block type="primary" key="console">
                {t('results.goConsole')}
              </AppButton>
            }
          />
        </Card>
        <Card title={t('results.warning')}>
          <AppResult
            status="warning"
            title={t('results.warningTitle')}
            extra={
              <AppButton block type="primary" key="console">
                {t('results.goConsole')}
              </AppButton>
            }
          />
        </Card>
        <Card title={t('results.error')}>
          <AppResult
            status="error"
            title={t('results.errorTitle')}
            subTitle={t('results.errorSubTitle')}
            extra={commonExtra}
          />
        </Card>
      </AppColumn>
    </>
  );
};

export default ProgressPage;
