import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { Notification } from '../../../notifications/Notification';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const NotificationsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.notification')}</PageTitle>
      <AppColumn>
        <S.Card title={t('notifications.basic')}>
          <AppButton
            severity="info"
            onClick={() =>
              Notification.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.basicTitle')}
          </AppButton>
        </S.Card>
        <S.Card title={t('notifications.types')}>
          <AppButton
            severity="success"
            onClick={() =>
              Notification.success({
                message: t('notifications.successTitle'),
                description: t('notifications.successDescription'),
              })
            }
          >
            {t('notifications.success')}
          </AppButton>
          <AppButton
            severity="info"
            onClick={() =>
              Notification.info({
                message: t('notifications.infoTitle'),
                description: t('notifications.infoDescription'),
              })
            }
          >
            {t('notifications.info')}
          </AppButton>
          <AppButton
            severity="warning"
            onClick={() =>
              Notification.warning({
                message: t('notifications.warningTitle'),
                description: t('notifications.warningDescription'),
              })
            }
          >
            {t('notifications.warning')}
          </AppButton>
          <AppButton
            severity="error"
            onClick={() =>
              Notification.error({
                message: t('notifications.errorTitle'),
                description: t('notifications.errorDescription'),
              })
            }
          >
            {t('notifications.error')}
          </AppButton>
        </S.Card>
        <S.Card title={t('notifications.withoutDescription')}>
          <AppButton
            severity="success"
            onClick={() =>
              Notification.success({
                message: t('notifications.successTitle'),
              })
            }
          >
            {t('notifications.success')}
          </AppButton>
          <AppButton
            severity="info"
            onClick={() =>
              Notification.info({
                message: t('notifications.infoTitle'),
              })
            }
          >
            {t('notifications.info')}
          </AppButton>
          <AppButton
            severity="warning"
            onClick={() =>
              Notification.warning({
                message: t('notifications.warningTitle'),
              })
            }
          >
            {t('notifications.warning')}
          </AppButton>
          <AppButton
            severity="error"
            onClick={() =>
              Notification.error({
                message: t('notifications.errorTitle'),
              })
            }
          >
            {t('notifications.error')}
          </AppButton>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default NotificationsPage;
