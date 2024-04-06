import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { AppPopconfirm } from '../../../components/common/popconfirmes/AppPopconfirm';
import { TopButtons, LeftButtons, RightButtons, BottomButtons } from './PopoversPage';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { FONT_SIZE, media } from '../../../styles/themes/constants';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { Notification } from '../../../notifications/Notification';

const AsyncButton = styled(AppButton)`
  @media only screen and ${media.xs} {
    font-size: ${FONT_SIZE.xs};
  }
  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.md};
  }
`;

const PopconfirmsPage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const text = t('popconfirm.content');

  const confirm = () => {
    Notification.info({ message: t('popconfirm.yesClick') });
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <PageTitle>{t('common.popconfirm')}</PageTitle>
      <AppColumn>
        <S.Card title={t('popconfirm.basic')}>
          <AppPopconfirm title={text}>
            <AppButton type="primary">{t('common.delete')}</AppButton>
          </AppPopconfirm>
        </S.Card>
        <S.Card title={t('popconfirm.positions')}>
          <div>
            <TopButtons>
              <AppPopconfirm
                placement="topLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.tl')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="top"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.top')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="topRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.tr')}</AppButton>
              </AppPopconfirm>
            </TopButtons>
            <LeftButtons>
              <AppPopconfirm
                placement="leftTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.lt')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="left"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.left')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="leftBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.lb')}</AppButton>
              </AppPopconfirm>
            </LeftButtons>
            <RightButtons>
              <AppPopconfirm
                placement="rightTop"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.rt')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="right"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.right')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="rightBottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.rb')}</AppButton>
              </AppPopconfirm>
            </RightButtons>
            <BottomButtons>
              <AppPopconfirm
                placement="bottomLeft"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.bl')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="bottom"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.bottom')}</AppButton>
              </AppPopconfirm>
              <AppPopconfirm
                placement="bottomRight"
                title={text}
                onConfirm={confirm}
                okText={t('popconfirm.yes')}
                cancelText={t('popconfirm.no')}
              >
                <AppButton>{t('popovers.br')}</AppButton>
              </AppPopconfirm>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popconfirm.async')}>
          <AppPopconfirm
            title={t('popovers.title')}
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={() => setOpen(false)}
          >
            <AsyncButton type="primary" onClick={() => setOpen(true)}>
              {t('popconfirm.openAsync')}
            </AsyncButton>
          </AppPopconfirm>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default PopconfirmsPage;
