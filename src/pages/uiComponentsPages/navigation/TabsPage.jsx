import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { AppRadio } from '../../../components/common/radios/AppRadio';
import { AppTabs } from '../../../components/common/tabs/AppTabs';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const TabsPage = () => {
  const { t } = useTranslation();
  const [tabPosition, setTabPosition] = useState('top');

  const commonTabs = useMemo(
    () => [
      {
        key: '1',
        label: `${t('tabs.tab')} 1`,
        children: `${t('tabs.tabContent')} 1`,
      },
      {
        key: '2',
        label: `${t('tabs.tab')} 2`,
        children: `${t('tabs.tabContent')} 2`,
      },
      {
        key: '3',
        label: `${t('tabs.tab')} 3`,
        children: `${t('tabs.tabContent')} 3`,
      },
      {
        key: '4',
        label: `${t('tabs.tab')} 4`,
        children: `${t('tabs.tabContent')} 4`,
      },
    ],
    [t],
  );

  return (
    <>
      <PageTitle>{t('common.tabs')}</PageTitle>
      <AppColumn>
        <S.Card title={t('tabs.basic')}>
          <AppTabs defaultActiveKey="1" items={commonTabs} />
        </S.Card>
        <S.Card title={t('tabs.disabled')}>
          <AppTabs defaultActiveKey="1" items={commonTabs} />
        </S.Card>
        <S.Card title={t('tabs.withIcon')}>
          <AppTabs
            defaultActiveKey="2"
            items={[
              {
                key: '1',
                label: (
                  <span>
                    <AppleOutlined />
                    {t('tabs.tab')} 1
                  </span>
                ),
                children: `${t('tabs.tabContent')} 1`,
              },
              {
                key: '2',
                label: (
                  <span>
                    <AndroidOutlined />
                    {t('tabs.tab')} 2
                  </span>
                ),
                children: `${t('tabs.tabContent')} 2`,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('tabs.positions')}>
          <AppSpace direction="vertical" size={20}>
            <AppSpace wrap>
              {t('tabs.tabPosition')}
              <AppRadio.Group value={tabPosition} onChange={(event) => setTabPosition(event.target.value)}>
                <AppRadio.Button value="top">{t('tabs.top')}</AppRadio.Button>
                <AppRadio.Button value="bottom">{t('tabs.bottom')}</AppRadio.Button>
                <AppRadio.Button value="left">{t('tabs.left')}</AppRadio.Button>
                <AppRadio.Button value="right">{t('tabs.right')}</AppRadio.Button>
              </AppRadio.Group>
            </AppSpace>
            <AppTabs
              tabPosition={tabPosition}
              items={[
                {
                  key: '1',
                  label: `${t('tabs.tab')} 1`,
                  children: `${t('tabs.tabContent')} 1`,
                },
                {
                  key: '2',
                  label: `${t('tabs.tab')} 2`,
                  children: `${t('tabs.tabContent')} 2`,
                },
                {
                  key: '3',
                  label: `${t('tabs.tab')} 3`,
                  children: `${t('tabs.tabContent')} 3`,
                },
              ]}
            />
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default TabsPage;
