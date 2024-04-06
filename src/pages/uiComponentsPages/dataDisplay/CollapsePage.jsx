import { useTranslation } from 'react-i18next';
import { AppCollapse } from '../../../components/common/collapses/AppCollapse';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const CollapsePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.collapse')}</PageTitle>
      <AppColumn>
        <S.Card title={t('dataDisplay.collapse.basic')}>
          <S.CollapseWrapper defaultActiveKey={['1']}>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.accordion')}>
          <S.CollapseWrapper accordion defaultActiveKey={['2']}>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.nested')}>
          <S.CollapseWrapper defaultActiveKey="1">
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <AppCollapse defaultActiveKey="1">
                <AppCollapse.Panel header={t('dataDisplay.collapse.nestPanel')} key="1">
                  <p>{t('dataDisplay.collapse.text')}</p>
                </AppCollapse.Panel>
              </AppCollapse>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
        <S.Card title={t('dataDisplay.collapse.ghost')}>
          <S.CollapseWrapper defaultActiveKey={['1']} ghost>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 1`} key="1">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 2`} key="2">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
            <AppCollapse.Panel header={`${t('dataDisplay.collapse.panelHeader')} 3`} key="3">
              <p>{t('dataDisplay.collapse.text')}</p>
            </AppCollapse.Panel>
          </S.CollapseWrapper>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default CollapsePage;
