import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import { AppAlert } from '../../../components/common/alerts/AppAlert';
import { AppButton } from '../../../components/common/buttons/AppButton';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const Card = styled(S.Card)`
  .ant-card-body {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AlertsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.alert')}</PageTitle>
      <AppColumn>
        <Card title={t('alerts.basic')}>
          <AppAlert message={t('alerts.success')} type="success" />
        </Card>
        <Card title={t('alerts.types')}>
          <AppAlert message={t('alerts.success')} type="success" />
          <AppAlert message={t('alerts.info')} type="info" />
          <AppAlert message={t('alerts.warning')} type="warning" />
          <AppAlert message={t('alerts.error')} type="error" />
        </Card>
        <Card title={t('alerts.closable')}>
          <AppAlert message={t('alerts.warning')} type="warning" closable />
          <AppAlert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" closable />
        </Card>
        <Card title={t('alerts.icons')}>
          <AppAlert message={t('alerts.success')} type="success" showIcon />
          <AppAlert message={t('alerts.info')} type="info" showIcon />
          <AppAlert message={t('alerts.warning')} type="warning" showIcon closable />
          <AppAlert message={t('alerts.error')} type="error" showIcon />
          <AppAlert
            message={t('alerts.success')}
            description={t('alerts.successDescription')}
            type="success"
            showIcon
          />
          <AppAlert message={t('alerts.info')} description={t('alerts.infoDescription')} type="info" showIcon />
          <AppAlert
            message={t('alerts.warning')}
            description={t('alerts.warningDescription')}
            type="warning"
            showIcon
            closable
          />
          <AppAlert message={t('alerts.error')} description={t('alerts.errorDescription')} type="error" showIcon />
        </Card>
        <Card title={t('alerts.customActions')}>
          <AppAlert
            message={t('alerts.success')}
            type="success"
            showIcon
            action={
              <AppButton size="small" type="text">
                {t('alerts.undo')}
              </AppButton>
            }
            closable
          />
          <AppAlert
            message={t('alerts.error')}
            showIcon
            description={t('alerts.errorDescription')}
            type="error"
            action={
              <AppButton size="small" danger type="primary">
                {t('alerts.detail')}
              </AppButton>
            }
          />
          <AppAlert
            message={t('alerts.warning')}
            type="warning"
            action={
              <AppSpace>
                <AppButton size="small" type="ghost">
                  {t('alerts.done')}
                </AppButton>
              </AppSpace>
            }
            closable
          />
          <AppAlert
            message={t('alerts.info')}
            description={t('alerts.infoDescription')}
            type="info"
            action={
              <AppSpace direction="vertical">
                <AppButton size="small" type="primary">
                  {t('alerts.accept')}
                </AppButton>
                <AppButton size="small" danger type="primary">
                  {t('alerts.decline')}
                </AppButton>
              </AppSpace>
            }
            closable
          />
        </Card>
      </AppColumn>
    </>
  );
};

export default AlertsPage;
