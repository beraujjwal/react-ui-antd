import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { AppModal } from '../../../components/common/modals/AppModal';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const ModalsPage = () => {
  const { t } = useTranslation();
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);

  const success = () => {
    AppModal.success({
      title: t('modals.successTitle'),
      content: t('modals.someContent'),
    });
  };

  const info = () => {
    AppModal.info({
      title: t('modals.infoTitle'),
      content: t('modals.someContent'),
    });
  };

  const warning = () => {
    AppModal.warning({
      title: t('modals.warningTitle'),
      content: t('modals.someContent'),
    });
  };

  const error = () => {
    AppModal.error({
      title: t('modals.errorTitle'),
      content: t('modals.someContent'),
    });
  };

  return (
    <>
      <PageTitle>{t('common.modal')}</PageTitle>
      <AppColumn>
        <S.Card title={t('modals.basic')}>
          <AppButton type="primary" onClick={() => setIsBasicModalOpen(true)}>
            {t('modals.open')}
          </AppButton>
          <AppModal
            title={t('modals.basic')}
            open={isBasicModalOpen}
            onOk={() => setIsBasicModalOpen(false)}
            onCancel={() => setIsBasicModalOpen(false)}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </AppModal>
        </S.Card>
        <S.Card title={t('modals.sizes')}>
          <AppButton type="primary" onClick={() => setIsSmallModalOpen(true)}>
            {t('modals.small')}
          </AppButton>
          <AppButton type="primary" onClick={() => setIsMiddleModalOpen(true)}>
            {t('modals.middle')}
          </AppButton>
          <AppButton type="primary" onClick={() => setIsLargeModalOpen(true)}>
            {t('modals.large')}
          </AppButton>
          <AppButton type="primary" onClick={() => setIsFullscreenModalOpen(true)}>
            {t('modals.fullscreen')}
          </AppButton>
          <AppModal
            title={t('modals.smallTitle')}
            centered
            open={isSmallModalOpen}
            onOk={() => setIsSmallModalOpen(false)}
            onCancel={() => setIsSmallModalOpen(false)}
            size="small"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </AppModal>
          <AppModal
            title={t('modals.middleTitle')}
            centered
            open={isMiddleModalOpen}
            onOk={() => setIsMiddleModalOpen(false)}
            onCancel={() => setIsMiddleModalOpen(false)}
            size="medium"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </AppModal>
          <AppModal
            title={t('modals.largeTitle')}
            centered
            open={isLargeModalOpen}
            onOk={() => setIsLargeModalOpen(false)}
            onCancel={() => setIsLargeModalOpen(false)}
            size="large"
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </AppModal>
          <AppModal
            title={t('modals.fullscreenTitle')}
            centered
            open={isFullscreenModalOpen}
            onOk={() => setIsFullscreenModalOpen(false)}
            onCancel={() => setIsFullscreenModalOpen(false)}
            width={'100%'}
          >
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
            <p>{t('modals.someContent')}</p>
          </AppModal>
        </S.Card>
        <S.Card title={t('modals.infoModal')}>
          <AppButton severity="success" type="default" onClick={success}>
            {t('modals.success')}
          </AppButton>
          <AppButton severity="info" type="default" onClick={info}>
            {t('modals.info')}
          </AppButton>
          <AppButton severity="warning" type="default" onClick={warning}>
            {t('modals.warning')}
          </AppButton>
          <AppButton severity="error" type="default" onClick={error}>
            {t('modals.error')}
          </AppButton>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default ModalsPage;
