/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { AppUpload } from '../../../components/common/uploades/AppUpload';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { FONT_SIZE, FONT_WEIGHT } from '../../../styles/themes/constants';
import { Notification } from '../../../notifications/Notification';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const DraggerIconWrapper = styled.div`
  font-size: 4rem;
  color: var(--primary-color);
`;
const DraggerTitle = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${FONT_WEIGHT.bold};
`;
const DraggerDescription = styled.div`
  font-size: ${FONT_SIZE.md};
  padding: 0 1rem;
`;

const UploadsPage = () => {
  const { t } = useTranslation();

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: (info) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        Notification.success({ message: t('uploads.successUpload', { name: info.file.name }) });
      } else if (status === 'error') {
        Notification.error({ message: t('uploads.failedUpload', { name: info.file.name }) });
      }
    },
  };

  return (
    <>
      <PageTitle>{t('common.upload')}</PageTitle>
      <AppColumn>
        <S.Card title={t('uploads.basic')}>
          <AppUpload {...uploadProps}>
            <AppButton icon={<UploadOutlined />}>{t('uploads.clickToUpload')}</AppButton>
          </AppUpload>
        </S.Card>
        <S.Card title={t('uploads.directory')}>
          <AppUpload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
            <AppButton icon={<UploadOutlined />}>{t('uploads.directory')}</AppButton>
          </AppUpload>
        </S.Card>
        <S.Card title={t('uploads.dragger')}>
          <AppUpload.Dragger {...uploadProps}>
            <DraggerIconWrapper>
              <InboxOutlined />
            </DraggerIconWrapper>
            <DraggerTitle>{t('uploads.dragUpload')}</DraggerTitle>
            <DraggerDescription>{t('uploads.bulkUpload')}</DraggerDescription>
          </AppUpload.Dragger>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default UploadsPage;
