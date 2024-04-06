import { useState, useEffect } from 'react';
import { PoweroffOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../components/common/buttons/AppButton';
import { PageTitle } from '../../components/common/pageTitles/PageTitle';
import * as S from './UIComponentsPage.styles';
import { AppColumn } from '../../components/common/columns/AppColumn';
import { AppTooltip } from '../../components/common/tooltipes/AppTooltip';

const ButtonsPage = () => {
  const [loadings, setLoadings] = useState([]);
  const { t } = useTranslation();
  let timeout = null;

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [timeout]);

  const enterLoading = (index) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    timeout = setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <>
      <PageTitle>{t('common.button')}</PageTitle>
      <AppColumn>
        <S.Card title={t('buttons.types')}>
          <AppButton type="primary">{t('buttons.primary')}</AppButton>
          <AppButton type="default">{t('buttons.default')}</AppButton>
          <AppButton type="ghost">{t('buttons.ghost')}</AppButton>
          <AppButton type="dashed">{t('buttons.dashed')}</AppButton>
          <AppButton type="text">{t('buttons.text')}</AppButton>
          <AppButton type="link">{t('buttons.link')}</AppButton>
        </S.Card>
        <S.Card title={t('buttons.severities')}>
          <AppButton severity="info">{t('common.info')}</AppButton>
          <AppButton severity="success">{t('common.success')}</AppButton>
          <AppButton severity="warning">{t('common.warning')}</AppButton>
          <AppButton severity="error">{t('common.error')}</AppButton>
        </S.Card>
        <S.Card title={t('buttons.sizes')}>
          <AppButton type="ghost" size="small">
            {t('buttons.small')}
          </AppButton>
          <AppButton type="ghost" size="middle">
            {t('buttons.default')}
          </AppButton>
          <AppButton type="ghost" size="large">
            {t('buttons.large')}
          </AppButton>
        </S.Card>
        <S.Card title={t('buttons.loadings')}>
          <AppButton type="primary" size="small" loading>
            {t('buttons.loading')}
          </AppButton>
          <AppButton type="primary" loading>
            {t('buttons.loading')}
          </AppButton>
          <AppButton type="primary" icon={<PoweroffOutlined />} loading />

          <AppButton type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            {t('buttons.click')}
          </AppButton>
          <AppButton type="primary" icon={<PoweroffOutlined />} loading={loadings[1]} onClick={() => enterLoading(1)}>
            {t('buttons.click')}
          </AppButton>
          <AppButton
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </S.Card>
        <S.Card title={t('buttons.danger')}>
          <AppButton type="primary" danger>
            {t('buttons.primary')}
          </AppButton>
          <AppButton type="default" danger>
            {t('buttons.default')}
          </AppButton>
          <AppButton type="dashed" danger>
            {t('buttons.dashed')}
          </AppButton>
          <AppButton type="text" danger>
            {t('buttons.text')}
          </AppButton>
          <AppButton type="link" danger>
            {t('buttons.link')}
          </AppButton>
        </S.Card>
        <S.Card title={t('buttons.disabled')}>
          <AppButton type="primary" disabled>
            {t('buttons.primary')}
          </AppButton>
          <AppButton type="default" disabled>
            {t('buttons.default')}
          </AppButton>
          <AppButton type="ghost" disabled>
            {t('buttons.ghost')}
          </AppButton>
          <AppButton type="dashed" disabled>
            {t('buttons.dashed')}
          </AppButton>
          <AppButton type="text" disabled>
            {t('buttons.text')}
          </AppButton>
          <AppButton type="link" disabled>
            {t('buttons.link')}
          </AppButton>
        </S.Card>
        <S.Card title={t('buttons.icons')}>
          <AppTooltip title={t('buttons.search')}>
            <AppButton type="primary" shape="circle" icon={<SearchOutlined />} />
          </AppTooltip>
          <AppTooltip title={t('buttons.search')}>
            <AppButton type="primary" shape="circle">
              A
            </AppButton>
          </AppTooltip>
          <AppTooltip title={t('buttons.search')}>
            <AppButton type="primary" icon={<SearchOutlined />}>
              {t('buttons.search')}
            </AppButton>
          </AppTooltip>

          <AppTooltip title={t('buttons.search')}>
            <AppButton type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
          </AppTooltip>
          <AppTooltip title={t('buttons.search')}>
            <AppButton type="dashed" icon={<SearchOutlined />} size="large">
              {t('buttons.search')}
            </AppButton>
          </AppTooltip>
          <AppTooltip title={t('buttons.search')}>
            <AppButton type="ghost" icon={<SearchOutlined />} size="large" />
          </AppTooltip>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default ButtonsPage;
